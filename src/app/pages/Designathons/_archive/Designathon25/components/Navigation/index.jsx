import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cn from "./Navigation.module.scss";

const LINKS = [
  { name: "About", scrollTo: "about" },
  { name: "Itinerary", scrollTo: "itinerary" },
  { name: "FAQ", scrollTo: "faq" },
  { name: "Prizes", scrollTo: "prizes" },
  { name: "Partners", scrollTo: "sponsors" },
  { name: "Team", scrollTo: "team" },
  { name: "Rules", scrollTo: "rules" },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={cn.wrapper}>
      <div className={`${cn.bar} ${scrolled ? cn.barScrolled : ""}`}>
        <Link to="/" className={cn.logoLink}>
          <img
            src="/designathon25/2025/landing/designathon-logo.png"
            alt="Designathon logo"
            width={40}
            height={40}
            className={cn.logo}
          />
        </Link>
        <div className={cn.desktop}>
          {LINKS.map((link) => (
            <button
              key={link.name}
              type="button"
              onClick={() => scrollToSection(link.scrollTo)}
              className={cn.navLink}
            >
              {link.name}
            </button>
          ))}
          <a
            href="https://ucidesignathon.devpost.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn.cta}
          >
            Devpost
          </a>
        </div>
        <button
          type="button"
          aria-label="Menu"
          className={cn.mobileBtn}
          onClick={() => setMobileOpen((o) => !o)}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <div className={cn.mobileOverlay}>
          <div className={cn.mobileMenu}>
            {LINKS.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => {
                  scrollToSection(link.scrollTo);
                  setMobileOpen(false);
                }}
                className={cn.mobileLink}
              >
                {link.name}
              </button>
            ))}
            <a
              href="https://ucidesignathon.devpost.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn.mobileCta}
            >
              Devpost
            </a>
            <button
              type="button"
              aria-label="Close"
              className={cn.closeBtn}
              onClick={() => setMobileOpen(false)}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
