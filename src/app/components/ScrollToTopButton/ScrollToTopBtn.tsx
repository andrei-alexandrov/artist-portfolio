// import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import backToTop1 from "../../assets/lottie-animations/backToTop1.json"

import "./ScrollToTopBtn.scss";

const ScrollToTopBtn = () => {
    // const [backToTop, setBackToTop] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 3000 && window.scrollY < 3530) {
    //             setBackToTop(true);
    //         } else {
    //             setBackToTop(false);
    //         }
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    const goUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div>
            <Lottie
                className="scroll-to-top-btn"
                role="img"
                aria-label="backToTop Icon"
                animationData={backToTop1}
                onClick={goUp}>
            </Lottie>
        </div>
    );
}

export default ScrollToTopBtn;
