import TopNavbar from "../../common/TopNavbar";
import Activities from "./Activities";
import ActivityCard from "./ActivityCard";
import CallTrends from "./CallTrends";

const Dashboard = () => {
  return (
    <div>
      <TopNavbar title={"Dashboard Overview"} />

      <div className="pl-6 py-6 pr-6 xl:pr-0 space-y-6">
        <ActivityCard />
        <CallTrends />
        <Activities />
      </div>
    </div>
  );
};

export default Dashboard;
