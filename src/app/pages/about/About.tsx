"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { clientsData } from "../../components/ClientCard/clientsData";
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
        Искра Милкова е потопена в света на музиката от ранно детство. Завършва художествена гимназия със специалност пиано, но скоро открива, че истинската ѝ страст е
        силата на човешкия глас и неговата уникална способност да докосва сърцата на хората.<br /><br />
        Тази страст я отвежда до Националната музикална академия „Панчо Владигеров“, където придобива магистърска степен по поп и джаз пеене.
        Водена от желанието си за развитие и изучаване на съвременни методи на преподаване, Искра продължава своето образование в Institute for Vocal Advancement (IVA) в САЩ
        и Modern Vocal Training (MVT) в Испания, където се задълбочава в метода Speech Level Singing (SLS).<br /><br />
        Вдъхновена от новопридобитите знания и вокални подходи, Искра основава Вокална академия HighLight. Днес академията разполага с екип от 20 изключителни
        преподаватели, които споделят страстта си към гласа, пеенето и преподаването.
        През 2014 г. Искра е поканена да стане вокален педагог в популярното телевизионно шоу &quot;X Factor България&quot;, където работи с някои от най-добрите продуценти
        и изпълнители в страната в продължение на четири вълнуващи сезона. Този опит не само разширява професионалната ѝ мрежа, но и изостря визията ѝ за качествата, които певците трябва да развият, за да успеят в конкурентната музикална индустрия.<br /><br />
        Паралелно с ролята си на вокален педагог, Искра продължава да се изявява като активен изпълнител в различни групи и музикални проекти.
        Един от най-новите ѝ успехи като вокален треньор е победата на нейната ученичка Жаклин Таракчи в &quot;Гласът на България&quot; през 2022 г.<br />
        <br />Богатият ѝ опит като преподавател и изпълнител ѝ позволява да внесе в преподаването си практически прозрения и експертен опит от реалния свят.<br />
      </div>
        <div className="carousel-container">
          <ClientCardCarousel data={clientsData} title="Заглавие? :)" />
        </div>
    </div>
  );
};

export default About;

// "use client";
// import React, { useLayoutEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { clientsData } from "../../components/ClientCard/clientsData";
// import ClientCardCarousel from "@/app/components/ClientCard/ClientCardCarousel";

// import "./About.scss";

// const About = () => {
//   const aboutMeRef = useRef<HTMLDivElement>(null);
//   const [isClient, setIsClient] = useState(false);

//   useLayoutEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);
//     setIsClient(true);
//   }, []);

//   useLayoutEffect(() => {
//     if (!isClient) return;

//     const element = aboutMeRef.current;
//     if (!element) return;

//     gsap.fromTo(
//       element.children,
//       {
//         opacity: 0,
//         x: (index) => (index % 2 === 0 ? -100 : 100),
//       },
//       {
//         opacity: 1,
//         x: 0,
//         duration: 1,
//         ease: "power2.out",
//         stagger: 0.3,
//         scrollTrigger: {
//           trigger: element,
//           start: "top 80%",
//           end: "bottom 60%",
//           toggleActions: "play none none reverse",
//           markers: false,
//         },
//       }
//     );
//   }, [isClient]);

//   return (
//     <div id="about" className="about-container">
//       <h1 className="portfolio-section-title">За мен</h1>
//       <div className="about-description">
//         Iskra Milkova has been immersed in the world of music since early
//         childhood. Graduating Art high school with a concentration in piano, she
//         soon discovered that her true passion lay within the power of the human
//         voice, with its unique ability to move people&apos;s hearts.<br /><br />This passion led
//         her to the National Academy of Music “Pancho Vladigerov”, where she
//         earned her master&apos;s degree in pop and jazz singing. Driven by her desire
//         to grow and explore modern teaching methods, she pursued further
//         education at the Institute for Vocal Advancement (IVA) in the USA and
//         Modern Vocal Training (MVT) in Spain, where she deeply immersed herself
//         in the Speech Level Singing (SLS) teaching method.<br /><br />Inspired by newfound
//         knowledge and vocal approaches, Iskra established HighLight Singing
//         Academy. Today, the academy is home to a team of 20 exceptional teachers
//         who cultivate and share their passion for voice, singing, and teaching.
//         In 2014, Iskra was invited to become a vocal coach of the popular TV
//         SHOW &quot;X Factor of Bulgaria&quot;. Here, she collaborated with some of the
//         country&apos;s finest producers and artists over four exciting seasons. This
//         experience not only expanded her professional network but also sharpened
//         her vision of the qualities singers must develop to thrive in the
//         competitive music industry.<br /><br />In parallel to her role as a vocal
//         pedagogue, Iskra continues to feed her soul as an active performer with
//         various bands and engages in diverse musical projects. One of
//         Iskra&apos;s most recent success story as a vocal coach is: her student
//         Jaklin Tarakchi, won The Voice of Bulgaria 2022.<br /><br />Her rich experience as
//         both a teacher and a performer allows her to infuse her instruction with
//         practical insights and real-world expertise.
//         <br />
//         <div className="carousel-container">
//           <ClientCardCarousel data={clientsData} title="Кое е вълшебното заглавие?" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

