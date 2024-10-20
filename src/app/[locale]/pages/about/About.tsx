"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "use-intl";
import ClientCardCarousel from "@/app/components/ClientCard/Carousel";
import { getClientsData } from "@/app/components/ClientCard/carouselData";

import "./About.scss";

const About = () => {
  const t = useTranslations();
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    setIsClient(true);
  }, []);

  useLayoutEffect(() => {
    if (!isClient) return;

    const element = aboutMeRef.current;
    if (!element) return;

    gsap.fromTo(
      element.children,
      {
        opacity: 0,
        x: (index) => (index % 2 === 0 ? -100 : 100),
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      }
    );
  }, [isClient]);

  const clientsData = getClientsData(t);
  const descriptionText = t("about.description");

  return (
    <div id="about" className="about-container" ref={aboutMeRef}>
      <h1 className="portfolio-section-title">{t("about.title")}</h1>
      <div className="about-description">
        {descriptionText.split("\n\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="carousel-container">
        <ClientCardCarousel data={clientsData} title={t("about.galleryTitle")} />
      </div>
    </div>
  );
};

export default About;