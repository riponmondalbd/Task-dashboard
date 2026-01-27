import LeftNav from "./LeftNav";
import Logo from "./Logo";
import Logout from "./Logout";

const Sidebar = () => {
  return (
    <div className="bg-[#111B3C] border-r border-[#2B7FFF33] flex flex-col justify-between">
      <div>
        <Logo />
        <LeftNav />
      </div>
      <Logout />
    </div>
  );
};

export default Sidebar;
