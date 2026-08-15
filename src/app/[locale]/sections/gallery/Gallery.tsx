"use client";

import { useModal } from "../../../customHooks/useModal";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Modal from "@/app/components/Modal/Modal";

import inspirationImages from "./galleryImages";
import "./Gallery.scss";

const Gallery = () => {
  const t = useTranslations();
  const { isOpen, imageSrc, openModal, closeModal } = useModal();

  return (
    <div className="inspirations-container">
      <div id="gallery">
        <h2 className="portfolio-section-title">{t("gallery.title")}</h2>
        <div className="gallery-grid">
          {inspirationImages.map((img, index) => (
            <button
              key={img.src}
              type="button"
              className="gallery-item"
              onClick={() => openModal(img)}
              aria-label={`${t("gallery.title")} ${index + 1}`}
            >
              <Image
                src={img}
                alt=""
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                placeholder="blur"
              />
            </button>
          ))}
        </div>

        <Modal isOpen={isOpen} onClose={closeModal} imageSrc={imageSrc} />
      </div>
    </div>
  );
};

export default Gallery;
