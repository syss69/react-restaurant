import { createClient } from "contentful";
import type { Asset } from "contentful";

/**
 * Contentful content model (create a content type with this API ID, default: "news"):
 * - title: Short text (required)
 * - excerpt: Short text
 * - publishedDate: Date & time
 * - body: Long text
 * - image: Media (single asset, optional)
 *
 * Env: CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN, optional CONTENTFUL_ENVIRONMENT,
 * optional CONTENTFUL_NEWS_CONTENT_TYPE_ID (default "news").
 */

export type NewsArticle = {
  id: string;
  title: string;
  excerpt: string | null;
  publishedDate: string | null;
  body: string | null;
  imageUrl: string | null;
  imageAlt: string | null;
};

type NewsFields = {
  title: string;
  excerpt?: string;
  publishedDate?: string;
  body?: string;
  image?: Asset;
};

function assetUrl(asset?: Asset): string | null {
  const file = asset?.fields?.file;
  if (!file || typeof file !== "object") return null;
  const raw = "url" in file ? file.url : null;
  if (typeof raw !== "string" || !raw) return null;
  return raw.startsWith("http") ? raw : `https:${raw}`;
}

export function isContentfulConfigured(): boolean {
  return Boolean(
    process.env.CONTENTFUL_SPACE_ID?.trim() &&
      process.env.CONTENTFUL_ACCESS_TOKEN?.trim()
  );
}

export function getContentfulClient() {
  const space = process.env.CONTENTFUL_SPACE_ID?.trim();
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN?.trim();
  const environment = process.env.CONTENTFUL_ENVIRONMENT?.trim() || "master";
  if (!space || !accessToken) return null;
  return createClient({ space, accessToken, environment });
}

export async function getNewsArticles(): Promise<NewsArticle[]> {
  const client = getContentfulClient();
  if (!client) return [];

  const contentType =
    process.env.CONTENTFUL_NEWS_CONTENT_TYPE_ID?.trim() || "news";

  try {
    const response = await client.getEntries({
      content_type: contentType,
      order: ["-sys.createdAt"],
    });

    return response.items.map((item) => {
      const fields = item.fields as NewsFields;
      const image = fields.image;
      const imageUrl = assetUrl(image);
      const assetTitle = image?.fields?.title;
      const imageAlt =
        (typeof assetTitle === "string" ? assetTitle.trim() : null) ||
        fields.title ||
        null;

      return {
        id: item.sys.id,
        title: fields.title,
        excerpt: fields.excerpt?.trim() || null,
        publishedDate: fields.publishedDate ?? null,
        body: fields.body?.trim() || null,
        imageUrl,
        imageAlt,
      };
    });
  } catch (err) {
    console.error("[contentful] getNewsArticles failed:", err);
    return [];
  }
}
