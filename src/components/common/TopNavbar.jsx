import assets from "./assets";

const TopNavbar = ({ title }) => {
  return (
    <div className="bg-[#111B3C] flex items-center justify-between">
      {/* title */}
      <div>
        <h2 className="text-[18px] md:text-[32px] font-normal primary-color ml-6">
          {title}
        </h2>
      </div>

      {/* notification and avatar */}
      <div className="flex gap-2 md:gap-10">
        <img src={assets.notificationIcon} alt="notifications icon" />
        <img
          className="w-12 md:w-20 rounded-full my-2 mr-4.75"
          src={assets.avatarImage}
          alt="avatar image"
        />
      </div>
    </div>
  );
};

export default TopNavbar;
