"use client";

import { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";
import Image from "next/image";

import { FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaSquareFacebook } from "react-icons/fa6";
import navbarLogo from "../../assets/icons/music-mic.png";
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
        activeClass="active"
        to="intro"
        spy={true}
        smooth={true}
        duration={50}
        offset={-160}
      >
        <Image
          className="logo"
          src={navbarLogo}
          alt="logo"
          width={71}
          height={71}
        />
      </Link>

      <Container className="navbar-content">
        <Row>
          <Col className="d-none d-md-flex justify-content-end">
            <nav>
              <ul className="navbar-menu">
                <li>
                  <Link
                    activeClass="active"
                    to="intro"
                    spy={true}
                    smooth={true}
                    duration={50}
                    offset={-95}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={50}
                    offset={-95}
                  >
                    About Me
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="activities"
                    spy={true}
                    smooth={true}
                    duration={50}
                    offset={-95}
                  >
                    Activities
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="certificates"
                    spy={true}
                    smooth={true}
                    duration={50}
                    offset={-95}
                  >
                    Certificates
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="inspirations"
                    spy={true}
                    smooth={true}
                    duration={50}
                    offset={-95}
                  >
                    Inspirations
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={50}
                    offset={-95}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </Col>
          <Col className="d-flex d-md-none justify-content-end">
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
                Home
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
                About Me
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
                Activities
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
                Certificates
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
                Inspirations
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={50}
                offset={-95}
                onClick={handleToggleSidebar}
              >
                Contact
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
