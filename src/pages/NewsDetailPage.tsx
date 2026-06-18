import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Tag, ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { newsData } from "../data/news";
import NewsCard from "../components/NewsCard";
import { NewsItem } from "../types";

const localeMap: Record<string, string> = {
  pt: "pt-BR",
  en: "en-US",
  it: "it-IT",
};

function formatDate(dateStr: string, locale: string) {
  return new Date(dateStr).toLocaleDateString(locale, {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function NewsDetailPage() {
  const { t, i18n } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const rawItem = newsData.find((n) => n.slug === slug);
  if (!rawItem) return <Navigate to="/noticias" replace />;

  // Monta o item completo juntando dados fixos + traduções
  const item: NewsItem = {
    ...rawItem,
    title: t(`news.${rawItem.slug}.title`),
    subtitle: t(`news.${rawItem.slug}.subtitle`),
    category: t(`news.${rawItem.slug}.category`),
    summary: t(`news.${rawItem.slug}.summary`),
    content: t(`news.${rawItem.slug}.content`, {
      returnObjects: true,
    }) as string[],
  };

  const related = newsData
    .filter((n) => n.id !== item.id)
    .slice(0, 2)
    .map((n) => ({
      ...n,
      title: t(`news.${n.slug}.title`),
      subtitle: t(`news.${n.slug}.subtitle`),
      category: t(`news.${n.slug}.category`),
      summary: t(`news.${n.slug}.summary`),
      content: t(`news.${n.slug}.content`, { returnObjects: true }) as string[],
    }));

  const locale = localeMap[i18n.language] ?? "pt-BR";

  return (
    <>
      {/* Hero */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(10,50,120,0.75) 0%, rgba(255,183,226,0.50) 100%)",
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{
            background: "linear-gradient(90deg, #3AA3FF, #FFB7E2, #3AA3FF)",
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span
            className="text-white text-xs font-bold uppercase tracking-widest px-4 py-1 mb-4 rounded-full"
            style={{ background: "linear-gradient(135deg, #3AA3FF, #FFB7E2)" }}
          >
            {item.category}
          </span>
          <h1 className="font-serif text-white text-3xl md:text-5xl font-bold max-w-3xl leading-tight drop-shadow-lg">
            {item.title}
          </h1>
          <p
            className="italic mt-3 text-base drop-shadow"
            style={{ color: "#FFB7E2" }}
          >
            {item.subtitle}
          </p>
        </div>
      </div>

      {/* Article */}
      <article className="py-16 px-4 bg-parish-white">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-400 font-body border-b border-blue-50 pb-6">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {formatDate(item.date, locale)}
            </span>
            <span className="flex items-center gap-1">
              <Tag size={14} />
              {item.category}
            </span>
          </div>
          <div className="space-y-5">
            {item.content.map((paragraph, i) => (
              <p
                key={i}
                className="font-body text-gray-700 text-base leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-10 pt-6 border-t border-blue-50 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-body px-3 py-1 rounded-full uppercase tracking-wide"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(58,163,255,0.1), rgba(255,183,226,0.2))",
                  color: "#1a7fd4",
                }}
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/noticias"
              className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-widest hover:underline"
              style={{ color: "#3AA3FF" }}
            >
              <ArrowLeft size={16} />
              {t("newsDetailPage.back")}
            </Link>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="py-12 px-4" style={{ background: "#f0f8ff" }}>
          <div className="max-w-4xl mx-auto">
            <h3 className="font-serif text-parish-blueDeep text-2xl text-center mb-2">
              {t("newsDetailPage.otherPublications")}
            </h3>
            <div className="pink-divider" />
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((n) => (
                <NewsCard key={n.id} item={n} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
