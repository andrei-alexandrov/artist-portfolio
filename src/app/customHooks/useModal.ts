import { useState } from "react";
import { StaticImageData } from "next/image";

type UseModalTypes = {
  isOpen: boolean;
  imageSrc: StaticImageData | string | null;
  openModal: (image: StaticImageData | string) => void;
  closeModal: () => void;
};

export const useModal = (): UseModalTypes => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState<StaticImageData | string | null>(null);

  const openModal = (image: StaticImageData | string) => {
    setImageSrc(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setImageSrc(null);
  };

  return {
    isOpen,
    imageSrc,
    openModal,
    closeModal,
  };
};
