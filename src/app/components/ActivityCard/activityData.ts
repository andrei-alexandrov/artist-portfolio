import type { StaticImageData } from "next/image";
import { SOCIAL_URLS } from "../../socialLinks";
import highlightPhoto from "../../assets/projects/highlight/highlight-academy-image.jpg";
import highlightLogo from "../../assets/icons/highlight-logo-light.png";
import musicTalentsPhoto from "../../assets/projects/music-talents/home-banner.jpg";
import musicTalentsLogo from "../../assets/icons/music-talents.png";
import nextArtistPhoto from "../../assets/projects/next-artist/header-nextartist.jpg";

export type ActivityItem = {
    title: string;
    description: string;
    logo: StaticImageData;
    img: StaticImageData;
    logoWidth: number;
    logoHeight: number;
    webAddress: string;
    video?: string;
};

type ActivityKey =
    `activities.${"highlightSinging" | "musicTalents" | "nextArtist"}.${"title" | "description"}`;

export const getActivityData = (
    t: (key: ActivityKey) => string
): ActivityItem[] => {
    return [
        {
            title: t("activities.highlightSinging.title"),
            description: t("activities.highlightSinging.description"),
            logo: highlightLogo,
            img: highlightPhoto,
            logoWidth: 240,
            logoHeight: 85,
            webAddress: SOCIAL_URLS.highlightAcademy,
        },
        {
            title: t("activities.musicTalents.title"),
            description: t("activities.musicTalents.description"),
            logo: musicTalentsLogo,
            img: musicTalentsPhoto,
            logoWidth: 100,
            logoHeight: 125,
            webAddress: SOCIAL_URLS.musicTalents,
        },
        {
            title: t("activities.nextArtist.title"),
            description: t("activities.nextArtist.description"),
            logo: musicTalentsLogo,
            img: nextArtistPhoto,
            logoWidth: 100,
            logoHeight: 125,
            webAddress: SOCIAL_URLS.nextArtist,
            video: "/public-assets/next-video-720.mp4",
        },
    ];
};
