"use client"

import { useRef } from "react";
import Image from "next/image";

import a from "../../assets/people/kristian-kostov.jpg";
import b from "../../assets/people/dara-yotova.jpg";
import c from "../../assets/people/dara-yotova.jpg";
import d from "../../assets/people/dara-yotova.jpg";
import e from "../../assets/people/mihaela-fileva.jpg";
import f from "../../assets/people/dara-yotova.jpg";
import g from "../../assets/people/dara-yotova.jpg";
import h from "../../assets/people/jaklin.jpg";

import "./ClientCard.scss";

const images = [a, b, c, d, e, f, g, h];

const ClientCard = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const degrees = useRef<number>(0);

  const rotateBox = (direction: "prev" | "next") => {
    if (boxRef.current) {
      degrees.current += direction === "prev" ? 45 : -45;
      boxRef.current.style.transform = `perspective(1000px) rotateY(${degrees.current}deg)`;
    }
  };

  return (
    <div className="carousel-container">
      <div
        className="box"
        style={{ "--total": images.length } as React.CSSProperties}
        ref={boxRef}
      >
        {images.map((image, index) => (
          <span key={index} style={{ "--i": index + 1 } as React.CSSProperties}>
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              fill
              className="carousel-image"
            />
          </span>
        ))}
      </div>
      <div className="btns">
        <div className="btn prev" onClick={() => rotateBox("prev")}></div>
        <div className="btn next" onClick={() => rotateBox("next")}></div>
      </div>
    </div>
  );
};

export default ClientCard;
