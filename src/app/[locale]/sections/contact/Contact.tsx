"use client";

import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Image from "next/image";
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

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div id="contact">
      <div className="contact-container">
        <div className="title-container">
          <br />
          <h2 className="portfolio-section-title">{t("contact.title")}</h2>
          <Lottie
            style={{ width: "110px" }}
            animationData={connectMic}
            autoplay={!prefersReducedMotion}
            loop={!prefersReducedMotion}
          />
        </div>
        <div className="layout-container">
          <div className="contact-info">
            <div className="contact-details">
              <div className="contact-email">iskra@highlight-singing.com</div>
              <div className="contact-location">{t("contact.location")}</div>
              <div className="contact-icons">
                <MediaIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="layout-container">
        <p className="author-message">
          {t("contact.authorMessage")}
          <Image className="author-mic" src={contactMic} alt="" />
          <span className="author">{t("contact.authorName")}</span>
        </p>
      </div>
      <ScrollToTopBtn />
    </div>
  );
};

export default Contact;
