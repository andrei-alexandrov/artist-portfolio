import highlightPhoto from "../../assets/projects/highlight/highlight-academy-image.jpg";
import highlightLogo from "../../assets/icons/highlight-logo-light.png";
import musicTalentsPhoto from "../../assets/projects/music-talents/home-banner.jpg";
import musicTalentsLogo from "../../assets/icons/music-talents.png";
import nextArtistPhoto from "../../assets/projects/next-artist/header-nextartist.jpg";
import lastSongMusicalPhoto from "../../assets/projects/last-song/last-song-musical.jpg";
import whitePartyPhoto from "../../assets/projects/white-party/white-party-event.jpg";

const projectsData = [
  {
    title: "Вокална Академия Хайлайт",
    description:
      "Вокална Академия Хайлайт е моят личен проект, моят начин да споделя всичко, което съм научила през годините, с по-младите певци.",
    logo: highlightLogo,
    img: highlightPhoto,
    logoWidth: 240,
    logoHeight: 85,
    webAddress: "https://highlight-singing.com/",
  },

  {
    title: `Сдружение "Музикалните Таланти на България"`,
    description:
      "Ние сме посветили усилията и ресурсите си на откриването, развитието и подпомагането на съвременната музика и новото поколение музикални артисти в България, предлагайки им възможности, в които техният потенциал да бъде разпознат, цялостно развит и представен, както на национално, така и на международно ниво.",
    logo: musicTalentsLogo,
    img: musicTalentsPhoto,
    logoWidth: 100,
    logoHeight: 125,
    webAddress: "https://muzikalnite-talanti.com/",
  },

  {
    title: "Next Artist",
    description:
      "Иновативен певчески конкурс за деца и младежи, който предоставя възможност за достигане до модерна и професионална сцена, без такса за участие",
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
