import type { StaticImageData } from "next/image";
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
import margaritaHranova from "../../assets/about-me/carousel/IMG_98771.jpg";
import greg from "../../assets/about-me/carousel/greg.jpg";

type IntlMessages = {
  moments: {
    greg: string;
    margaritaHranova: string;
    sanq: string;
    mihaelaFileva: string;
    pollyaIvanova: string;
    daraYotova: string;
    hrisi: string;
    mona: string;
    luboKirov: string;
    sesil: string;
    doni: string;
    jaklinTarakci: string;
  };
}

export type ClientData = {
  src: string | StaticImageData;
  name: string;
}

export const getClientsData = (
  t: (key: `moments.${keyof IntlMessages['moments']}`) => string
): ClientData[] => {
  return [
    { src: greg, name: t("moments.greg") },
    { src: margaritaHranova, name: t("moments.margaritaHranova") },
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