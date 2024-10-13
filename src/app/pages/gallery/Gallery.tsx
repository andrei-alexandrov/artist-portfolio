"use client";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useModal } from "../../customHooks/useModal";
import Modal from "@/app/components/Modal/Modal";

import inspirationImages from "./inspirationImages";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Gallery.scss";

const Gallery = () => {
  const { isOpen, imageSrc, openModal, closeModal } = useModal();

  return (
    <div className="inspirations-container">
      <div id="inspirations">
        <h1 className="portfolio-section-title">Галерия</h1>

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
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {inspirationImages.map((img, index) => (
            <SwiperSlide key={index} onClick={() => openModal(img)}>
              <Image
                src={img}
                alt="image"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
