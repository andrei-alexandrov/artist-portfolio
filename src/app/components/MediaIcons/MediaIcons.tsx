import React from "react";
import Image from "next/image";

import "./MediaIcons.scss";

import linkedInIcon from "../../assets/icons/linkedIn-round.png";
import instagramIcon from "../../assets/icons/insta-round.png";
import facebookIcon from "../../assets/icons/facebook-round.png";
import musicTalentsIcon from "../../assets/icons/music-talents.png";
import highlightLogo from "../../assets/icons/highlight-logo-round.png";

// import highlightLogoBlack from "../../assets/icons/highlight-logo-dark.png";
// import highlightLogoWhite from "../../assets/icons/highlight-logo-light.png";

type MediaProps = {
  isBlackBackground?: boolean;
};

const MediaIcons = ({ isBlackBackground }: MediaProps) => {
  return (
    <div className="media-icons-container">
      <div className="media-icons-first-row">
        <a
          href="https://www.linkedin.com/in/iskra-milkova-228991ab/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="media-icons-wrapper">
            <Image
              src={linkedInIcon}
              alt="linkedIn-logo"
              fill
              sizes="(max-width: 768px) 24px, (max-width: 1200px) 30px, 40px"
            />
          </div>
        </a>
        <a
          href="https://www.instagram.com/iskra_milkova_vocal_coach/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="media-icons-wrapper">
            <Image
              src={instagramIcon}
              alt="instagram-logo"
              fill
              sizes="(max-width: 768px) 24px, (max-width: 1200px) 30px, 40px"
            />
          </div>
        </a>
        <a
          href="https://www.facebook.com/iskra.milkova1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="media-icons-wrapper">
            <Image
              src={facebookIcon}
              alt="facebook-logo"
              fill
              sizes="(max-width: 768px) 24px, (max-width: 1200px) 30px, 40px"
            />
          </div>
        </a>

        <a
          href="https://www.facebook.com/iskra.milkova1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="media-icons-wrapper">
            <Image
              className="highlight-logo"
              src={highlightLogo}
              alt="highlight-logo"
              sizes="(max-width: 768px) 24px, (max-width: 1200px) 30px, 40px"
              height={53.4}
              width={53.4}
            />
          </div>
        </a>
        <a
          href="https://muzikalnite-talanti.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="media-icons-wrapper">
            <Image
              className="music-talents-logo"
              src={musicTalentsIcon}
              alt="music-talents-logo"
              fill
              sizes="(max-width: 768px) 24px, (max-width: 1200px) 30px, 40px"
            />
          </div>
        </a>
      </div>

      {/* <div className="highlight-icon-wrapper">
        <a
          href="https://highlight-singing.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="highlight-icon"
            src={isBlackBackground ? highlightLogoWhite : highlightLogoBlack}
            alt="highlight-academy-icon"
            fill
            sizes="(max-width: 768px) 150px, (max-width: 1200px) 200px, 300px"
          />
        </a>
      </div> */}
    </div>
  );
};

export default MediaIcons;
