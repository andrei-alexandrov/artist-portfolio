"use client";

import { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
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
      {/* Navbar Content */}
      <div className="navbar-container">
        {/* Logo Placeholder, change later with real one and style */}
        <div className="logo">Logo</div>
        <Container className="navbar-content">
          <Row>
            <Col className="d-none d-md-flex justify-content-end">
              <nav>
                <ul className="navbar-menu">
                  <li>
                    <a href="#about">About Me</a>
                  </li>
                  <li>
                    <a href="#projects">Projects</a>
                  </li>
                  <li>
                    <a href="#clients">Clients</a>
                  </li>
                  <li>
                    <a href="#media">Media</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </nav>
            </Col>
            <Col className="d-flex d-md-none justify-content-end">
              <button className="hamburger-menu" onClick={handleToggleSidebar}>
                {/* Navbar hamburger icon - change later */}
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
            {/* "x" symbol, change later with a nice icon */}
            &times;
          </button>
          <nav>
            <ul>
              <li>
                <a href="#about" onClick={handleToggleSidebar}>
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" onClick={handleToggleSidebar}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#clients" onClick={handleToggleSidebar}>
                  Clients
                </a>
              </li>
              <li>
                <a href="#media" onClick={handleToggleSidebar}>
                  Media
                </a>
              </li>
              <li>
                <a href="#contact" onClick={handleToggleSidebar}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
