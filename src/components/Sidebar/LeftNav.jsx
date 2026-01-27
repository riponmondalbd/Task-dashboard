import { NavLink } from "react-router-dom";
import assets from "../common/assets";

const LeftNav = () => {
  return (
    <div>
      {/* navigation items */}
      <div className="ml-2 space-y-7">
        <NavLink to="/" className="flex items-center gap-4">
          <img className="w-8 h-8" src={assets.homeIcon} alt="home icon" />
          <p className="primary-color text-[16px] font-medium">
            Dashboard Overview
          </p>
        </NavLink>
        <NavLink to="/call-logs" className="flex items-center gap-4">
          <img className="w-8 h-8" src={assets.callIcon} alt="call icon" />
          <p className="primary-color text-[16px] font-medium">Call Logs</p>
        </NavLink>
        <NavLink to="/appointments" className="flex items-center gap-4">
          <img
            className="w-8 h-8"
            src={assets.appointmentIcon}
            alt="appointment icon"
          />
          <p className="primary-color text-[16px] font-medium">Appointment</p>
        </NavLink>
        <NavLink to="/settings" className="flex items-center gap-4">
          <img
            className="w-8 h-8"
            src={assets.settingsIcon}
            alt="settings icon"
          />
          <p className="primary-color text-[16px] font-medium">Settings</p>
        </NavLink>
      </div>
    </div>
  );
};

export default LeftNav;
