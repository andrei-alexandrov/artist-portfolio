"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import Stars from "../Stars";
import Image from "next/image";

import iskraPhoto from "../../assets/iskra-photo.jpg";
import facebookIcon from "../../assets/facebook-icon.png";
import instagramIcon from "../../assets/instagram-icon.png";
import linkedInIcon from "../../assets/linkedin-icon.png";
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
          <p>"Highligh the way"</p>
          <p>Vocal and artist coach, founder of "Highlight Singing Academy"</p>
          {/* <div className="socials-container">
            <div className="hexagon-wrapper">
              <div className="hexagon">
                <i className="fab fa-facebook"></i>
              </div>
            </div>
            <div className="hexagon-wrapper">
              <div className="hexagon">
                <i className="fab fa-linkedin"></i>
              </div>
            </div>
            <div className="hexagon-wrapper">
              <div className="hexagon">
                <i className="fab fa-instagram"></i>
              </div>
            </div> */}

          <div className="socials-container">
            <a
              href="https://www.linkedin.com/in/iskra-milkova-228991ab/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="social-icon"
                src={linkedInIcon}
                alt="linkedIn-icon"
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
                alt="facebook-icon"
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
                alt="facebook-icon"
                layout="responsive"
              />
            </a>
          </div>
          {/* </div> */}
        </div>
        <Image
          className="artist-image"
          src={iskraPhoto}
          alt="Искра Милкова Ангелова"
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
