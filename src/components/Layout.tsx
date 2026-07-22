import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function FlagBR({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="18" cy="18" r="18" fill="#009b3a" />
      <polygon points="18,6 32,18 18,30 4,18" fill="#fedf00" />
      <circle cx="18" cy="18" r="6.5" fill="#002776" />
      <path
        d="M12 16.5 a8 8 0 0 1 12 0"
        stroke="#fff"
        strokeWidth="0.8"
        fill="none"
      />
    </svg>
  );
}

function FlagGB({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="gbClip">
          <circle cx="18" cy="18" r="18" />
        </clipPath>
      </defs>
      <g clipPath="url(#gbClip)">
        <rect width="36" height="36" fill="#012169" />
        <path d="M0 0 L36 36 M36 0 L0 36" stroke="#fff" strokeWidth="5" />
        <path d="M0 0 L36 36 M36 0 L0 36" stroke="#C8102E" strokeWidth="2.2" />
        <path d="M18 0 V36 M0 18 H36" stroke="#fff" strokeWidth="8" />
        <path d="M18 0 V36 M0 18 H36" stroke="#C8102E" strokeWidth="4.5" />
      </g>
    </svg>
  );
}

function FlagIT({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="itClip">
          <circle cx="18" cy="18" r="18" />
        </clipPath>
      </defs>
      <g clipPath="url(#itClip)">
        <rect width="12" height="36" fill="#009246" />
        <rect x="12" width="12" height="36" fill="#fff" />
        <rect x="24" width="12" height="36" fill="#ce2b37" />
      </g>
    </svg>
  );
}

const languages = [
  { code: "pt", Flag: FlagBR, label: "Português" },
  { code: "en", Flag: FlagGB, label: "English" },
  { code: "it", Flag: FlagIT, label: "Italiano" },
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();

  const navLinks = [
    { to: "/", label: t("nav.home") },
    { to: "/historia", label: t("nav.history") },
    { to: "/noticias", label: t("nav.news") },
    { to: "/equipe", label: t("nav.team") },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top ribbon */}
      <div
        className="text-white text-xs py-2 px-4 text-center font-body tracking-widest uppercase"
        style={{
          background: "linear-gradient(90deg, #3AA3FF, #FFB7E2, #3AA3FF)",
        }}
      >
        ✦ {t("ribbon")} ✦
      </div>

      {/* Navbar */}
      <header
        className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-transparent"
        style={{ borderImage: "linear-gradient(90deg, #3AA3FF, #FFB7E2) 1" }}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/img1.avif"
              alt="Logo"
              className="w-12 h-12 object-contain rounded-full border-2 border-parish-blue"
            />
            <div>
              <p className="font-serif text-parish-blueDeep text-base leading-tight font-bold">
                Nossa Senhora
              </p>
              <p
                className="font-serif text-sm leading-tight italic"
                style={{ color: "#FFB7E2" }}
              >
                do Bonsucesso
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-body text-sm tracking-wide uppercase transition-colors duration-200 ${
                  pathname === link.to
                    ? "text-parish-blue border-b-2 border-parish-blue pb-0.5"
                    : "text-gray-500 hover:text-parish-blue"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/noticias"
              className="btn-primary text-xs py-2 px-5 rounded-full"
            >
              {t("nav.events")}
            </Link>

            {/* Language switcher */}
            <div className="flex items-center gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => i18n.changeLanguage(lang.code)}
                  title={lang.label}
                  aria-label={lang.label}
                  className={`rounded-full overflow-hidden transition-all duration-200 ${
                    i18n.language === lang.code
                      ? "ring-2 ring-parish-blue scale-110"
                      : "opacity-50 hover:opacity-100"
                  }`}
                >
                  <lang.Flag size={24} />
                </button>
              ))}
            </div>
          </nav>

          {/* Mobile burger */}
          <button
            className="md:hidden text-parish-blue"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-blue-50 px-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`block py-3 font-body text-sm tracking-wide uppercase border-b border-blue-50 ${
                  pathname === link.to ? "text-parish-blue" : "text-gray-500"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Language switcher mobile */}
            <div className="flex items-center gap-3 pt-3">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    i18n.changeLanguage(lang.code);
                    setMenuOpen(false);
                  }}
                  title={lang.label}
                  aria-label={lang.label}
                  className={`rounded-full overflow-hidden transition-all duration-200 ${
                    i18n.language === lang.code
                      ? "ring-2 ring-parish-blue scale-110"
                      : "opacity-50 hover:opacity-100"
                  }`}
                >
                  <lang.Flag size={28} />
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer
        className="text-white font-body"
        style={{ background: "linear-gradient(135deg, #0d4f8c, #1a7fd4)" }}
      >
        <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-white text-lg mb-3">
              Nossa Senhora do Bonsucesso
            </h3>
            <p className="text-sm leading-relaxed text-blue-100">
              {t("footer.description")}
            </p>
            <div
              className="mt-4 w-16 h-0.5"
              style={{ background: "linear-gradient(90deg, #FFB7E2, #3AA3FF)" }}
            />
          </div>
          <div>
            <h4
              className="font-serif mb-3 text-base"
              style={{ color: "#FFB7E2" }}
            >
              {t("footer.massTitle")}
            </h4>
            <ul className="text-sm space-y-1 text-blue-100">
              <li>{t("footer.massMonday")}</li>
              <li>{t("footer.massWednesday")}</li>
              <li>{t("footer.massThursday")}</li>
              <li>{t("footer.massFriday")}</li>
              <li>{t("footer.massSunday")}</li>
            </ul>
          </div>
          <div>
            <h4
              className="font-serif mb-3 text-base"
              style={{ color: "#FFB7E2" }}
            >
              {t("footer.contactTitle")}
            </h4>
            <ul className="text-sm space-y-1 text-blue-100">
              <li>Rua General Galieni, 122 - Bonsucesso</li>
              <li>Rio de Janeiro – RJ</li>
              <li>(21) 97913-9004</li>
              <li>bonsucesso@arqrio.org.br</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-700 text-center text-xs py-4 text-blue-300">
          © {new Date().getFullYear()} {t("footer.copyright")}
        </div>
      </footer>
    </div>
  );
}
