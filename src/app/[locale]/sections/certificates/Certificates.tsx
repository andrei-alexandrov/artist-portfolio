"use client";

import { useModal } from "../../../customHooks/useModal";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Modal from "@/app/components/Modal/Modal";

import certificateOne from "../../../assets/certificates/1.jpg";
import certificateTwo from "../../../assets/certificates/2.jpg";
import certificateThree from "../../../assets/certificates/3.jpg";

import "./Certificates.scss";

const certificates = [certificateOne, certificateTwo, certificateThree];

const Certificates = () => {
  const t = useTranslations();
  const { isOpen, imageSrc, openModal, closeModal } = useModal();

  return (
    <div className="c-container" id="certificates">
      <h2 className="portfolio-section-title">{t("certificates.title")}</h2>
      <div className="certificates-container">
        {certificates.map((certificate, index) => (
          <button
            key={index}
            className="certificate-button"
            onClick={() => openModal(certificate)}
            aria-label={`${t("certificates.title")} ${index + 1}`}
          >
            <Image
              src={certificate}
              alt={`${t("certificates.title")} ${index + 1}`}
              width={380}
              height={300}
            />
          </button>
        ))}
      </div>

      <Modal isOpen={isOpen} onClose={closeModal} imageSrc={imageSrc} />
    </div>
  );
};

export default Certificates;
