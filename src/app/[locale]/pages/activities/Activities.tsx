import { useTranslations } from "next-intl";
import ActivityCard from "@/app/components/ActivityCard/ActivityCard";

import "./Activities.scss";

const Activities = () => {
  const t = useTranslations();

  return (
    <div id="activities" className="activity-container">
      <div className="portfolio-section-title">{t("activities.title")}</div>
      <ActivityCard />
    </div>
  );
};

export default Activities;
