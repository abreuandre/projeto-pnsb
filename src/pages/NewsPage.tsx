import { useState } from "react";
import { useTranslation } from "react-i18next";
import SectionHeader from "../components/SectionHeader";
import NewsCard from "../components/NewsCard";
import { newsData } from "../data/news";
import { NewsItem } from "../types";

const categoryKeys = ["all", "Evento", "Catequese", "Retiro", "Oracao", "Dizimo", "Confissoes"];

export default function NewsPage() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");

  // Monta os itens completos juntando dados fixos + traduções
  const translatedNews: NewsItem[] = newsData.map((item) => ({
    ...item,
    title: t(`news.${item.slug}.title`),
    subtitle: t(`news.${item.slug}.subtitle`),
    category: t(`news.${item.slug}.category`),
    summary: t(`news.${item.slug}.summary`),
    content: t<string[]>(`news.${item.slug}.content`, {
      returnObjects: true,
    }),
  }));

  const filtered =
    activeCategory === "all"
      ? translatedNews
      : translatedNews.filter(
          (n) => n.category === t(`newsPage.categories.${activeCategory}`),
        );

  return (
    <>
      <section className="py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/img1.avif"
            alt="Igreja"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(10,50,120,0.88) 0%, rgba(255,183,226,0.60) 100%)",
            }}
          />
        </div>
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{
            background: "linear-gradient(90deg, #3AA3FF, #FFB7E2, #3AA3FF)",
          }}
        />
        <div className="relative z-10">
          <p className="font-latin text-pink-200 italic text-lg mb-3">
            {t("newsPage.hero.kicker")}
          </p>
          <h1 className="font-serif text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            {t("newsPage.hero.title")}
          </h1>
          <div
            className="w-20 h-0.5 mx-auto"
            style={{ background: "linear-gradient(90deg, #3AA3FF, #FFB7E2)" }}
          />
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white py-6 px-4 border-b border-blue-50 shadow-sm">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-3 justify-center">
          {categoryKeys.map((catKey) => (
            <button
              key={catKey}
              onClick={() => setActiveCategory(catKey)}
              className={`font-body text-xs uppercase tracking-widest px-5 py-2 rounded-full border-2 transition-all ${
                activeCategory === catKey
                  ? "text-white border-transparent"
                  : "text-gray-500 border-gray-200 hover:border-parish-blue hover:text-parish-blue"
              }`}
              style={
                activeCategory === catKey
                  ? {
                      background: "linear-gradient(135deg, #3AA3FF, #FFB7E2)",
                      borderColor: "transparent",
                    }
                  : {}
              }
            >
              {t(`newsPage.categories.${catKey}`)}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-parish-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title={
              activeCategory === "all"
                ? t("newsPage.allPublications")
                : t(`newsPage.categories.${activeCategory}`)
            }
            subtitle={t("newsPage.resultsCount", { count: filtered.length })}
          />
          {filtered.length === 0 ? (
            <p className="text-center text-gray-400 font-body py-16">
              {t("newsPage.empty")}
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filtered.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
