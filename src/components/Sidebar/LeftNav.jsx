import assets from "../common/assets";

const LeftNav = () => {
  return (
    <div>
      {/* navigation items */}
      <div className="ml-2 space-y-7">
        <div className="flex items-center gap-4">
          <img className="w-8 h-8" src={assets.homeIcon} alt="home icon" />
          <p className="primary-color text-[16px] font-medium">
            Dashboard Overview
          </p>
        </div>
        <div className="flex items-center gap-4">
          <img className="w-8 h-8" src={assets.callIcon} alt="call icon" />
          <p className="primary-color text-[16px] font-medium">Call Logs</p>
        </div>
        <div className="flex items-center gap-4">
          <img
            className="w-8 h-8"
            src={assets.appointmentIcon}
            alt="appointment icon"
          />
          <p className="primary-color text-[16px] font-medium">Appointment</p>
        </div>
        <div className="flex items-center gap-4">
          <img
            className="w-8 h-8"
            src={assets.settingsIcon}
            alt="settings icon"
          />
          <p className="primary-color text-[16px] font-medium">Settings</p>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
