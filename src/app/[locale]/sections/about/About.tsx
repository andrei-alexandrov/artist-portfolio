"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { getClientsData } from "@/app/components/ClientCard/carouselData";
import ClientCardCarousel from "@/app/components/ClientCard/Carousel";

import "./About.scss";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const t = useTranslations();
  const aboutMeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = aboutMeRef.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
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
          },
        }
      );
    }, element);

    return () => ctx.revert();
  }, []);

  const clientsData = getClientsData(t);
  const descriptionText = t("about.description");

  return (
    <div id="about" className="about-container" ref={aboutMeRef}>
      <h2 className="portfolio-section-title">{t("about.title")}</h2>
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
