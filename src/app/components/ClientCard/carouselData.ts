import mihaelaFileva from "../../assets/about-me/carousel/mihaela-fileva.jpg";
import daraYotova from "../../assets/about-me/carousel/dara-yotova.jpg";
import jaklinTarakci from "../../assets/about-me/carousel/jaklin.jpg";
import hrisi from "../../assets/about-me/carousel/hrisi.jpg";
import pollyaIvanova from "../../assets/about-me/carousel/poli.jpg";
import mona from "../../assets/about-me/carousel/mona.jpg";
import sanq from "../../assets/about-me/carousel/sanq.jpg";
import luboKirov from "../../assets/about-me/carousel/lubo-kirov.jpg";
import doni from "../../assets/about-me/carousel/doni.jpeg";
import sesil from "../../assets/about-me/carousel/sabri.jpg";

export const getClientsData = (t: any) => {
  return [
    { src: sanq, name: t("moments.sanq") },
    { src: mihaelaFileva, name: t("moments.mihaelaFileva") },
    { src: pollyaIvanova, name: t("moments.pollyaIvanova") },
    { src: daraYotova, name: t("moments.daraYotova") },
    { src: hrisi, name: t("moments.hrisi") },
    { src: mona, name: t("moments.mona") },
    { src: luboKirov, name: t("moments.luboKirov") },
    { src: sesil, name: t("moments.sesil") },
    { src: doni, name: t("moments.doni") },
    { src: jaklinTarakci, name: t("moments.jaklinTarakci") },
  ];
};
