// Courses.tsx
import { useTranslations } from "next-intl";
import { getCoursesData } from "./coursesData";

import "./Courses.scss";

const Courses = () => {
  const t = useTranslations();
  const coursesData = getCoursesData(t);

  return (
    <>
      <div id="courses" className="courses-title">{t("courses.title")}</div>
      <div className="card-container">
        {coursesData.map((content, index) => (
          <div key={index} className="card">
            <video
              src={content.videoUrl}
              controls={!!content.videoUrl}
              playsInline
              poster={content.coverPhoto}
            ></video>
            <div className="courses-title">{content.title}</div>
            <p className="description1">{content.description1}</p>
            <p className="description2">{content.description2}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Courses;
