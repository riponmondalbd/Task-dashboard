import { Link } from "react-router-dom";
import assets from "../common/assets";

const Logo = () => {
  return (
    <Link to={"/"} className="mt-9.5 flex justify-center mb-18">
      <img
        className="logo p-1.5 lg:p-3 bg-white rounded-[14px] "
        src={assets.logoIcon}
        alt={"logoIcon"}
      />
    </Link>
  );
};

export default Logo;
