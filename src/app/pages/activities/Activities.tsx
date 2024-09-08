import ActivityCard from "@/app/components/ActivityCard/ActivityCard";

import "./Activities.scss";

const Activities = () => {
  return (
    <div id="activities" className="projects-container">
      <div className="portfolio-section-title">Activities</div>
      <ActivityCard />
    </div>
  );
};

export default Activities;