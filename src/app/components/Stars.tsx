"use client";
import { useRef, useEffect } from "react";
import "./Stars.scss";
import gsap from "gsap";

export default function StarGrid() {
  const container = useRef(null);

  useEffect(() => {
    const grid = [14, 30] as const;

    gsap.set(".star-grid-item", {
      opacity: 0,
      transformOrigin: "center",
      color: "#fff",
    });
    gsap.set(container.current, { opacity: 1 });

    const tl = gsap.timeline();

    // Entrance animation
    tl.to(".star-grid-item", {
      keyframes: [
        {
          opacity: 0,
          duration: 0,
        },
        {
          opacity: 0.4,
          rotate: "+=180",
          color: "#ffd057",
          scale: 3,
          duration: 0.6,
          stagger: {
            amount: 2,
            grid: grid,
            from: "center",
          },
        },
        {
          opacity: 0.2,
          rotate: "+=180",
          color: "#fff",
          scale: 0,
          delay: -2,
          duration: 0.6,
          stagger: {
            amount: 3,
            grid: grid,
            from: "center",
          },
        },
      ],
    });

    // Loop animation
    tl.to(".star-grid-item", {
      delay: 4,
      repeat: -1,
      repeatDelay: 6,
      keyframes: [
        {
          opacity: 0.4,
          rotate: "+=180",
          color: "#ffd057",
          scale: 3,
          duration: 0.6,
          stagger: {
            amount: 2,
            grid: grid,
            from: "center",
          },
        },
        {
          opacity: 0.2,
          rotate: "+=180",
          color: "#fff",
          scale: 0,
          delay: -2,
          duration: 0.6,
          stagger: {
            amount: 3,
            grid: grid,
            from: "center",
          },
        },
      ],
    });
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 935 360"
      className="absolute -top-14 -z-10"
      id="star-grid"
      ref={container}
      opacity={0}
      style={{
        maskImage: "linear-gradient(black, transparent)",
      }}
    >
      <g className="star-grid-group">
        {[...Array(14)].map((_, i) => {
          return [...Array(30)].map((_, j) => {
            return (
              <path
                key={i + j}
                fill="currentColor"
                opacity=".2"
                className="star-grid-item"
                d={`M${j * 32},${
                  i * 32 + 10
                }a0.14,0.14,0,0,1,0.26,0l0.14,0.36a2.132,2.132,0,0,0,1.27,1.27l0.37,0.14a0.14,0.14,0,0,1,0,0.26l-0.37,0.14a2.132,2.132,0,0,0,-1.27,1.27l-0.14,0.37a0.14,0.14,0,0,1,-0.26,0l-0.14,-0.37a2.132,2.132,0,0,0,-1.27,-1.27l-0.36,-0.14a0.14,0.14,0,0,1,0,-0.26l0.37,-0.14a2.132,2.132,0,0,0,1.26,-1.27l0.14,-0.36z`}
              />
            );
          });
        })}
      </g>
    </svg>
  );
}
