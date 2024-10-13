import coursesData from "./coursesData";

import "./Courses.scss";


const Courses = () => {
  return (
    <>
      <div id="courses" className="courses-container">Курсове</div>
      <div className="card-container">
        {coursesData.map((content: any, index: number) => (
          <div key={index} className="card">
            <video
              src={content.videoUrl}
              controls
              playsInline
              poster={content.coverPhoto}>
            </video>
            <h2>{content.title}</h2>
            <p>{content.description1}</p>
            <p>{content.description2}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Courses;
