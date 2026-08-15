"use client";

import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import backToTop1 from "../../assets/lottie-animations/backToTop1.json";
import "./ScrollToTopBtn.scss";

const ScrollToTopBtn = () => {
  const [backToTop, setBackToTop] = useState(false);

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
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={goUp}
      className={`scroll-to-top-btn ${backToTop ? "visible" : ""}`}
      aria-label="Back to top"
      tabIndex={backToTop ? 0 : -1}
    >
      <Lottie className="scrollToTop-icon" animationData={backToTop1} />
    </button>
  );
};

export default ScrollToTopBtn;
