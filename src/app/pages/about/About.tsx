"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.scss";
import ClientCard from "@/app/components/ClientCard/ClientCard";

// gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutMeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = aboutMeRef.current;
    if (!element) return;

    gsap.fromTo(
      element.querySelectorAll(".animate-from-left, .animate-from-right"),
      {
        opacity: 0,
        x: (i, target) => {
          return (target as HTMLElement).classList.contains("animate-from-left")
            ? -100
            : 100;
        },
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
      
      }
    );
  }, []);

  return (
    <div id="about" className="about-container">
      <h1 className="portfolio-section-title">About me</h1>
      <div className="about-description">
        Some info about you as a short tale... then we can add the following:
        <br />
        <br />
        <p className="" ref={aboutMeRef}>
          <span className="animate-from-left">
            Founder of Highlight Singing Academy
          </span>

          <span className="animate-from-right">Founder of Music Talents</span>

          <span className="animate-from-left">
            Creative director of NEXT ARTIST singing competition
          </span>

          <span className="animate-from-right">
            Вокален педагог в X-factor сезони ...
          </span>

          <span className="animate-from-left">
            Certified vocal coach in IVA-USA
          </span>

          <span className="animate-from-right">
            Вокален педагог за българската делегация на конкурса Европвизия 2017
            г.
          </span>
        </p>
        <p style={{ marginTop: "6rem" }} className="portfolio-section-title">
          
        </p>
        <ClientCard />
      </div>
    </div>
  );
};

export default About;
