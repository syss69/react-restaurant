"use client";

import Image from "next/image";
import useReveal from "@/src/hooks/useReveal";
import type { NewsArticle } from "@/src/lib/contentful";

type Props = {
  articles: NewsArticle[];
  contentfulConfigured: boolean;
};

function formatDate(iso: string | null): string | null {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "long",
  }).format(d);
}

export default function NewsPageClient({
  articles,
  contentfulConfigured,
}: Props) {
  useReveal(".reveal");

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl reveal">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Actualités
          </h1>

          <p className="text-gray-600 mb-10">
            Nouvelles, événements et annonces du restaurant.
          </p>
        </div>

        {!contentfulConfigured && (
          <div className="reveal rounded-2xl border border-amber-200 bg-amber-50 p-8 text-amber-950">
            <p className="font-medium mb-2">Contentful n’est pas configuré</p>
            <p className="text-sm text-amber-900/90">
              Ajoutez{" "}
              <code className="rounded bg-amber-100/80 px-1.5 py-0.5 text-xs">
                CONTENTFUL_SPACE_ID
              </code>{" "}
              et{" "}
              <code className="rounded bg-amber-100/80 px-1.5 py-0.5 text-xs">
                CONTENTFUL_ACCESS_TOKEN
              </code>{" "}
              dans{" "}
              <code className="rounded bg-amber-100/80 px-1.5 py-0.5 text-xs">
                .env.local
              </code>{" "}
              (jeton Delivery API en lecture seule).
            </p>
          </div>
        )}

        {contentfulConfigured && articles.length === 0 && (
          <div className="reveal rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center">
            <div className="mx-auto mb-6 h-16 w-16 rounded-xl bg-rose-200" />
            <h2 className="mb-3 text-xl font-semibold">
              Aucune actualité pour le moment
            </h2>
            <p className="mx-auto max-w-xl text-gray-500">
              Publiez des entrées du type de contenu configuré dans Contentful
              pour les afficher ici.
            </p>
          </div>
        )}

        {articles.length > 0 && (
          <ul className="space-y-10">
            {articles.map((article) => (
              <li key={article.id} className="reveal">
                <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                  {article.imageUrl && (
                    <div className="relative aspect-[16/9] w-full bg-gray-100">
                      <Image
                        src={article.imageUrl}
                        alt={article.imageAlt || article.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 896px"
                      />
                    </div>
                  )}

                  <div className="p-6 md:p-8">
                    {formatDate(article.publishedDate) && (
                      <time
                        dateTime={article.publishedDate ?? undefined}
                        className="text-sm text-gray-500"
                      >
                        {formatDate(article.publishedDate)}
                      </time>
                    )}

                    <h2 className="mt-1 font-serif text-2xl font-bold text-gray-900">
                      {article.title}
                    </h2>

                    {article.excerpt && (
                      <p className="mt-3 text-lg text-gray-700">
                        {article.excerpt}
                      </p>
                    )}

                    {article.body && (
                      <div className="mt-4 whitespace-pre-wrap text-gray-600">
                        {article.body}
                      </div>
                    )}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
