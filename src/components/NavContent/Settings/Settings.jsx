import assets from "../../common/assets";
import TopNavbar from "../../common/TopNavbar";

const data = {
  name: "Jane D.",
  email: "jane@gmail.com",
  storeName: "Ubreakfix Store",
  storeAddress: "123 Main Street, New York, NY 10001",
};

const Settings = () => {
  return (
    <div>
      <TopNavbar title={"Settings"} />
      <div className="pl-6 py-6 pr-6 xl:pr-0 space-y-6">
        {/* settings */}
        <div className="flex gap-4 md:gap-16">
          <p className="text-white text-2xl font-normal">Profile</p>
          <p className="text-white text-2xl font-normal">Password Settings</p>
        </div>

        {/* image and button */}
        <div className="mt-10">
          <p className="text-white text-[20px] font-normal text-center md:text-start">
            Profile Image
          </p>
          <div className="flex flex-col md:flex-row items-center md:items-baseline-last ">
            <img
              className="w-25.5 h-25.5 rounded-full"
              src={assets.avatarImage}
              alt="avatar image"
            />
            <div>
              <button className="flex items-center justify-center md:justify-around gap-4 bg-gradient-to-b from-[#1E2A5F] to-[#141B44] shadow-[0_1px_4px_rgba(255,255,255,0.3),0_0_15px_rgba(0,123,255,0.5),inset_0_2px_15px_rgba(255,255,255,0.5)] shadow-white-2xl py-1 px-2 rounded-xl cursor-pointer mt-3 md:mt-0">
                <p className="text-white text-[12px] font-medium">
                  Edit Profile
                </p>
              </button>
            </div>
          </div>
        </div>
        {/* details */}
        <div>
          <div className=" md:w-3/7 grid md:grid-cols-[200px_auto] py-4 border-b border-b-[#192D71]">
            <p className="text-white text-[20px] font-medium">Full Name</p>
            <p className="text-white text-[20px] font-normal">{data.name}</p>
          </div>
          <div className=" md:w-3/7 grid md:grid-cols-[200px_auto] py-4 border-b border-b-[#192D71]">
            <p className="text-white text-[20px] font-medium">Email</p>
            <p className="text-white text-[20px] font-normal">{data.email}</p>
          </div>
          <div className=" md:w-3/7 grid md:grid-cols-[200px_auto] py-4 border-b border-b-[#192D71]">
            <p className="text-white text-[20px] font-medium">Store Name</p>
            <p className="text-white text-[20px] font-normal">
              {data.storeName}
            </p>
          </div>
          <div className="  grid md:grid-cols-[200px_auto] py-4">
            <p className="text-white text-[20px] font-medium">Store Address</p>
            <p className="text-white text-[20px] font-normal">
              {data.storeAddress}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
