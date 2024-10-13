import coursesData from "./coursesData";

import "./Courses.scss";


const Courses = () => {
  return (
    <>
      <div id="courses" className="courses-container">Курсове</div>
      <div className="card-container">
        {coursesData.map((content: any, index: number) => (
          <div key={index} className="card">
            <video controls width="100%" poster={content.coverPhoto}>
              <source src={content.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
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
