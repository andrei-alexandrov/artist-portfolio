import type { StaticImageData } from "next/image";
import mihaelaFileva from "../../assets/about-me/carousel/mihaela-fileva.jpg";
import jaklinTarakci from "../../assets/about-me/carousel/jaklin.jpg";
import sanq from "../../assets/about-me/carousel/sanq.jpg";
import luboKirov from "../../assets/about-me/carousel/lubo-kirov.jpg";
import doni from "../../assets/about-me/carousel/doni.jpeg";
import margaritaHranova from "../../assets/about-me/carousel/IMG_98771.jpg";
import greg from "../../assets/about-me/carousel/greg.jpg";
import momentOne from "../../assets/about-me/carousel/1.jpg";
import momentTwo from "../../assets/about-me/carousel/2.jpg";
import momentThree from "../../assets/about-me/carousel/3.jpg";
import momentFour from "../../assets/about-me/carousel/4.jpg";
import momentFive from "../../assets/about-me/carousel/5.jpg";

type MomentKey =
  | "greg"
  | "margaritaHranova"
  | "sanq"
  | "mihaelaFileva"
  | "daraYotova"
  | "luboKirov"
  | "doni"
  | "jaklinTarakci"
  | "kristianKostov"
  | "eurovision2026"
  | "mona";

export type ClientData = {
  src: string | StaticImageData;
  name: string;
}

export const getClientsData = (
  t: (key: `moments.${MomentKey}`) => string
): ClientData[] => {
  return [
    // First entry faces the viewer when the carousel loads.
    { src: momentTwo, name: t("moments.daraYotova") },
    { src: sanq, name: t("moments.sanq") },
    { src: mihaelaFileva, name: t("moments.mihaelaFileva") },
    { src: luboKirov, name: t("moments.luboKirov") },
    { src: greg, name: t("moments.greg") },
    { src: margaritaHranova, name: t("moments.margaritaHranova") },
    { src: doni, name: t("moments.doni") },
    { src: jaklinTarakci, name: t("moments.jaklinTarakci") },
    { src: momentOne, name: t("moments.kristianKostov") },
    { src: momentThree, name: t("moments.eurovision2026") },
    { src: momentFour, name: t("moments.eurovision2026") },
    { src: momentFive, name: t("moments.mona") },
  ];
};
