import { useTranslations } from "next-intl";
import { getCoursesData } from "./coursesData";
import Image from "next/image";

import "./Courses.scss";

const Courses = () => {
  const t = useTranslations();
  const coursesData = getCoursesData(t);

  return (
    <div id="courses" className="courses-container">
      <h2 className="portfolio-section-title">{t("courses.title")}</h2>
      <p className="courses-note">{t("courses.note")}</p>
      <div className="card-container">
        {coursesData.map((content) => (
          <div key={content.title} className="card">
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
                width={1000}
                height={940}
              />
            )}
            <h3 className="course-card-title">{content.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
