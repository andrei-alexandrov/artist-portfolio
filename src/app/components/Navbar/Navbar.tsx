"use client";

import { useState, useRef, useEffect } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaSquareFacebook } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import { SOCIAL_URLS } from "../../socialLinks";
import Switcher from "../../components/Switcher/Switcher";

import "./Navbar.scss";

const SCROLL_PROPS = { spy: true, smooth: true, duration: 50 } as const;

type NavItem = {
  target: string;
  labelKey: "navbar.home" | "navbar.about" | "navbar.activities" | "navbar.courses" | "navbar.gallery" | "navbar.certificates" | "navbar.contact";
  desktopOffset: number;
  sidebarOffset: number;
};

const NAV_ITEMS: NavItem[] = [
  { target: "intro", labelKey: "navbar.home", desktopOffset: -120, sidebarOffset: -95 },
  { target: "about", labelKey: "navbar.about", desktopOffset: -95, sidebarOffset: -95 },
  { target: "activities", labelKey: "navbar.activities", desktopOffset: -95, sidebarOffset: -95 },
  { target: "courses", labelKey: "navbar.courses", desktopOffset: -95, sidebarOffset: -95 },
  { target: "gallery", labelKey: "navbar.gallery", desktopOffset: -95, sidebarOffset: -95 },
  { target: "certificates", labelKey: "navbar.certificates", desktopOffset: -95, sidebarOffset: -95 },
  { target: "contact", labelKey: "navbar.contact", desktopOffset: -70, sidebarOffset: -70 },
];

const SOCIAL_LINKS = [
  { href: SOCIAL_URLS.linkedIn, label: "LinkedIn", Icon: FaLinkedin },
  { href: SOCIAL_URLS.facebook, label: "Facebook", Icon: FaSquareFacebook },
  { href: SOCIAL_URLS.instagram, label: "Instagram", Icon: FaInstagram },
];

// react-scroll links render anchors without href, so Enter/Space needs a manual handler.
const scrollOnKey = (event: React.KeyboardEvent, target: string, offset: number) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  scroller.scrollTo(target, { ...SCROLL_PROPS, offset });
};

const Navbar = () => {
  const t = useTranslations();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const closeSidebar = () => setSidebarOpen(false);
  const toggleSidebar = () => setSidebarOpen((open) => !open);

  useEffect(() => {
    if (!sidebarOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        closeSidebar();
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeSidebar();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [sidebarOpen]);

  return (
    <header className="navbar-container">
      <ScrollLink
        className="artist-special-name"
        to="intro"
        {...SCROLL_PROPS}
        offset={-160}
        tabIndex={0}
        onKeyDown={(event: React.KeyboardEvent) => scrollOnKey(event, "intro", -160)}
      >
        Iskra M. Angelova
      </ScrollLink>

      <div className="navbar-content">
        <span className="navbar-desktop">
          <nav>
            <ul className="navbar-menu">
              {NAV_ITEMS.map(({ target, labelKey, desktopOffset }) => (
                <li key={target}>
                  <ScrollLink
                    to={target}
                    {...SCROLL_PROPS}
                    offset={desktopOffset}
                    tabIndex={0}
                    onKeyDown={(event: React.KeyboardEvent) => scrollOnKey(event, target, desktopOffset)}
                  >
                    {t(labelKey)}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </nav>
        </span>
        <div className="navbar-mobile-toggle">
          <button
            className="hamburger-menu"
            onClick={toggleSidebar}
            aria-label={t("navbar.openMenu")}
            aria-expanded={sidebarOpen}
          >
            &#9776;
          </button>
        </div>
      </div>
      <Switcher />

      {/* Sidebar for Mobile */}
      <div ref={sidebarRef} className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={closeSidebar} aria-label={t("navbar.closeMenu")}>
          &times;
        </button>
        <nav>
          <ul>
            {NAV_ITEMS.map(({ target, labelKey, sidebarOffset }) => (
              <li key={target}>
                <ScrollLink
                  to={target}
                  {...SCROLL_PROPS}
                  offset={sidebarOffset}
                  tabIndex={sidebarOpen ? 0 : -1}
                  onClick={closeSidebar}
                  onKeyDown={(event: React.KeyboardEvent) => {
                    scrollOnKey(event, target, sidebarOffset);
                    if (event.key === "Enter" || event.key === " ") closeSidebar();
                  }}
                >
                  {t(labelKey)}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-icons">
          {SOCIAL_LINKS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              tabIndex={sidebarOpen ? 0 : -1}
            >
              <div className="icon-container">
                <Icon />
              </div>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
