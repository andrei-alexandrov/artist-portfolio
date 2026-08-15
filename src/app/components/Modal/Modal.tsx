"use client";

import { useEffect, useRef } from "react";
import { type ModalProps } from "@/app/types";
import Image from "next/image";

import "./Modal.scss";

const Modal = ({ isOpen, onClose, imageSrc }: ModalProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageSrc) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-label="Image preview"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={imageSrc}
          alt="Full size view"
          fill
          style={{ objectFit: "contain" }}
        />
        <button
          ref={closeButtonRef}
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          <span>&times;</span>
        </button>
      </div>
    </div>
  );
};

export default Modal;
