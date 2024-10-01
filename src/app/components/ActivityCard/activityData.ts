import highlightPhoto from "../../assets/projects/highlight/highlight-academy-image.jpg";
import highlightLogo from "../../assets/icons/highlight-logo-light.png";
import musicTalentsPhoto from "../../assets/projects/music-talents/home-banner.jpg";
import musicTalentsLogo from "../../assets/icons/music-talents.png";
import nextArtistPhoto from "../../assets/projects/next-artist/header-nextartist.jpg";
import lastSongMusicalPhoto from "../../assets/projects/last-song/last-song-musical.jpg";
import whitePartyPhoto from "../../assets/projects/white-party/white-party-event.jpg";

const projectsData = [
  {
    title: "Highlight Singing Academy",
    description:
      "Vocal Academy Highlight is my personal project, my way of sharing everything I have learned over the years with younger singers.",
    logo: highlightLogo,
    img: highlightPhoto,
    logoWidth: 240,
    logoHeight: 85,
    webAddress: "https://highlight-singing.com/",
  },

  {
    title: `Association "The Musical Talents of Bulgaria"`,
    description:
      "We have dedicated our efforts and resources to discover, develop, and support contemporary music and the new generation of musical artists in Bulgaria, offering them opportunities where their potential can be recognized, fully developed, and presented both nationally and internationally.",
    logo: musicTalentsLogo,
    img: musicTalentsPhoto,
    logoWidth: 100,
    logoHeight: 125,
    webAddress: "https://muzikalnite-talanti.com/",
  },

  {
    title: "Next Artist",
    description:
      "Innovative singing competition for children and youth, offering the opportunity to perform on a modern and professional stage without a participation fee.",
    logo: musicTalentsLogo,
    img: nextArtistPhoto,
    logoWidth: 100,
    logoHeight: 125,
    webAddress: "https://muzikalnite-talanti.com/konkurs-next-artist/",
    video: "/public-assets/next-video-1.mp4",
  },

  // {
  //   title: "Мюзикъл „Последната песен“ 2024",
  //   description:
  //     "На 13 септември 2024г. , сцената на ЧСУ “Свети Георги” засия с талантите на Хайлайт Сингинг Академи, които представиха мюзикъла “Последната песен”. Това изключително събитие е част от инициативите на сдружение “Музикалните таланти на България”, което подкрепя и развива младите творци.",
  //   logo: musicTalentsLogo,
  //   img: lastSongMusicalPhoto,
  //   logoWidth: 100,
  //   logoHeight: 125,
  //   webAddress: "https://muzikalnite-talanti.com/proekt/myuzikal-poslednata-pesen-2024/",
  // },

  // {
  //   title: "White Party",
  //   description:
  //     "На 23 юни 2024 г. квартал Бояна в София бе домакин на едно от най-големите и вълнуващи детски събития в България – White Party, организирано от HighLight Singing Academy. Голяма открита сцена събра млади таланти и техните семейства за вечер, изпълнена с музика, танци и забавления.",
  //   logo: musicTalentsLogo,
  //   img: whitePartyPhoto,
  //   logoWidth: 100,
  //   logoHeight: 125,
  //   webAddress: "https://muzikalnite-talanti.com/proekt/white-party-2024/",
  // },
];

export default projectsData;
