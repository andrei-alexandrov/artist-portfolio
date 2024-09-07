import Image from "next/image";
import Button from "../../components/Button/Button";

import projectsData from "./projectsData";
import "./Projects.scss";
import Link from "next/link";

const Projects = () => {
  return (
    <div id="activities" className="projects-container">
      <div className="portfolio-section-title">Activities</div>
      {projectsData.map((item) => (
        <div key={item.title} className="project-card">
          <div className="card-content-wrapper">
            <h3 className="project-title">{item.title}</h3>
            <p className="project-desc">{item.description}</p>
            <div className="project-logo">
              <img
                src={typeof item.logo === "string" ? item.logo : item.logo.src}
                alt={"highlight-logo"}
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
              //controls
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
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;
