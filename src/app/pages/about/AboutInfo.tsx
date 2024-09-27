import { StaticImageData } from "next/image";
import Image from "next/image";

import "./AboutInfo.scss";

type AboutInfoProps = {
  info: string;
  image: StaticImageData;
};

const AboutInfo = ({ info, image }: AboutInfoProps) => {
  return (
    <div className="about-info-container">
      <p>{info}</p>
      <div className="about-info-image-wrapper">
        <Image
          src={image}
          alt="Highlight Logo"
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 150px, (max-width: 1200px) 200px, 300px"
        />
      </div>
    </div>
  );
};

export default AboutInfo;
