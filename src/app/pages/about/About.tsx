"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.scss";

// gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const clientsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = clientsRef.current;
    if (!element) return;

    gsap.fromTo(
      element.querySelectorAll(".animate-from-left, .animate-from-right"),
      {
        opacity: 0,
        x: (i, target) => {
          return (target as HTMLElement).classList.contains("animate-from-left") ? -100 : 100;
        },
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div id="about" className="about-container">
      <h1 className="portfolio-header">About me</h1>
      <div className="about-description">
        Some info about you as a short tale... then we can add the following:
        <br />
        <br />
        <p>
          Founder of Highlight Singing Academy <br />
          Founder of Music Talents <br />
          Creative director of NEXT ARTIST singing competition <br />
          Вокален педагог в X-factor сезони ... <br />
          Certified vocal coach in IVA-USA <br />
          Вокален педагог за българската делегация на конкурса Европвизия 2017
          г.
        </p>
  
        <p style={{ color: "#cca752" }}>
          Among her clients:
        </p>
        <p className="clients" ref={clientsRef}>
          <span className="animate-from-left">Mihaela Fileva - pop star</span>

          <span className="animate-from-right">
            Dara Yotova - pop/hip-hop star
          </span>

          <span className="animate-from-left">
            Jaklin Tarakchi - the winner of The Voice of Bulgaria 2022
          </span>

          <span className="animate-from-right">
            Kristian Kostov - second place at Eurovision 2017
          </span>

          <span className="animate-from-left">
            Pollya Ivanova - finalist at Bulgaria's Got Talent
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
