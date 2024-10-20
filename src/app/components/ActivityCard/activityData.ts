import highlightPhoto from "../../assets/projects/highlight/highlight-academy-image.jpg";
import highlightLogo from "../../assets/icons/highlight-logo-light.png";
import musicTalentsPhoto from "../../assets/projects/music-talents/home-banner.jpg";
import musicTalentsLogo from "../../assets/icons/music-talents.png";
import nextArtistPhoto from "../../assets/projects/next-artist/header-nextartist.jpg";

export const getActivityData = (t: any) => {
  return [
    {
      title: t("activities.highlightSinging.title"),
      description: t("activities.highlightSinging.description"),
      logo: highlightLogo,
      img: highlightPhoto,
      logoWidth: 240,
      logoHeight: 85,
      webAddress: "https://highlight-singing.com/",
    },
    {
      title: t("activities.musicTalents.title"),
      description: t("activities.musicTalents.description"),
      logo: musicTalentsLogo,
      img: musicTalentsPhoto,
      logoWidth: 100,
      logoHeight: 125,
      webAddress: "https://muzikalnite-talanti.com/",
    },
    {
      title: t("activities.nextArtist.title"),
      description: t("activities.nextArtist.description"),
      logo: musicTalentsLogo,
      img: nextArtistPhoto,
      logoWidth: 100,
      logoHeight: 125,
      webAddress: "https://muzikalnite-talanti.com/konkurs-next-artist/",
      video: "/public-assets/next-video-1.mp4",
    },
  ];
};