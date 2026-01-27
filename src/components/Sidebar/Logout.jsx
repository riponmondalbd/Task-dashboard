import assets from "../common/assets";

const Logout = () => {
  return (
    <div>
      <div className="md:ml-2 flex items-center justify-center md:justify-start gap-4 mb-12 cursor-pointer">
        <img className="w-8 h-8" src={assets.logoutIcon} alt="logout icon" />
        <p className="text-[#FF1100] text-[16px] font-medium hidden md:block">
          Logout
        </p>
      </div>
    </div>
  );
};

export default Logout;
