'use client'
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
        <div
          key={item.title}
          className={`project-card ${
            index === 0 ? "first-activity" : index === 1 ? "second-activity" : ""
          }`}
        >
          <div className="card-content-wrapper">
            <h3 className="project-title">{item.title}</h3>
            <p className="project-desc">{item.description}</p>
            <div className="project-logo">
              <img
                src={typeof item.logo === "string" ? item.logo : item.logo.src}
                alt={"highlight-logo"}
                width={item.logoWidth}
                height={item.logoHeight}
              />
            </div>
            <div>
              <Link
                href={item.webAddress}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Visit</Button>
              </Link>
            </div>
          </div>

          {item.video ? (
            <video
              className="project-video"
              src={item.video}
              autoPlay
              loop
              muted
              playsInline
            ></video>
          ) : (
            <Image
              className="project-image"
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

      <Modal isOpen={isModalOpen} onClose={closeModal} imageSrc={selectedImage} />
    </>
  );
};

export default ActivityCard;
