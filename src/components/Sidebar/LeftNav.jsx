import { NavLink } from "react-router-dom";
import assets from "../common/assets";

const LeftNav = () => {
  return (
    <div>
      {/* navigation items */}
      <div className="mx-2 space-y-7">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-4 py-1 px-2 rounded-xl ${isActive ? "bg-gradient-to-b from-[#1E2A5F] to-[#141B44] shadow-[0_1px_4px_rgba(255,255,255,0.3),0_0_15px_rgba(0,123,255,0.5),inset_0_2px_15px_rgba(255,255,255,0.5)] shadow-white-2xl" : "primary-color"}`
          }
        >
          <img className="w-8 h-8" src={assets.homeIcon} alt="home icon" />
          <p className="primary-color text-[16px] font-medium">
            Dashboard Overview
          </p>
        </NavLink>
        <NavLink
          to="/call-logs"
          className={({ isActive }) =>
            `flex items-center gap-4 py-1 px-2 rounded-xl ${isActive ? "bg-gradient-to-b from-[#1E2A5F] to-[#141B44] shadow-[0_1px_4px_rgba(255,255,255,0.3),0_0_15px_rgba(0,123,255,0.5),inset_0_2px_15px_rgba(255,255,255,0.5)] shadow-white-2xl" : "primary-color"}`
          }
        >
          <img className="w-8 h-8" src={assets.callIcon} alt="call icon" />
          <p className="primary-color text-[16px] font-medium">Call Logs</p>
        </NavLink>
        <NavLink
          to="/appointments"
          className={({ isActive }) =>
            `flex items-center gap-4 py-1 px-2 rounded-xl ${isActive ? "bg-gradient-to-b from-[#1E2A5F] to-[#141B44] shadow-[0_1px_4px_rgba(255,255,255,0.3),0_0_15px_rgba(0,123,255,0.5),inset_0_2px_15px_rgba(255,255,255,0.5)] shadow-white-2xl" : "primary-color"}`
          }
        >
          <img
            className="w-8 h-8"
            src={assets.appointmentIcon}
            alt="appointment icon"
          />
          <p className="primary-color text-[16px] font-medium">Appointment</p>
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-4 py-1 px-2 rounded-xl ${isActive ? "bg-gradient-to-b from-[#1E2A5F] to-[#141B44] shadow-[0_1px_4px_rgba(255,255,255,0.3),0_0_15px_rgba(0,123,255,0.5),inset_0_2px_15px_rgba(255,255,255,0.5)] shadow-white-2xl" : "primary-color"}`
          }
        >
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
