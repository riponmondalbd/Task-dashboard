import TopNavbar from "../../common/TopNavbar";
import ActivityCard from "./ActivityCard";

const Dashboard = () => {
  return (
    <div>
      <TopNavbar title={"Dashboard Overview"} />

      {/* activity card */}
      <ActivityCard />
    </div>
  );
};

export default Dashboard;
