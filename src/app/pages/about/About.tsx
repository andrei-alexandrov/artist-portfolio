"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { images } from "../../components/ClientCard/clientsData";
import { inspirationPeople } from "../../components/ClientCard/inspirationsData";
import ClientCardCarousel from "@/app/components/ClientCard/ClientCardCarousel";

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
        Малко информация за теб като история + съдържанието долу
        <br />
        <br />
        <div className="about-info" ref={aboutMeRef}>
          <div>Основател на &quot;Вокална Академия Хайлайт&quot;</div>
          <div>
            Основател на &quot;Сдружение Музикалните Таланти на България&quot;
          </div>
          <div>Творчески директор на певчески конкурс NEXT ARTIST</div>
          <div>Вокален педагог в X-factor сезони ... кои?</div>
          <div>Сертифициран вокален педагог за IVA-USA</div>
          <div>
            Вокален педагог за българската делегация на конкурса Европвизия 2017
            г.
          </div>
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
