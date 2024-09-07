"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import Stars from "../../components/Stars/Stars";
import Image from "next/image";
import Link from "next/link";

import artistPhoto from "../../assets/photos/iskra-photo.jpg";
import musicDivider from "../../assets/icons/music-divider-2.png";

import "./Intro.scss";
import MediaIcons from "@/app/components/MediaIcons/MediaIcons";

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
      <div className="stars-container">
        <Stars />
      </div>
      <div className="starting-content-wrapper">
        <div className="starting-content">
          <p className="artist-name">Iskra Milkova Angelova</p>
          <p className="slogan">&quot;Highlight the way!&quot;</p>
          <p className="artist-short-info">
            Vocal and artist coach, founder of &quot;Highlight Singing
            Academy&quot;
          </p>
          <MediaIcons />
          <div className="contact-button-wrapper">
            <button className="contact-button">Contact</button>
          </div>
        </div>

        <div className="artist-photo-wrapper">
          <div className="artist-image-wrapper">
            <Image
              className="artist-image"
              src={artistPhoto}
              alt="artist photo"
              fill
              sizes="(max-width: 768px) 150px, (max-width: 1200px) 200px, 300px"
            />
          </div>
        </div>
      </div>
      <div className="music-divider-container">
        <Image
          className="music-divider"
          src={musicDivider}
          alt="piano-note"
          fill
          sizes="(max-width: 768px) 150px, (max-width: 1200px) 200px, 300px"
        />
      </div>
    </section>
  );
};

export default Intro;
