"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import Stars from "../Stars";
import Image from "next/image";

import artistPhoto from "../../assets/photos/iskra-photo.jpg";
import facebookIcon from "../../assets/icons/facebook-icon.png";
import instagramIcon from "../../assets/icons/instagram-icon.png";
import linkedInIcon from "../../assets/icons/linkedin-icon.png";
import musicTalentsIcon from "../../assets/icons/music-talents.png";
import highlightLogo from "../../assets/icons/highlight-logo-light.png";
import musicDivider from "../../assets/music-divider.png";

import "./StartingPage.scss";

const About = () => {
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
        <div className="text-content">
          <h1 className="artist-name">Iskra Milkova Angelova</h1>
          <p>"Highligh the way!"</p>
          <p>Vocal and artist coach, founder of "Highlight Singing Academy"</p>

          <div className="socials-container">
            <a
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
            </a>
            <a
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
            </a>
            <a
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
            </a>
            <a
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
            </a>
          </div>

          <div>
            <a
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
            </a>
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
        alt="Искра Милкова Ангелова"
        layout="responsive"
      />
    </section>
  );
};

export default About;
