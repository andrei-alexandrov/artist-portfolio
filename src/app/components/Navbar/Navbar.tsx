"use client";

import { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";
import Image from "next/image";

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
    <>
      <div className="navbar-container">
        {/* Logo Placeholder, change later with real one and style */}
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
                      to="about"
                      spy={true}
                      smooth={true}
                      duration={50}
                      offset={-70}
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
                      offset={-70}
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
                      offset={-70}
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
                      offset={-70}
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
                      offset={-70}
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
        <div
          ref={sidebarRef}
          className={`sidebar ${sidebarOpen ? "open" : ""}`}
        >
          <button className="close-btn" onClick={handleToggleSidebar}>
            &times;
          </button>
          <nav>
            <ul>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={50}
                  offset={-70}
                  onClick={handleToggleSidebar}
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={50}
                  offset={-70}
                  onClick={handleToggleSidebar}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="clients"
                  spy={true}
                  smooth={true}
                  duration={50}
                  offset={-70}
                  onClick={handleToggleSidebar}
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  to="media"
                  spy={true}
                  smooth={true}
                  duration={50}
                  offset={-70}
                  onClick={handleToggleSidebar}
                >
                  Media
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
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
