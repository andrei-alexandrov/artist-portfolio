"use client";

import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import backToTop1 from "../../assets/lottie-animations/backToTop1.json";
import "./ScrollToTopBtn.scss";

const ScrollToTopBtn = () => {
  const [backToTop, setBackToTop] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Ensure this code runs only on the client side
  useEffect(() => {
    setIsClient(true); // Set the state to true once on the client side
  }, []);

  useEffect(() => {
    if (!isClient) return; // Avoid accessing window if not on client side

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isClient]); // Re-run the effect when isClient becomes true

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
      {isClient && backToTop && (
        <div onClick={goUp}>
          <Lottie
            className="scroll-to-top-btn"
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
