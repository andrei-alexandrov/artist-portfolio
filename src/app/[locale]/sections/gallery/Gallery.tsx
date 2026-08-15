"use client";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useModal } from "../../../customHooks/useModal";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Modal from "@/app/components/Modal/Modal";

import inspirationImages from "./galleryImages";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Gallery.scss";

const Gallery = () => {
  const t = useTranslations();
  const { isOpen, imageSrc, openModal, closeModal } = useModal();

  return (
    <div className="inspirations-container">
      <div id="gallery">
        <h2 className="portfolio-section-title">{t("gallery.title")}</h2>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="swiper_container"
        >
          {inspirationImages.map((img, index) => (
            <SwiperSlide key={img.src} onClick={() => openModal(img)}>
              <Image
                src={img}
                alt={`${t("gallery.title")} ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openModal(img);
                  }
                }}
              />
            </SwiperSlide>
          ))}
          <div className="slider-container">
            <div className="slider-controler">
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </Swiper>

        <Modal isOpen={isOpen} onClose={closeModal} imageSrc={imageSrc} />
      </div>
    </div>
  );
};

export default Gallery;
