"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Lottie from "lottie-react";
import backToTop1 from "../../assets/lottie-animations/backToTop1.json";
import "./ScrollToTopBtn.scss";

const ScrollToTopBtn = () => {
  const t = useTranslations();
  const [backToTop, setBackToTop] = useState(false);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const handleScroll = () => {
      setBackToTop(window.scrollY > 901);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goUp = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={goUp}
      className={`scroll-to-top-btn ${backToTop ? "visible" : ""}`}
      aria-label={t("common.backToTop")}
      tabIndex={backToTop ? 0 : -1}
    >
      {/* Mount the animation only while the button is visible, and fall back
          to a static glyph when the user prefers reduced motion. */}
      {backToTop &&
        (prefersReducedMotion ? (
          <span className="scrollToTop-static" aria-hidden="true">↑</span>
        ) : (
          <Lottie className="scrollToTop-icon" animationData={backToTop1} />
        ))}
    </button>
  );
};

export default ScrollToTopBtn;
