import { useState } from "react";
import assets from "../../common/assets";
import TopNavbar from "../../common/TopNavbar";

const data = {
  name: "Jane D.",
  email: "jane@gmail.com",
  storeName: "Ubreakfix Store",
  storeAddress: "123 Main Street, New York, NY 10001",
};

const Settings = () => {
  const [edit, setEdit] = useState(false);

  return (
    <div>
      <TopNavbar title={"Settings"} />
      <div className="pl-6 py-6 pr-6 xl:pr-0 space-y-6">
        {/* settings */}
        <div className="flex gap-4  md:gap-16">
          <p className="text-white text-2xl font-normal cursor-pointer">
            Profile
          </p>
          <p className="text-white text-2xl font-normal cursor-pointer">
            Password Settings
          </p>
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
              {edit ? (
                <button
                  onClick={() => setEdit(!edit)}
                  className="md:-ml-5 -mt-3 md:mt-0 cursor-pointer"
                >
                  <img
                    className="p-1 w-8 bg-[#7AA3CC] rounded-lg"
                    src={assets.editOutline}
                    alt="edit outline icon"
                  />
                </button>
              ) : (
                <button
                  onClick={() => setEdit(!edit)}
                  className="flex items-center justify-center md:justify-around gap-4 bg-gradient-to-b from-[#1E2A5F] to-[#141B44] shadow-[0_1px_4px_rgba(255,255,255,0.3),0_0_15px_rgba(0,123,255,0.5),inset_0_2px_15px_rgba(255,255,255,0.5)] shadow-white-2xl py-1 px-2 rounded-xl cursor-pointer mt-3 md:mt-0"
                >
                  <p className="text-white text-[12px] font-medium">
                    Edit Profile
                  </p>
                </button>
              )}
            </div>
          </div>
        </div>
        {/* details */}
        {edit ? (
          <div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <p className="text-white text-[20px] font-medium">Full Name</p>
                <input
                  type="text"
                  defaultValue={data.name}
                  className="text-white bg-[#0A0A0F80] py-3 px-4 rounded-[14px] border border-[#00FF8833] focus:outline-1 focus:outline-[#00FF8833]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white text-[20px] font-medium">Email</p>
                <input
                  type="email"
                  defaultValue={data.email}
                  className="text-white bg-[#0A0A0F80] py-3 px-4 rounded-[14px] border border-[#00FF8833] focus:outline-1 focus:outline-[#00FF8833]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white text-[20px] font-medium">Store Name</p>
                <input
                  type="text"
                  defaultValue={data.storeName}
                  className="text-white bg-[#0A0A0F80] py-3 px-4 rounded-[14px] border border-[#00FF8833] focus:outline-1 focus:outline-[#00FF8833]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white text-[20px] font-medium">
                  Store Address
                </p>
                <input
                  type="text"
                  defaultValue={data.storeAddress}
                  className="text-white bg-[#0A0A0F80] py-3 px-4 rounded-[14px] border border-[#00FF8833] focus:outline-1 focus:outline-[#00FF8833]"
                />
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={() => setEdit(!edit)}
                className="w-full md:w-93.25 mt-20 bg-[#00C950] p-2 rounded-2xl text-2xl text-white font-bold cursor-pointer"
              >
                Save
              </button>
            </div>
          </div>
        ) : (
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
              <p className="text-white text-[20px] font-medium">
                Store Address
              </p>
              <p className="text-white text-[20px] font-normal">
                {data.storeAddress}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
