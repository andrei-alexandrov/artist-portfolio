"use client";

import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import backToTop1 from "../../assets/lottie-animations/backToTop1.json";
import "./ScrollToTopBtn.scss";

const ScrollToTopBtn = () => {
  const [backToTop, setBackToTop] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      if (window.scrollY > 1001) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isClient]);

  const goUp = () => {
    if (isClient) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {isClient && (
        <div
          onClick={goUp}
          className={`scroll-to-top-btn ${backToTop ? "visible" : ""}`}
        >
          <Lottie
            role="img"
            aria-label="backToTop Icon"
            animationData={backToTop1}
          />
        </div>
      )}
    </>
  );
};

export default ScrollToTopBtn;
