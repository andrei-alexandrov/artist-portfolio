"use client";

import { useState } from "react";
import activityData from "./activityData";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

import "./ActivityCard.scss";

const ActivityCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imgSrc: string) => {
    setSelectedImage(imgSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      {activityData.map((item: any, index: number) => (
        <div key={item.title} className="activity-card">
          <div className="card-content-wrapper">
            <h3 className="activity-title">{item.title}</h3>
            <p className="activity-desc">{item.description}</p>
            <div className="activity-logo">
              <img
                src={typeof item.logo === "string" ? item.logo : item.logo.src}
                alt={"highlight-logo"}
                width={item.logoWidth}
                height={item.logoHeight}
              />
            </div>
            <div className="activity-card-btn-wrapper">
              <Link
                href={item.webAddress}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Към сайта</Button>
              </Link>
            </div>
          </div>

          {item.video ? (
            <video
              className="activity-video"
              src={item.video}
              autoPlay
              loop
              muted
              playsInline
            ></video>
          ) : (
            <Image
              className="activity-image"
              src={item.img}
              alt={`${item.title}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onClick={() => handleImageClick(item.img)}
              style={{ cursor: "pointer" }}
            />
          )}
        </div>
      ))}

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={selectedImage}
      />
    </>
  );
};

export default ActivityCard;
