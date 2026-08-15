"use client";

import { useModal } from "@/app/customHooks/useModal";
import { getActivityData } from "./activityData";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Modal from "../Modal/Modal";
import LazyVideo from "../LazyVideo/LazyVideo";

import "./ActivityCard.scss";

const ActivityCard = () => {
  const t = useTranslations();
  const { isOpen, imageSrc, openModal, closeModal } = useModal();
  const activityData = getActivityData(t);

  return (
    <>
      {activityData.map((item) => (
        <div key={item.title} className="activity-card">
          <div className="card-content-wrapper">
            <h3 className="activity-title">{item.title}</h3>
            <p className="activity-desc">{item.description}</p>
            <div className="activity-logo">
              <Image
                src={item.logo}
                alt={`${item.title} logo`}
                width={item.logoWidth}
                height={item.logoHeight}
              />
            </div>
            <div className="activity-card-btn-wrapper">
              <a
                className="contact-button"
                href={item.webAddress}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("activities.buttonText")}
              </a>
            </div>
          </div>

          {item.video ? (
            <LazyVideo
              src={item.video}
              className="activity-video"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <Image
              className="activity-image"
              src={item.img}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              role="button"
              tabIndex={0}
              onClick={() => openModal(item.img)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openModal(item.img);
                }
              }}
            />
          )}
        </div>
      ))}

      <Modal isOpen={isOpen} onClose={closeModal} imageSrc={imageSrc} />
    </>
  );
};

export default ActivityCard;
