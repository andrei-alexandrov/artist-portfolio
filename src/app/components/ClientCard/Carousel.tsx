import { useRef, useState } from "react";
import Image from "next/image";

import "./Carousel.scss";

const ClientCardCarousel = ({ data, title }: any) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const degrees = useRef<number>(0);
  const [startX, setStartX] = useState<number | null>(null);

  const rotationStep = 360 / data.length;

  const rotateBox = (direction: "prev" | "next") => {
    if (boxRef.current) {
      degrees.current += direction === "prev" ? rotationStep : -rotationStep;
      boxRef.current.style.transform = `perspective(1000px) rotateY(${degrees.current}deg)`;
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setStartX(touch.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!startX) return;

    const touch = e.touches[0];
    const diffX = touch.clientX - startX;

    const sensitivity = 50;

    if (diffX > sensitivity) {
      rotateBox("prev");
      setStartX(null);
    } else if (diffX < -sensitivity) {
      rotateBox("next");
      setStartX(null);
    }
  };

  const handleTouchEnd = () => {
    setStartX(null);
  };

  return (
    <div className="client-card-section">
      <h2 className="carousel-title">{title}</h2>
      <div
        className="carousel-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="clients-container"
          style={{ "--total": data.length } as React.CSSProperties}
          ref={boxRef}
        >
          {data.map((userData: any, index: any) => (
            <span key={index} style={{ "--i": index + 1 } as React.CSSProperties}>
              <Image
                className="carousel-image"
                src={userData.src}
                alt={`Image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="image-name">{userData.name}</div>
            </span>
          ))}
        </div>
        <div className="buttons">
          <div className="btn prev" onClick={() => rotateBox("prev")}></div>
          <div className="btn next" onClick={() => rotateBox("next")}></div>
        </div>
      </div>
    </div>
  );
};

export default ClientCardCarousel;