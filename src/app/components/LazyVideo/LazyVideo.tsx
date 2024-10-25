"use client"

import { useRef, useEffect, useState } from "react";
import type { LazyVideoProps } from "@/app/types";

import "./LazyVideo.scss";

const LazyVideo = ({ src, className, autoPlay, loop, muted, playsInline }: LazyVideoProps) => {
    const videoRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.25 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (observer && videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    return isLoaded ? (
        <video
            ref={videoRef}
            className={className}
            src={src}
            autoPlay={autoPlay}
            loop={loop}
            muted={muted}
            playsInline={playsInline}
        />
    ) : (
        <div ref={videoRef} className="video-placeholder">
            Loading video...
        </div>
    );
};

export default LazyVideo;