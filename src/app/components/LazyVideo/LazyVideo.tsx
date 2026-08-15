"use client"

import { useRef, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import type { LazyVideoProps } from "@/app/types";

import "./LazyVideo.scss";

const LazyVideo = ({ src, className, autoPlay, loop, muted, playsInline }: LazyVideoProps) => {
    const t = useTranslations();
    const placeholderRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const target = placeholderRef.current;
        if (!target) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.25 }
        );

        observer.observe(target);

        return () => {
            observer.disconnect();
        };
    }, []);

    return isLoaded ? (
        <video
            className={className}
            src={src}
            autoPlay={autoPlay}
            loop={loop}
            muted={muted}
            playsInline={playsInline}
        />
    ) : (
        <div ref={placeholderRef} className="video-placeholder">
            {t("common.loadingVideo")}
        </div>
    );
};

export default LazyVideo;
