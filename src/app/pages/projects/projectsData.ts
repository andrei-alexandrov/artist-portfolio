import highlightPhoto from "../../assets/projects/highlight/highlight-academy-image.jpg";
import highlightLogo from "../../assets/icons/highlight-logo-dark.png";
import musicTalentsPhoto from "../../assets/projects/music-talents/home-banner.jpg";
import musicTalentsLogo from "../../assets/icons/music-talents-text.png";
import nextArtistPhoto from "../../assets/projects/next-artist/header-nextartist.jpg";

const projectsData = [
  {
    title: "Highlight Singing Academy",
    description:
      "HighLight Singing Academy is my personal project, my way to share everything I have learnt during the years with the younger singers.",
    logo: highlightLogo,
    img: highlightPhoto,
    logoWidth: 240,
    logoHeight: 85,
    webAddress: "https://highlight-singing.com/",
  },

  {
    title: "Music Talents of Bulgaria",
    description:
      "Ние сме посветили усилията и ресурсите си на откриването, развитието и подпомагането на съвременната музика и новото поколение музикални артисти в България, предлагайки им възможности, в които техният потенциал да бъде разпознат, цялостно развит и представен, както на национално, така и на международно ниво.",
    logo: musicTalentsLogo,
    img: musicTalentsPhoto,
    logoWidth: 160,
    logoHeight: 125,
    webAddress: "https://muzikalnite-talanti.com/",
  },

  {
    title: "Next Artist",
    description:
      "Иновативен певчески конкурс за деца и младежи, който предоставя възможност за достигане до модерна и професионална сцена, без такса за участие",
    logo: musicTalentsLogo,
    img: nextArtistPhoto,
    logoWidth: 160,
    logoHeight: 125,
    webAddress: "https://muzikalnite-talanti.com/konkurs-next-artist/",
    video: "/public-assets/next-video-1.mp4",
  },

  {
    title: "White Party",
    description:
      "На 23 юни 2024 г. квартал Бояна в София бе домакин на едно от най-големите и вълнуващи детски събития в България – White Party, организирано от HighLight Singing Academy. Голяма открита сцена събра млади таланти и техните семейства за вечер, изпълнена с музика, танци и забавления.",
    logo: musicTalentsLogo,
    img: highlightPhoto,
    logoWidth: 160,
    logoHeight: 125,
    webAddress: "https://muzikalnite-talanti.com/proekt/white-party-2024/",
  },
];

export default projectsData;
