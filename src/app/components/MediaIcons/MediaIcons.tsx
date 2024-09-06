import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./MediaIcons.scss";

import linkedInIcon from "../../assets/icons/linkedin-icon.png";
import instagramIcon from "../../assets/icons/instagram-icon.png";
import facebookIcon from "../../assets/icons/facebook-icon.png";
import musicTalentsIcon from "../../assets/icons/music-talents.png";
import highlightLogo from "../../assets/icons/highlight-logo-dark.png";

const MediaIcons = () => {
  return (
    <>
      <div className="socials-container">
        <Link
          href="https://www.linkedin.com/in/iskra-milkova-228991ab/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="social-icon-wrapper">
            <Image
              className="social-icon"
              src={linkedInIcon}
              alt="LinkedIn icon"
              fill
              sizes="(max-width: 768px) 24px, (max-width: 1200px) 30px, 40px"
            />
          </div>
        </Link>
        <Link
          href="https://www.instagram.com/iskra_milkova_vocal_coach/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="social-icon-wrapper">
            <Image
              className="social-icon"
              src={instagramIcon}
              alt="Instagram icon"
              fill
              sizes="(max-width: 768px) 24px, (max-width: 1200px) 30px, 40px"
            />
          </div>
        </Link>
        <Link
          href="https://www.facebook.com/iskra.milkova1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="social-icon-wrapper">
            <Image
              className="social-icon"
              src={facebookIcon}
              alt="Facebook icon"
              fill
              sizes="(max-width: 768px) 24px, (max-width: 1200px) 30px, 40px"
            />
          </div>
        </Link>
        <Link
          href="https://muzikalnite-talanti.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="social-icon-wrapper">
            <Image
              className="social-icon-special"
              src={musicTalentsIcon}
              alt="Music talents icon"
              fill
              sizes="(max-width: 768px) 24px, (max-width: 1200px) 30px, 40px"
            />
          </div>
        </Link>
      </div>
      <div>
        <Link
          href="https://highlight-singing.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="highlight-icon-wrapper">
            <Image
              className="highlight-icon"
              src={highlightLogo}
              alt="Highlight Academy icon"
              fill
              sizes="(max-width: 768px) 150px, (max-width: 1200px) 200px, 300px"
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default MediaIcons;
