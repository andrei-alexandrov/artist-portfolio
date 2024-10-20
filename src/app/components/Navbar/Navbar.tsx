"use client";

import { useState, useRef, useEffect } from "react";
import { Col } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaSquareFacebook } from "react-icons/fa6";
import { useTranslations } from "use-intl";
import { usePathname } from 'next/navigation';
import Switcher from "../../components/Switcher/Switcher";
import Image from "next/image";
import Link from "next/link";

import bgFlag from "../../assets/bg.png";
import enFlag from "../../assets/gb.svg";

import "./Navbar.scss";

const Navbar: React.FC = () => {
  const t = useTranslations();
  const pathname = usePathname();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (sidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <div className="navbar-container">
      <ScrollLink
        className="artist-special-name"
        to="intro"
        spy={true}
        smooth={true}
        duration={50}
        offset={-160}
      >
        Iskra M. Angelova
      </ScrollLink>

      <div className="navbar-content">
        <span className="d-none d-lg-flex justify-content-center">
          <nav>
            <ul className="navbar-menu">
              <li>
                <ScrollLink
                  to="intro"
                  spy={true}
                  smooth={true}
                  duration={50}
                  offset={-120}
                >
                  {t("navbar.home")}
                </ScrollLink>
              </li>

              <li>
                <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={50}
                  offset={-95}
                >
                  {t("navbar.about")}
                </ScrollLink>
              </li>

              <li>
                <ScrollLink
                  to="activities"
                  spy={true}
                  smooth={true}
                  duration={50}
                  offset={-95}
                >
                  {t("navbar.activities")}
                </ScrollLink>
              </li>

              <li>
                <ScrollLink
                  to="courses"
                  spy={true}
                  smooth={true}
                  duration={50}
                  offset={-95}
                >
                  {t("navbar.courses")}
                </ScrollLink>
              </li>

              <li>
                <ScrollLink
                  to="gallery"
                  spy={true}
                  smooth={true}
                  duration={50}
                  offset={-95}
                >
                  {t("navbar.gallery")}
                </ScrollLink>
              </li>

              <li>
                <ScrollLink
                  to="certificates"
                  spy={true}
                  smooth={true}
                  duration={50}
                  offset={-95}
                >
                  {t("navbar.certificates")}
                </ScrollLink>
              </li>

              <li>
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={50}
                  offset={-70}
                >
                  {t("navbar.contact")}
                </ScrollLink>
              </li>
            </ul>
          </nav>
        </span>
        <Col className="d-lg-none">
          <button className="hamburger-menu" onClick={handleToggleSidebar}>
            &#9776;
          </button>
        </Col>
      </div>
      <Switcher />

      {/* Sidebar for Mobile */}
      <div ref={sidebarRef} className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={handleToggleSidebar}>
          &times;
        </button>
        <nav>
          <ul>
            <li>
              <ScrollLink
                to="intro"
                spy={true}
                smooth={true}
                duration={50}
                offset={-95}
                onClick={handleToggleSidebar}
              >
                {t("navbar.home")}
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                duration={50}
                offset={-95}
                onClick={handleToggleSidebar}
              >
                {t("navbar.about")}
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                to="activities"
                spy={true}
                smooth={true}
                duration={50}
                offset={-95}

                onClick={handleToggleSidebar}
              >
                {t("navbar.activities")}
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                to="courses"
                spy={true}
                smooth={true}
                duration={50}
                offset={-95}
              >
                {t("navbar.courses")}
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                to="gallery"
                spy={true}
                smooth={true}
                duration={50}
                offset={-95}
                onClick={handleToggleSidebar}
              >
                {t("navbar.gallery")}
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                to="certificates"
                spy={true}
                smooth={true}
                duration={50}
                offset={-95}
                onClick={handleToggleSidebar}
              >
                {t("navbar.certificates")}
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                duration={50}
                offset={-70}
                onClick={handleToggleSidebar}
              >
                {t("navbar.contact")}
              </ScrollLink>
            </li>
          </ul>
        </nav>

        {/* Sidebar Icons */}
        <div className="sidebar-icons">
          <a
            href="https://www.linkedin.com/in/iskra-milkova-228991ab/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon-container">
              <FaLinkedin />
            </div>
          </a>

          <a
            href="https://www.facebook.com/iskra.milkova1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon-container">
              <FaSquareFacebook />
            </div>
          </a>

          <a
            href="https://www.instagram.com/iskra_milkova_vocal_coach/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon-container">
              <FaInstagram />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
