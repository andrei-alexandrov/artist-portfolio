"use client";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-scroll";
import Stars from "../../components/Stars/Stars"; //Temporary disabled
import Image from "next/image";
import MediaIcons from "@/app/components/MediaIcons/MediaIcons";
import Button from "@/app/components/Button/Button";

import highlightLogoWhite from "../../assets/icons/highlight-logo-light.png";
import artistPhoto from "../../assets/photos/iskra-photo.jpg";
import "./Intro.scss";

const Intro = () => {
  useEffect(() => {
    const timelineTwo = gsap.timeline({ defaults: { duration: 1.7 } });
    timelineTwo.fromTo(
      ".artist-name",
      {
        opacity: 0,
        y: "-300%",
        duration: 1.6,
      },
      {
        opacity: 1,
        y: "-55%",
        duration: 1.6,
      }
    );
  }, []);

  return (
    <section id="intro">
      <div className="background-image"></div>
      <div className="intro-content-wrapper">
        <div className="starting-content">
          <br />
          <p className="artist-name">Искра Милкова Ангелова</p>
          <p className="artist-slogan">&quot;Озаряваме пътя!&quot;</p>
          <p className="artist-short-info">
            Вокален педагог<br />
          </p>
          <div className="artist-info">
            <div>Основател на &quot;Highlight Singing Academy&quot;</div>
            <div>Председател на Сдружение &quot;Музикалните Таланти на България&quot;</div>
            <div>Творчески директор на певчески конкурс &quot;NEXT ARTIST&quot;</div>
            {/* <div>Вокален педагог в X-Фактор България</div> */}
            <div>
              Сертифициран вокален педагог от IVA (Институт за вокално развитие) - САЩ
            </div>
          </div>
          <MediaIcons isBlackBackground={true} />
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={50}
            offset={-70}
          >
            <Button>Контакт</Button>
          </Link>
        </div>

        <div className="artist-photo-wrapper">
          <Image
            className="artist-image"
            src={artistPhoto}
            alt="artist photo"
            fill
            sizes="(max-width: 768px) 150px, (max-width: 1200px) 200px, 300px"
            priority={true}
          />
        </div>
      </div>
      <div className="divider-container">
        <div className="highlight-icon-wrapper">
          <Image
            className="highlight-icon"
            src={highlightLogoWhite}
            alt="highlight-academy-icon"
            fill
            sizes="(max-width: 768px) 150px, (max-width: 1200px) 200px, 300px"
          />
        </div>
      </div>
      <div className="blur-container">
        {/* <div className="blur"></div> */}
      </div>
      {/* <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div> */}
    </section>
  );
};

export default Intro;

// "use client";

// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { Link } from "react-scroll";
// import Stars from "../../components/Stars/Stars"; //Temporary disabled
// import Image from "next/image";
// import MediaIcons from "@/app/components/MediaIcons/MediaIcons";
// import Button from "@/app/components/Button/Button";

// import highlightLogoWhite from "../../assets/icons/highlight-logo-light.png";
// import artistPhoto from "../../assets/photos/iskra-photo.jpg";
// import "./Intro.scss";

// const Intro = () => {
//   useEffect(() => {
//     const timelineTwo = gsap.timeline({ defaults: { duration: 1.7 } });
//     timelineTwo.fromTo(
//       ".artist-name",
//       {
//         opacity: 0,
//         y: "-300%",
//         duration: 1.6,
//       },
//       {
//         opacity: 1,
//         y: "-55%",
//         duration: 1.6,
//       }
//     );
//   }, []);

//   return (
//     <section id="intro">
//       <div className="background-image"></div>
//       <div className="intro-content-wrapper">
//         <div className="starting-content">
//           <br />
//           <p className="artist-name">Iskra Milkova Angelova</p>
//           <p className="artist-slogan">&quot;Highlight the way!&quot;</p>
//           <p className="artist-short-info">
//             Vocal and artist coach<br />
//           </p>
//           <div className="artist-info">
//             <div>Owner of Highlight Singing Academy</div>
//             <div>Председател of Association &quot;The Musical Talents of Bulgaria&quot;</div>
//             <div>Vocal coach at X Factor Bulgaria</div>
//             <div>Creative director of NEXT ARTIST singing competition</div>
//             <div>
//               Certified vocal coach of IVA (Institute for Vocal Advancement) - USA
//             </div>
//           </div>
//           <MediaIcons isBlackBackground={true} />
//           <Link
//             activeClass="active"
//             to="contact"
//             spy={true}
//             smooth={true}
//             duration={50}
//             offset={-70}
//           >
//             <Button>Contact</Button>
//           </Link>
//         </div>

//         <div className="artist-photo-wrapper">
//           <Image
//             className="artist-image"
//             src={artistPhoto}
//             alt="artist photo"
//             fill
//             sizes="(max-width: 768px) 150px, (max-width: 1200px) 200px, 300px"
//             priority={true}
//           />
//         </div>
//       </div>
//       <div className="divider-container">
//         <div className="highlight-icon-wrapper">
//           <Image
//             className="highlight-icon"
//             src={highlightLogoWhite}
//             alt="highlight-academy-icon"
//             fill
//             sizes="(max-width: 768px) 150px, (max-width: 1200px) 200px, 300px"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Intro;

