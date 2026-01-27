import LeftNav from "./LeftNav";
import Logo from "./Logo";
import Logout from "./Logout";

const Sidebar = () => {
  return (
    <div className="bg-[#111B3C] border-r border-[#2B7FFF]/10 flex flex-col justify-between">
      <div className="fixed top-0 left-0">
        <Logo />
        <LeftNav />
      </div>
      <Logout />
    </div>
  );
};

export default Sidebar;
