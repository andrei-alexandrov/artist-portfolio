"use client";
import { useState } from "react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import inspirationImages from "./inspirationImages";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Inspirations.scss";

const Inspirations = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage("");
  };

  // Modal component defined inside the Inspirations component
  const Modal = ({ isOpen, onClose, imageSrc }) => {
    if (!isOpen || !imageSrc) return null;

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <Image src={imageSrc} alt="Full size view" layout="fill" objectFit="contain" />
          <button className="modal-close" onClick={onClose}>X</button>
        </div>
      </div>
    );
  };

  return (
    <div id="inspirations" className="container">
      <h1 className="portfolio-header">Inspirations</h1>
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
            <Image src={img} alt="image" width={400} height={300} />
          </SwiperSlide>
        ))}
        <div className="slider-container">
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow"></div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next slider-arrow"></div>
          </div>
        </div>
      </Swiper>

      {/* Modal component usage */}
      <Modal isOpen={modalOpen} onClose={closeModal} imageSrc={currentImage} />
    </div>
  );
};

export default Inspirations;
