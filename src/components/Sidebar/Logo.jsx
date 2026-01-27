import assets from "../common/assets";

const Logo = () => {
  return (
    <div className="mt-9.5 flex justify-center mb-18">
      <img
        className="logo p-3 bg-white rounded-[14px]"
        src={assets.logoIcon}
        alt={"logoIcon"}
      />
    </div>
  );
};

export default Logo;
