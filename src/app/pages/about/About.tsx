"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { images } from "../../components/ClientCard/clientsData";
import { inspirationPeople } from "../../components/ClientCard/inspirationsData";
import ClientCardCarousel from "@/app/components/ClientCard/ClientCardCarousel";
import AboutInfo from "./AboutInfo";

import highLightLogoLight from "../../assets/icons/highlight-logo-light.png";
import musicTalentsLogoLight from "../../assets/icons/music-talents.png"
import xFactorLogoLight from "../../assets/icons/x-factor-logo-light.png"
import ivaUsa from "../../assets/icons/iva.png"
import ivaUsaTwo from "../../assets/icons/iva-2.png"
import "./About.scss";

const About = () => {
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

  return (
    <div id="about" className="about-container">
      <h1 className="portfolio-section-title">За мен</h1>
      <div className="about-description">
        Информация за теб като житейски път +
        <br />
        <br />
        <div className="about-info" ref={aboutMeRef}>
          <AboutInfo
            info="Основател на Вокална Академия Highlight"
            image={highLightLogoLight}
          />
          <AboutInfo
            info='Основател на Сдружение "Музикалните таланти на България"'
            image={musicTalentsLogoLight}
          />
          <AboutInfo
            info="Креативен директор на певчески конкурс NEXT ARTIST"
            image={musicTalentsLogoLight}
          />

          <AboutInfo
            info="Вокален педагог в X-factor сезони ..."
            image={xFactorLogoLight}
          />

          <AboutInfo
            info="Сертифициран вокален педагог за IVA-USA"
            image={ivaUsa}
          />
          <AboutInfo
            info=" Вокален педагог за българската делегация на конкурса Евровизия
              2017 г."
            image={ivaUsaTwo}
          />
        </div>
        <div className="carousel-container">
          <ClientCardCarousel people={images} title="Клиенти" />
          <ClientCardCarousel people={inspirationPeople} title="Вдъхновения" />
        </div>
      </div>
    </div>
  );
};

export default About;
