import ActivityCard from "@/app/components/ActivityCard/ActivityCard";

import "./Activities.scss";

const Activities = () => {
  return (
    <div id="activities" className="activity-container">
      <div className="portfolio-section-title">Активности</div>
      <ActivityCard />
    </div>
  );
};

export default Activities;
