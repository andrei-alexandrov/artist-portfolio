import { useTranslations } from "next-intl";

import "./Footer.scss";

function Footer() {
  const t = useTranslations();

  return (
    <footer className="footer">
      <div className="footer-text">
        <span>{t("footer.client")}</span>
        <p>{t("footer.developer")}</p>
      </div>
    </footer>
  );
}

export default Footer;
