import React from "react";

import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <span>Created by Andrei Alexandrov 2024 ©</span>
          <p>andrei.alxv@gmail.com</p>
          <div className="footer-icons">
            <a
              href="https://www.github.com/andrei-alexandrov"
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              href="https://www.linkedin.com/in/andrei-alexandrov/"
              target="_blank"
              rel="noreferrer"
            ></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
