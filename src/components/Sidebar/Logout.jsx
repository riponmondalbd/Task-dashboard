import assets from "../common/assets";

const Logout = () => {
  return (
    <div>
      <div className="md:ml-2 flex items-center justify-center lg:justify-start gap-4 mb-12 cursor-pointer px-2 fixed bottom-0">
        <img className="w-8 h-8" src={assets.logoutIcon} alt="logout icon" />
        <p className="text-[#FF1100] text-[16px] font-medium hidden lg:block">
          Logout
        </p>
      </div>
    </div>
  );
};

export default Logout;
