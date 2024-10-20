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
              controls={!!content.videoUrl}
              playsInline
              poster={content.coverPhoto}>
            </video>
            <h2>{content.title}</h2>
            <p className="description1">{content.description1}</p>  {/* Use a specific class for description1 */}
            <p className="description2">{content.description2}</p>  {/* Use a specific class for description2 */}
          </div>
        ))}
      </div>
    </>
  );
};

export default Courses;
