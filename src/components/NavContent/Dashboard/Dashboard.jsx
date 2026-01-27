import TopNavbar from "../../common/TopNavbar";
import ActivityCard from "./ActivityCard";
import CallTrends from "./CallTrends";

const Dashboard = () => {
  return (
    <div>
      <TopNavbar title={"Dashboard Overview"} />

      <div className="p-6 space-y-6">
        <ActivityCard />
        <CallTrends />
      </div>
    </div>
  );
};

export default Dashboard;
