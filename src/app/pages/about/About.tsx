"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { clientImages } from "../../components/ClientCard/clientsData";
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
      <h1 className="portfolio-section-title">About me</h1>
      <div className="about-description">
        Iskra Milkova has been immersed in the world of music since early
        childhood. Graduating Art high school with a concentration in piano, she
        soon discovered that her true passion lay within the power of the human
        voice, with its unique ability to move people&apos;s hearts. This passion led
        her to the National Academy of Music “Pancho Vladigerov”, where she
        earned her master&apos;s degree in pop and jazz singing. Driven by her desire
        to grow and explore modern teaching methods, she pursued further
        education at the Institute for Vocal Advancement (IVA) in the USA and
        Modern Vocal Training (MVT) in Spain, where she deeply immersed herself
        in the Speech Level Singing (SLS) teaching method. Inspired by newfound
        knowledge and vocal approaches, Iskra established HighLight Singing
        Academy. Today, the academy is home to a team of 20 exceptional teachers
        who cultivate and share their passion for voice, singing, and teaching.
        In 2014, Iskra was invited to become a vocal coach of the popular TV
        SHOW &quot;X Factor of Bulgaria&quot;. Here, she collaborated with some of the
        country's finest producers and artists over four exciting seasons. This
        experience not only expanded her professional network but also sharpened
        her vision of the qualities singers must develop to thrive in the
        competitive music industry. In parallel to her role as a vocal
        pedagogue, Iskra continues to feed her soul as an active performer with
        various bands and engages in diverse musical projects. One of
        Iskra&apos;s most recent success story as a vocal coach is: her student
        Jaklin Tarakchi, won The Voice of Bulgaria 2022. Her rich experience as
        both a teacher and a performer allows her to infuse her instruction with
        practical insights and real-world expertise.
        <br />
        <br />
        <div className="about-info" ref={aboutMeRef}>
          <div>Owner of Highlight Singing Academy</div>
          <div>Owner of Association &quot;The Musical Talents of Bulgaria&quot;</div>
          <div>Creative director of NEXT ARTIST singing competition</div>
          <div>Vocal coach at X-factor seasons ... ?</div>
          <div>
            Certified vocal coach in IVA (Institute for Vocal Advancement) - USA
          </div>
          <div>
            Vocal coach for the Bulgarian delegation at the Eurovision Song
            Contest 2017
          </div>
        </div>
        <div className="carousel-container">
          <ClientCardCarousel people={clientImages} title="Clients" />
          <ClientCardCarousel people={inspirationPeople} title="Inspirations" />
        </div>
      </div>
    </div>
  );
};

export default About;
