import { StaticImageData } from "next/image";

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: StaticImageData | string;
};
