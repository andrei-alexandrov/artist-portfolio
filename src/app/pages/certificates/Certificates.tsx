"use client";
import { useState } from "react";

import Image from "next/image";

import certificateOne from "../../assets/certificates/1.jpg";
import certificateTwo from "../../assets/certificates/2.jpg";
import certificateThree from "../../assets/certificates/3.jpg";

import "./Certificates.scss";

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div id="certificates">
      <div className="portfolio-header">Certificates</div>
      <div className="certificates-container">
        <Image
          src={certificateOne}
          alt="certificate"
          width={380}
          height={300}
          onClick={() => openModal(certificateOne)}
        />
        <Image
          src={certificateTwo}
          alt="certificate"
          width={380}
          height={300}
          onClick={() => openModal(certificateTwo)}
        />
        <Image
          src={certificateThree}
          alt="certificate"
          width={380}
          height={300}
          onClick={() => openModal(certificateThree)}
        />
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <div className="modal-content">
            <Image
              src={selectedImage}
              alt="Full Screen Certificate"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
