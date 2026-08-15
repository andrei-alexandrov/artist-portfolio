"use client";

import { useState, useRef, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaSquareFacebook } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import { SOCIAL_URLS } from "../../socialLinks";
import Switcher from "../../components/Switcher/Switcher";

import "./Navbar.scss";

type NavItem = {
  target: string;
  labelKey:
    | "navbar.home"
    | "navbar.about"
    | "navbar.activities"
    | "navbar.courses"
    | "navbar.gallery"
    | "navbar.certificates"
    | "navbar.contact";
};

const NAV_ITEMS: NavItem[] = [
  { target: "intro", labelKey: "navbar.home" },
  { target: "about", labelKey: "navbar.about" },
  { target: "activities", labelKey: "navbar.activities" },
  { target: "courses", labelKey: "navbar.courses" },
  { target: "gallery", labelKey: "navbar.gallery" },
  { target: "certificates", labelKey: "navbar.certificates" },
  { target: "contact", labelKey: "navbar.contact" },
];

const SOCIAL_LINKS = [
  { href: SOCIAL_URLS.linkedIn, label: "LinkedIn", Icon: FaLinkedin },
  { href: SOCIAL_URLS.facebook, label: "Facebook", Icon: FaSquareFacebook },
  { href: SOCIAL_URLS.instagram, label: "Instagram", Icon: FaInstagram },
];

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
      <a className="artist-special-name" href="#intro">
        Iskra M. Angelova
      </a>

      <div className="navbar-content">
        <span className="navbar-desktop">
          <nav>
            <ul className="navbar-menu">
              {NAV_ITEMS.map(({ target, labelKey }) => (
                <li key={target}>
                  <a href={`#${target}`}>{t(labelKey)}</a>
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
            {NAV_ITEMS.map(({ target, labelKey }) => (
              <li key={target}>
                <a
                  href={`#${target}`}
                  tabIndex={sidebarOpen ? 0 : -1}
                  onClick={closeSidebar}
                >
                  {t(labelKey)}
                </a>
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
