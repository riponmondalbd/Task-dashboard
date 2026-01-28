import TopNavbar from "../../common/TopNavbar";
import CallListDetails from "./CallListDetails";
import SearchSort from "./SearchSort";

const CallLogs = () => {
  return (
    <div>
      <TopNavbar title={"Call Logs & History"} />
      <div className="pl-6 py-6 pr-6 xl:pr-0 space-y-5.5">
        <SearchSort />
        <CallListDetails />
      </div>
    </div>
  );
};

export default CallLogs;
