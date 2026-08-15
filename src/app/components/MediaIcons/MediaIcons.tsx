import React from "react";
import Image from "next/image";
import { SOCIAL_URLS } from "../../socialLinks";

import linkedInIcon from "../../assets/icons/linkedIn-round.png";
import instagramIcon from "../../assets/icons/insta-round.png";
import facebookIcon from "../../assets/icons/facebook-round.png";
import musicTalentsIcon from "../../assets/icons/music-talents.png";
import highlightLogo from "../../assets/icons/highlight-logo-round.png";
import spotifyLogo from "../../assets/icons/spotify.png";

import "./MediaIcons.scss";

const MediaIcons = () => {
  return (
    <div className="media-icons-container">
      <div className="media-icons-first-row">
        <a
          href={SOCIAL_URLS.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <div className="media-icons-wrapper">
            <Image
              src={linkedInIcon}
              alt="LinkedIn"
              fill
              sizes="(max-width: 768px) 24px, (max-width: 1200px) 30px, 40px"
            />
          </div>
        </a>
        <a
          href={SOCIAL_URLS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <div className="media-icons-wrapper">
            <Image
              src={instagramIcon}
              alt="Instagram"
              fill
              sizes="(max-width: 768px) 24px, (max-width: 1200px) 30px, 40px"
            />
          </div>
        </a>
        <a
          href={SOCIAL_URLS.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <div className="media-icons-wrapper">
            <Image
              src={facebookIcon}
              alt="Facebook"
              fill
              sizes="(max-width: 768px) 24px, (max-width: 1200px) 30px, 40px"
            />
          </div>
        </a>

        <a
          href={SOCIAL_URLS.spotify}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Spotify"
        >
          <div className="media-icons-wrapper">
            <Image
              className="spotify-logo"
              src={spotifyLogo}
              alt="Spotify"
              height={44}
              width={44}
              sizes="(max-width: 768px) 24px, (max-width: 1200px) 30px, 40px"
            />
          </div>
        </a>

        <a
          href={SOCIAL_URLS.highlightAcademy}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="HighLight Singing Academy"
        >
          <div className="media-icons-wrapper">
            <Image
              className="highlight-logo"
              src={highlightLogo}
              alt="HighLight Singing Academy"
              sizes="(max-width: 768px) 24px, (max-width: 1200px) 30px, 40px"
              height={53}
              width={53}
            />
          </div>
        </a>
        <a
          href={SOCIAL_URLS.musicTalents}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Musical Talents of Bulgaria"
        >
          <div className="media-icons-wrapper">
            <Image
              className="music-talents-logo"
              src={musicTalentsIcon}
              alt="Musical Talents of Bulgaria"
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
