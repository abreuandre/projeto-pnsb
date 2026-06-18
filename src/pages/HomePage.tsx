import { Link } from "react-router-dom";
import { ChevronDown, BookOpen, Clock, Users, Newspaper } from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionHeader from "../components/SectionHeader";
import NewsCard from "../components/NewsCard";
import { newsData } from "../data/news";
import { NewsItem } from "../types";

const massTimesData = [
  { key: "weekdays", times: ["07h00"] },
  { key: "saturday", times: ["08h00", "18h00"] },
  { key: "sunday", times: ["07h00", "09h00", "11h00", "19h00"] },
];

const highlightsData = [
  { key: "faith", icon: <BookOpen size={28} className="text-parish-blue" /> },
  { key: "community", icon: <Users size={28} className="text-parish-blue" /> },
  { key: "dailyMass", icon: <Clock size={28} className="text-parish-blue" /> },
];

export default function HomePage() {
  const { t } = useTranslation();

  // Monta os 3 itens mais recentes de notícia já traduzidos
  const latestNews: NewsItem[] = newsData.slice(0, 3).map((item) => ({
    ...item,
    title: t(`news.${item.slug}.title`),
    subtitle: t(`news.${item.slug}.subtitle`),
    category: t(`news.${item.slug}.category`),
    summary: t(`news.${item.slug}.summary`),
    content: t(`news.${item.slug}.content`, {
      returnObjects: true,
    }) as string[],
  }));

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/img2.avif"
            alt="Igreja"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, rgba(10,50,120,0.80) 0%, rgba(26,127,212,0.65) 50%, rgba(255,183,226,0.55) 100%)",
            }}
          />
        </div>

        {/* Floating orbs */}
        <div
          className="absolute top-20 left-10 w-40 h-40 rounded-full opacity-20 blur-3xl animate-float"
          style={{ background: "#FFB7E2" }}
        />
        <div
          className="absolute bottom-32 right-16 w-56 h-56 rounded-full opacity-15 blur-3xl animate-float"
          style={{ background: "#3AA3FF", animationDelay: "2s" }}
        />

        {/* Top rainbow bar */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{
            background: "linear-gradient(90deg, #3AA3FF, #FFB7E2, #3AA3FF)",
          }}
        />

        <div className="relative z-10 px-6 max-w-3xl mx-auto animate-fadeInUp">
          <p className="font-latin text-pink-200 text-base md:text-lg italic tracking-widest mb-4">
            Ave Maria, Gratia Plena
          </p>
          <h1 className="font-serif text-white text-4xl md:text-6xl font-bold leading-tight mb-2 drop-shadow-lg">
            {t("homePage.hero.titleLine1")}
          </h1>
          <h1
            className="font-serif text-4xl md:text-6xl font-bold leading-tight italic mb-6 drop-shadow-lg"
            style={{ color: "#FFB7E2" }}
          >
            {t("homePage.hero.titleLine2")}
          </h1>
          <div
            className="w-24 h-0.5 mx-auto mb-6"
            style={{ background: "linear-gradient(90deg, #3AA3FF, #FFB7E2)" }}
          />
          <p className="font-body text-blue-50 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto drop-shadow">
            {t("homePage.hero.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/historia" className="btn-primary rounded-full">
              {t("homePage.hero.ctaHistory")}
            </Link>
            <Link
              to="/noticias"
              className="btn-outline rounded-full border-white text-white hover:border-transparent"
            >
              {t("homePage.hero.ctaEvents")}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 text-white animate-bounce opacity-70">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* ── MASS TIMES ── */}
      <section
        className="py-16 px-4"
        style={{ background: "linear-gradient(135deg, #0d4f8c, #1a7fd4)" }}
      >
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title={t("homePage.massTimes.title")}
            subtitle={t("homePage.massTimes.subtitle")}
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {massTimesData.map((m) => (
              <div
                key={m.key}
                className="border border-white/20 bg-white/10 backdrop-blur p-6 text-center rounded-xl hover:bg-white/20 transition-colors"
              >
                <p className="font-serif text-pink-200 text-xl mb-3">
                  {t(`homePage.massTimes.days.${m.key}`)}
                </p>
                {m.times.map((time) => (
                  <p key={time} className="font-body text-white text-lg">
                    {time}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WELCOME ── */}
      <section className="py-20 px-4 bg-parish-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-latin text-parish-blue text-base italic mb-2">
                {t("homePage.welcome.kicker")}
              </p>
              <h2 className="section-title text-left mb-4">
                {t("homePage.welcome.title")}
              </h2>
              <div className="blue-divider" />
              <p className="font-body text-gray-600 leading-relaxed mb-4">
                {t("homePage.welcome.paragraph1")}
              </p>
              <p className="font-body text-gray-600 leading-relaxed mb-8">
                {t("homePage.welcome.paragraph2")}{" "}
                <em>{t("homePage.welcome.quote")}</em> (Mt 11,28)
              </p>
              <Link
                to="/equipe"
                className="btn-primary inline-block rounded-full"
              >
                {t("homePage.welcome.cta")}
              </Link>
            </div>
            <div className="relative">
              <img
                src="/img1.avif"
                alt="Interior da paróquia"
                className="w-full h-80 object-cover shadow-xl rounded-2xl"
              />
              {/* Decorative blob */}
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full -z-10 opacity-40"
                style={{
                  background: "linear-gradient(135deg, #3AA3FF, #FFB7E2)",
                }}
              />
              <div
                className="absolute -top-4 -left-4 w-16 h-16 rounded-full -z-10 opacity-30"
                style={{ background: "#FFB7E2" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="py-16 px-4" style={{ background: "#f0f8ff" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlightsData.map((h) => (
            <div
              key={h.key}
              className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-blue-50 group"
            >
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(58,163,255,0.15), rgba(255,183,226,0.25))",
                  }}
                >
                  {h.icon}
                </div>
              </div>
              <h3 className="font-serif text-parish-blueDeep text-xl mb-3">
                {t(`homePage.highlights.${h.key}.title`)}
              </h3>
              <p className="font-body text-gray-500 text-sm leading-relaxed">
                {t(`homePage.highlights.${h.key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── LATEST NEWS ── */}
      <section className="py-20 px-4 bg-parish-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-latin text-parish-blue italic text-base mb-1">
                {t("homePage.news.kicker")}
              </p>
              <h2 className="section-title text-left mb-2">
                {t("homePage.news.title")}
              </h2>
              <div className="blue-divider" />
            </div>
            <Link
              to="/noticias"
              className="hidden sm:flex items-center gap-2 text-parish-blue font-body text-sm uppercase tracking-widest hover:underline"
            >
              <Newspaper size={16} /> {t("homePage.news.viewAll")}
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {latestNews.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #3AA3FF 0%, #a8d8ff 50%, #FFB7E2 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, white 1px, transparent 1px), radial-gradient(circle at 70% 20%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="font-latin text-white/80 italic text-lg mb-3 drop-shadow">
            {t("homePage.cta.quote")}
          </p>
          <h2 className="font-serif text-white text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
            {t("homePage.cta.title")}
          </h2>
          <p className="font-body text-white/90 mb-8 leading-relaxed drop-shadow">
            {t("homePage.cta.description")}
          </p>
          <Link
            to="/noticias"
            className="inline-block bg-white font-body font-bold px-8 py-3 rounded-full tracking-wide uppercase text-sm transition-all hover:shadow-lg hover:scale-105"
            style={{ color: "#1a7fd4" }}
          >
            {t("homePage.cta.button")}
          </Link>
        </div>
      </section>
    </>
  );
}
