import { StaticImageData } from "next/image";

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: StaticImageData | string | null;
};

export type LazyVideoProps = {
  src: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
}