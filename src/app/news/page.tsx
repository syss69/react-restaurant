import NewsPageClient from "./NewsPageClient";
import {
  getNewsArticles,
  isContentfulConfigured,
} from "@/src/lib/contentful";

export const revalidate = 60;

export default async function ActualitesPage() {
  const contentfulConfigured = isContentfulConfigured();
  const articles = contentfulConfigured ? await getNewsArticles() : [];

  return (
    <NewsPageClient
      articles={articles}
      contentfulConfigured={contentfulConfigured}
    />
  );
}
