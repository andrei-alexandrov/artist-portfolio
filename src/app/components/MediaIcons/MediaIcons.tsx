import React from "react";
import Image from "next/image";

import linkedInIcon from "../../assets/icons/linkedIn-round.png";
import instagramIcon from "../../assets/icons/insta-round.png";
import facebookIcon from "../../assets/icons/facebook-round.png";
import musicTalentsIcon from "../../assets/icons/music-talents.png";
import highlightLogo from "../../assets/icons/highlight-logo-round.png";
import spotifyLogo from "../../assets/icons/spotify.png";
// import highlightLogoBlack from "../../assets/icons/highlight-logo-dark.png";
// import highlightLogoWhite from "../../assets/icons/highlight-logo-light.png";

import "./MediaIcons.scss";

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
              alt="linkedIn"
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
              alt="instagram"
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
              alt="facebook"
              fill
              sizes="(max-width: 768px) 24px, (max-width: 1200px) 30px, 40px"
            />
          </div>
        </a>

        <a
          href="https://open.spotify.com/artist/4Nk118aY40N9GnA24giQkU?si=yR5pAzumQYKjQUkRTMuSlQ&nd=1&dlsi=1c2836ca234a4902"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="media-icons-wrapper">
            <Image
              className="spotify-logo"
              src={spotifyLogo}
              alt="spotify"
              height={44.2}
              width={44.2}
              sizes="(max-width: 768px) 24px, (max-width: 1200px) 30px, 40px"
            />
          </div>
        </a>

        <a
          href="https://highlight-singing.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="media-icons-wrapper">
            <Image
              className="highlight-logo"
              src={highlightLogo}
              alt="highlight"
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
              alt="music-talents"
              fill
              sizes="(max-width: 768px) 24px, (max-width: 1200px) 30px, 40px"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default MediaIcons;
