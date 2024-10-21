import { useTranslations } from "next-intl";

import "./Footer.scss";

function Footer() {
  const t = useTranslations();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <span>{t("footer.client")}</span>
          <p>{t("footer.developer")}</p>
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
