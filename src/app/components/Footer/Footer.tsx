import { useTranslations } from "next-intl";

import "./Footer.scss";

function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-text">
        <span>{t("footer.client")} © {year}</span>
        <p>{t("footer.developer")}</p>
      </div>
    </footer>
  );
}

export default Footer;
