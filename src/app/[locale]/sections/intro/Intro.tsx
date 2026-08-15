"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { scroller } from "react-scroll";
import { useTranslations } from "next-intl";
import Image from "next/image";
import MediaIcons from "@/app/components/MediaIcons/MediaIcons";
import Button from "@/app/components/Button/Button";

import highlightLogoWhite from "../../../assets/icons/highlight-logo-light.png";
import artistPhoto from "../../../assets/intro/iskra-photo.jpg";

import "./Intro.scss";

const Intro = () => {
  const t = useTranslations();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      // The name's resting position is y: -55%, so the reduced-motion path
      // must still place it there — just without the animation.
      if (prefersReducedMotion) {
        gsap.set(".artist-name", { opacity: 1, y: "-55%" });
        return;
      }

      gsap.fromTo(
        ".artist-name",
        { opacity: 0, y: "-300%" },
        { opacity: 1, y: "-55%", duration: 1.6 }
      );
    });

    return () => ctx.revert();
  }, []);

  const scrollToContact = () =>
    scroller.scrollTo("contact", { smooth: true, duration: 50, offset: -70 });

  return (
    <section id="intro">
      <div className="background-image"></div>
      <div className="intro-content-wrapper">
        <div className="starting-content">
          <br />
          <h1 className="artist-name">{t("intro.artistName")}</h1>
          <p className="artist-slogan">&quot;{t("intro.artistSlogan")}&quot;</p>
          <p className="artist-header">{t("intro.artistShortInfo")}</p>
          <div className="artist-info">
            <div>{t("intro.artistInfoOne")}</div>
            <div>{t("intro.artistInfoTwo")}</div>
            <div>{t("intro.artistInfoThree")}</div>
            <div>{t("intro.artistInfoFour")}</div>
            <div>{t("intro.artistInfoFive")}</div>
            <div>{t("intro.artistInfoSix")}</div>
          </div>
          <MediaIcons />
          <Button onClick={scrollToContact}>{t("intro.introButtonText")}</Button>
        </div>

        <div className="artist-photo-wrapper">
          <Image
            className="artist-image"
            src={artistPhoto}
            alt={t("intro.artistName")}
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
            alt="HighLight Singing Academy"
            fill
            sizes="(max-width: 768px) 150px, (max-width: 1200px) 200px, 300px"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
