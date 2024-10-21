// Courses.tsx
import { useTranslations } from "next-intl";
import { getCoursesData } from "./coursesData";
import "./Courses.scss";

const Courses = () => {
  const t = useTranslations();

  // Get the translated courses data
  const coursesData = getCoursesData(t);

  return (
    <>
      <div id="courses" className="courses-container">{t("courses.title")}</div>
      <div className="card-container">
        {coursesData.map((content, index) => (
          <div key={index} className="card">
            <video
              src={content.videoUrl}
              controls={!!content.videoUrl}
              playsInline
              poster={content.coverPhoto}
            ></video>
            <h2>{content.title}</h2>
            <p className="description1">{content.description1}</p>
            <p className="description2">{content.description2}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Courses;
