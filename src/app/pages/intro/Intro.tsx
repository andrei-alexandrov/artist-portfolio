"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-scroll";
import Stars from "../../components/Stars/Stars";
import Image from "next/image";

import artistPhoto from "../../assets/photos/iskra-photo.jpg";
import musicDivider from "../../assets/icons/music-divider-2.png";
import MediaIcons from "@/app/components/MediaIcons/MediaIcons";
import Button from "@/app/components/Button/Button";
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
      <div className="stars-container">
        {/* <Stars /> */}
        {/* <video
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100vh",
            top: 0,
            left: 0,
          }}
          src="/public-assets/next-video-1.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video> */}
      </div>
      <div className="intro-content-wrapper">
        <div className="starting-content">
          <br />
          <p className="artist-name">Iskra Milkova Angelova</p>
          <p className="artist-slogan">&quot;Highlight the way!&quot;</p>
          <p className="artist-short-info">
            Vocal and artist coach <br />
            Founder of &quot;Highlight Singing Academy&quot;
          </p>
          <MediaIcons isBlackBackground={false} />
          <div className="contact-button-wrapper">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={50}
              offset={-70}
            >
              <Button>Contact</Button>
            </Link>
          </div>
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
      <div className="music-divider-container">
        <Image
          className="music-divider"
          src={musicDivider}
          alt="piano-note"
          fill
          sizes="(max-width: 768px) 150px, (max-width: 1200px) 200px, (min-width: 1400px) 400px, 300px"
        />
      </div>
    </section>
  );
};

export default Intro;
