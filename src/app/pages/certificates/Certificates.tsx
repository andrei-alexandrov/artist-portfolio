"use client";
import Image from "next/image";
import Modal from "@/app/components/Modal/Modal";
import { useModal } from "../../customHooks/useModal";

import certificateOne from "../../assets/certificates/1.jpg";
import certificateTwo from "../../assets/certificates/2.jpg";
import certificateThree from "../../assets/certificates/3.jpg";

import "./Certificates.scss";

const Certificates = () => {
  const { isOpen, imageSrc, openModal, closeModal } = useModal();

  return (
    <div className="c-container" id="certificates">
      <div className="portfolio-section-title">Сертификати</div>
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

      <Modal isOpen={isOpen} onClose={closeModal} imageSrc={imageSrc} />
    </div>
  );
};

export default Certificates;
