import { type ModalProps } from "@/app/types";
import Image from "next/image";

import "./Modal.scss";

const Modal = ({ isOpen, onClose, imageSrc }: ModalProps) => {
  if (!isOpen || !imageSrc) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <Image
          src={imageSrc}
          alt="Full size view"
          fill
          style={{ objectFit: "contain" }}
        />
        <button className="modal-close" onClick={onClose}>
          <span style={{ position: "relative", bottom: "2px" }}>&times;</span>
        </button>
      </div>
    </div>
  );
};

export default Modal;
