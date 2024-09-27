"use client";

import { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaSquareFacebook } from "react-icons/fa6";

import "./Navbar.scss";

const Navbar = () => {
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
      <Link
        className="artist-special-name"
        to="intro"
        spy={true}
        smooth={true}
        duration={50}
        offset={-160}
      >
        Iskra M. Angelova
      </Link>

      <Container className="navbar-content">
        <Row>
          <Col className="d-none d-lg-flex justify-content-end">
            <nav>
              <ul className="navbar-menu">
                <li>
                  <Link
                    to="intro"
                    spy={true}
                    smooth={true}
                    duration={50}
                    offset={-120}
                  >
                    Начало
                  </Link>
                </li>

                <li>
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={50}
                    offset={-95}
                  >
                    За&nbsp;мен
                  </Link>
                </li>

                <li>
                  <Link
                    to="activities"
                    spy={true}
                    smooth={true}
                    duration={50}
                    offset={-95}
                  >
                    Дейности
                  </Link>
                </li>

                <li>
                  <Link
                    to="teachings"
                    spy={true}
                    smooth={true}
                    duration={50}
                    offset={-95}
                  >
                    Обучения
                  </Link>
                </li>

                <li>
                  <Link
                    to="inspirations"
                    spy={true}
                    smooth={true}
                    duration={50}
                    offset={-95}
                  >
                    Галерия
                  </Link>
                </li>

                <li>
                  <Link
                    to="certificates"
                    spy={true}
                    smooth={true}
                    duration={50}
                    offset={-95}
                  >
                    Сертификати
                  </Link>
                </li>

                <li>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={50}
                    offset={-70}
                  >
                    Контакт
                  </Link>
                </li>
              </ul>
            </nav>
          </Col>
          <Col className="d-flex d-lg-none justify-content-end">
            <button className="hamburger-menu" onClick={handleToggleSidebar}>
              &#9776;
            </button>
          </Col>
        </Row>
      </Container>

      {/* Sidebar for Mobile */}
      <div ref={sidebarRef} className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={handleToggleSidebar}>
          &times;
        </button>
        <nav>
          <ul>
            <li>
              <Link
                to="intro"
                spy={true}
                smooth={true}
                duration={50}
                offset={-95}
                onClick={handleToggleSidebar}
              >
                Начало
              </Link>
            </li>

            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={50}
                offset={-95}
                onClick={handleToggleSidebar}
              >
                За мен
              </Link>
            </li>

            <li>
              <Link
                to="activities"
                spy={true}
                smooth={true}
                duration={50}
                offset={-95}
                onClick={handleToggleSidebar}
              >
                Дейности
              </Link>
            </li>

            <li>
              <Link
                to="teachings"
                spy={true}
                smooth={true}
                duration={50}
                offset={-95}
              >
                Обучения
              </Link>
            </li>

            <li>
              <Link
                to="inspirations"
                spy={true}
                smooth={true}
                duration={50}
                offset={-95}
                onClick={handleToggleSidebar}
              >
                Галерия
              </Link>
            </li>

            <li>
              <Link
                to="certificates"
                spy={true}
                smooth={true}
                duration={50}
                offset={-95}
                onClick={handleToggleSidebar}
              >
                Сертификати
              </Link>
            </li>

            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={50}
                offset={-70}
                onClick={handleToggleSidebar}
              >
                Контакт
              </Link>
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
