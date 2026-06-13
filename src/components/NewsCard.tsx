import { Link } from "react-router-dom";
import { Calendar, Tag } from "lucide-react";
import { useTranslation } from "react-i18next";
import { NewsItem } from "../types";

interface NewsCardProps {
  item: NewsItem;
}

function formatDate(dateStr: string, locale: string) {
  return new Date(dateStr).toLocaleDateString(locale, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

const localeMap: Record<string, string> = {
  pt: "pt-BR",
  en: "en-US",
  it: "it-IT",
};

export default function NewsCard({ item }: NewsCardProps) {
  const { t, i18n } = useTranslation();
  const locale = localeMap[i18n.language] ?? "pt-BR";

  return (
    <Link
      to={`/noticias/${item.slug}`}
      className="group block bg-white border border-blue-100 hover:border-parish-blue transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden rounded-lg"
    >
      <div className="overflow-hidden h-48 relative">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          style={{ background: "linear-gradient(135deg, #3AA3FF, #FFB7E2)" }}
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <span
            className="text-xs font-body font-bold uppercase tracking-wide px-2 py-0.5 rounded-full text-white"
            style={{ background: "linear-gradient(135deg, #3AA3FF, #FFB7E2)" }}
          >
            <Tag size={10} className="inline mr-1" />
            {item.category}
          </span>
          <span className="text-gray-400 text-xs flex items-center gap-1">
            <Calendar size={12} />
            {formatDate(item.date, locale)}
          </span>
        </div>
        <h3 className="font-serif text-parish-blueDeep text-lg leading-snug mb-2 group-hover:text-parish-blue transition-colors">
          {item.title}
        </h3>
        <p className="text-gray-500 text-sm font-body leading-relaxed line-clamp-3">
          {item.summary}
        </p>
        <p className="mt-4 text-xs font-bold uppercase tracking-widest group-hover:tracking-wider transition-all gradient-text">
          {t("newsCard.readMore")}
        </p>
      </div>
    </Link>
  );
}
