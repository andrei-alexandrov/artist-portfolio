"use client";

import { Container } from "react-bootstrap";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import contactMic from "../../../assets/contact/contact-footer-mic.svg";
import connectMic from "../../../assets/lottie-animations/connect-mic-2.json";
import MediaIcons from "@/app/components/MediaIcons/MediaIcons";

import "./Contact.scss";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const ScrollToTopBtn = dynamic(
  () => import("../../../components/ScrollToTopButton/ScrollToTopBtn"),
  { ssr: false }
);



const Contact = () => {
  const t = useTranslations();

  return (
    <div id="contact">
      <div className="contact-container">
        <Container fluid className="title-container">
          <br />
          <div className="portfolio-section-title">{t("contact.title")}</div>
          <Lottie style={{ width: "110px" }} animationData={connectMic} />
        </Container>
        <Container>
          <div className="contact-info">
            <div className="contact-details">
              <div className="contact-email">iskra@highlight-singing.com</div>
              <div className="contact-location">{t("contact.location")}</div>
              <div className="contact-icons">
                <MediaIcons isBlackBackground={true} />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <p className="author-message">
          {t("contact.authorMessage")}
          <img style={{ marginTop: "1.5rem" }} src={contactMic.src} height={80} />
          <span className="author">{t("contact.authorName")}</span>
        </p>
      </Container>
      <ScrollToTopBtn />
    </div>
  );
};

export default Contact;