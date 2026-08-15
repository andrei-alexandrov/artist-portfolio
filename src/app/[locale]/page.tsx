import { unstable_setRequestLocale } from "next-intl/server";
import Intro from "./sections/intro/Intro";
import About from "./sections/about/About";
import Activities from "./sections/activities/Activities";
import Gallery from "./sections/gallery/Gallery";
import Courses from "./sections/courses/Courses";
import Certificates from "./sections/certificates/Certificates";
import Contact from "./sections/contact/Contact";

type Props = {
  params: {
    locale: string;
  };
};

export default function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <main>
      <div className="layout-container">
        <Intro />
        <About />
        <Activities />
        <Courses />
        <Gallery />
        <Certificates />
      </div>
      <Contact />
    </main>
  );
}
