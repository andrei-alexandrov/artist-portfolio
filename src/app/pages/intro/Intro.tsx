"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import Stars from "../../components/Stars/Stars";
import Image from "next/image";
import Link from "next/link";

import artistPhoto from "../../assets/photos/iskra-photo.jpg";
import facebookIcon from "../../assets/icons/facebook-icon.png";
import instagramIcon from "../../assets/icons/instagram-icon.png";
import linkedInIcon from "../../assets/icons/linkedin-icon.png";
import musicTalentsIcon from "../../assets/icons/music-talents.png";
import highlightLogo from "../../assets/icons/highlight-logo-dark.png";
import musicDivider from "../../assets/music-divider.png";

import "./Intro.scss";


const Intro = () => {
  useEffect(() => {
    const timelineTwo = gsap.timeline({ defaults: { duration: 1.7 } });
    timelineTwo.fromTo(
      ".artist-name ",
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
    <section>
      <div className="stars-container">
        <Stars />
      </div>
      <div className="starting-content-wrapper">
        <div className="starting-content">
          <p className="artist-name">Iskra Milkova Angelova</p>
          <p className="slogan">"Highligh the way!"</p>
          <p className="artist-short-info">
            Vocal and artist coach, founder of "Highlight Singing Academy"
          </p>

          <div className="socials-container">
            <Link
              href="https://www.linkedin.com/in/iskra-milkova-228991ab/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="social-icon"
                src={linkedInIcon}
                alt="linkedIn icon"
                layout="responsive"
              />
            </Link>
            <Link
              href="https://www.instagram.com/iskra_milkova_vocal_coach/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="social-icon"
                src={instagramIcon}
                alt="instagram icon"
                layout="responsive"
              />
            </Link>
            <Link
              href="https://www.facebook.com/iskra.milkova1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="social-icon"
                src={facebookIcon}
                alt="facebook icon"
                layout="responsive"
              />
            </Link>
            <Link
              href="https://muzikalnite-talanti.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="social-icon-special"
                src={musicTalentsIcon}
                alt="music talents icon"
                layout="responsive"
              />
            </Link>
          </div>

          <div>
            <Link
              href="https://highlight-singing.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="highlight-icon"
                src={highlightLogo}
                alt="highlight academy icon"
                layout="responsive"
              />
            </Link>
          </div>
          <div className="contact-button-wrapper">
            <button className="contact-button">Contact</button>
          </div>
        </div>

        <Image
          className="artist-image"
          src={artistPhoto}
          alt="artist photo"
          layout="responsive"
        />
      </div>

      <Image
        className="musical-divider"
        src={musicDivider}
        alt="piano-note"
        layout="responsive"
      />
    </section>
  );
};

export default Intro;
