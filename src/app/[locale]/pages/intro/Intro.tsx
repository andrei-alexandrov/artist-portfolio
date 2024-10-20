"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-scroll";
import { useTranslations } from "use-intl";
import Stars from "../../../components/Stars/Stars"; //Temporary disabled
import Image from "next/image";
import MediaIcons from "@/app/components/MediaIcons/MediaIcons";
import Button from "@/app/components/Button/Button";

import highlightLogoWhite from "../../../assets/icons/highlight-logo-light.png";
import artistPhoto from "../../../assets/intro/iskra-photo.jpg";

import "./Intro.scss";

const Intro = () => {
  const t = useTranslations();

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
          <p className="artist-name">{t("intro.artistName")}</p>
          <p className="artist-slogan">&quot;{t("intro.artistSlogan")}&quot;</p>
          <p className="artist-short-info">
            {t("intro.artistShortInfo")}<br />
          </p>
          <div className="artist-info">
            <div>{t("intro.artistInfoOne")}</div>
            <div>{t("intro.artistInfoTwo")}</div>
            <div>{t("intro.artistInfoThree")}</div>
            <div>{t("intro.artistInfoFour")}</div>
            <div>
            {t("intro.artistInfoFive")}
            </div>
            <div>{t("intro.artistInfoSix")}</div>
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
            <Button>{t("intro.introButtonText")}</Button>
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
//             <div>Chairman of Association &quot;The Musical Talents of Bulgaria&quot;</div>
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

