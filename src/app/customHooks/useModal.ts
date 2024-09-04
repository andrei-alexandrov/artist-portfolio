import { useState } from "react";
import { StaticImageData } from "next/image";

type UseModalTypes = {
  isOpen: boolean;
  imageSrc: StaticImageData | string;
  openModal: (image: StaticImageData | string) => void;
  closeModal: () => void;
};

export const useModal = (): UseModalTypes => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState<StaticImageData | string>("");

  const openModal = (image: StaticImageData | string) => {
    setImageSrc(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setImageSrc("");
  };

  return {
    isOpen,
    imageSrc,
    openModal,
    closeModal,
  };
};
