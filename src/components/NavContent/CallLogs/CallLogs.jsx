import TopNavbar from "../../common/TopNavbar";
import SearchSort from "./SearchSort";

const CallLogs = () => {
  return (
    <div>
      <TopNavbar title={"Call Logs & History"} />
      <div className="pl-6 py-6 pr-6 xl:pr-0">
        <SearchSort />
      </div>
    </div>
  );
};

export default CallLogs;
