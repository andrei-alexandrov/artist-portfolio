import { useTranslations } from "next-intl";
import { getCoursesData } from "./coursesData";
import Image from "next/image";

import "./Courses.scss";

const Courses = () => {
  const t = useTranslations();
  const coursesData = getCoursesData(t);

  return (
    <>
      <h2 id="courses" className="courses-title">{t("courses.title")}</h2>
      <div className="card-container">
        {coursesData.map((content, index) => (
          <div key={index} className="card">
            {content.videoUrl ? (
              <video
                src={content.videoUrl}
                controls
                playsInline
                preload="none"
                poster={content.coverPhoto}
              ></video>
            ) : (
              <Image
                className="placeholder-image"
                src={content.coverPhoto}
                alt={content.title}
                width={640}
                height={360}
              />
            )}
            <h3 className="courses-title">{content.title}</h3>
            <p className="description1">{content.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Courses;
