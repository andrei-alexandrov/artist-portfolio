import Image from "next/image";
import Button from "../../components/Button/Button";
// import Stars from "../../components/Stars/Stars";

import projectsData from "./projectsData";
import "./Projects.scss";
import Link from "next/link";

const Projects = () => {
  return (
    <div id="activities" className="projects-container">
      <div className="portfolio-header">Activities</div>
      {/* <div className="projects-content"> */}
        {/* <div className="stars">
          <Stars />
        </div> */}
        {projectsData.map((item) => (
          <div key={item.title} className="project-card">
            <div className="project-info">
              <h3 className="project-title">{item.title}</h3>
              <p className="project-desc">{item.description}</p>
              <div className="project-logo">
                <Image
                  src={item.logo}
                  alt={`${item.title} logo`}
                  width={item.logoWidth}
                  height={item.logoHeight}
                />
              </div>
              <div>
                <Link
                  href={item.webAddress}
                  target="_black"
                  rel="noopener noreferrer"
                >
                  <Button>Visit</Button>
                </Link>
              </div>
            </div>

            {item.video ? (
              <video
                className="project-video"
                src={item.video}
                // controls
                autoPlay
                loop
                muted
                playsInline
              ></video>
            ) : (
              <Image
                className="project-image"
                src={item.img}
                alt={`${item.title}`}
                layout="responsive"
              />
            )}
          </div>
        ))}
      </div>
    // </div>
  );
};

export default Projects;
