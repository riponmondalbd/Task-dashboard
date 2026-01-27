import assets from "../common/assets";
import TopNavbar from "../common/TopNavbar";

const Dashboard = () => {
  return (
    <div>
      <TopNavbar title={"Dashboard Overview"} />

      {/* activity card */}
      <div className="p-6 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* total calls */}
        <div className="h-36.5 lg:w-93.5 md:w-80 sm:w-full rounded-2xl border border-[#2B7FFF33]/80 bg-[#0F172B80] flex justify-between">
          <div className="p-6.25">
            <p className="text-[14px] font-normal secondary-color">
              Total Calls Today
            </p>
            <p className="text-3xl font-normal primary-color mt-2 mb-4">127</p>
            <p className="text-[14px] font-normal text-[#05DF72]">+12%</p>
          </div>
          <div className="p-6.25">
            <div className="call-button">
              <img className="w-6" src={assets.callIcon} alt="call icon" />
            </div>
          </div>
        </div>

        {/* ai handled calls */}
        <div className="h-36.5 lg:w-93.5 md:w-80 sm:w-full rounded-2xl border border-[#2B7FFF33]/80 bg-[#0F172B80] flex justify-between">
          <div className="p-6.25">
            <p className="text-[14px] font-normal secondary-color">
              AI-Handled Calls
            </p>
            <p className="text-3xl font-normal primary-color mt-2 mb-4">98</p>
            <p className="text-[14px] font-normal text-[#05DF72]">+77%</p>
          </div>
          <div className="p-6.25">
            <div className="bg-linear-to-tl p-3.25 rounded-[14px]  from-[#F6339A] to-[#AD46FF]">
              <img className="w-6" src={assets.aiIcon} alt="ai icon" />
            </div>
          </div>
        </div>

        {/* Warm Transfer */}
        <div className="h-36.5 lg:w-93.5 md:w-80 sm:w-full rounded-2xl border border-[#2B7FFF33]/80 bg-[#0F172B80] flex justify-between">
          <div className="p-6.25">
            <p className="text-[14px] font-normal secondary-color">
              Warm Transfer
            </p>
            <p className="text-3xl font-normal primary-color mt-2 mb-4">23</p>
            <p className="text-[14px] font-normal text-[#05DF72]">+18%</p>
          </div>
          <div className="p-6.25">
            <div className="bg-linear-to-tl p-3.25 rounded-[14px]  from-[#FB2C36] to-[#FF6900]">
              <img
                className="w-6"
                src={assets.transferIcon}
                alt="transfer icon"
              />
            </div>
          </div>
        </div>

        {/* Appointments Booked */}
        <div className="h-36.5 lg:w-93.5 md:w-80 sm:w-full rounded-2xl border border-[#2B7FFF33]/80 bg-[#0F172B80] flex justify-between">
          <div className="p-6.25">
            <p className="text-[14px] font-normal secondary-color">
              Appointments Booked
            </p>
            <p className="text-3xl font-normal primary-color mt-2 mb-4">34</p>
            <p className="text-[14px] font-normal text-[#05DF72]">+8%</p>
          </div>
          <div className="p-6.25">
            <div className="bg-linear-to-tl p-3.25 rounded-[14px]  from-[#00BC7D] to-[#00C950]">
              <img
                className="w-6"
                src={assets.appointmentIcon}
                alt="appointment icon"
              />
            </div>
          </div>
        </div>

        {/* Missed/Failed Calls */}
        <div className="h-36.5 lg:w-93.5 md:w-80 sm:w-full rounded-2xl border border-[#2B7FFF33]/80 bg-[#0F172B80] flex justify-between">
          <div className="p-6.25">
            <p className="text-[14px] font-normal secondary-color">
              Missed/Failed Calls
            </p>
            <p className="text-3xl font-normal primary-color mt-2 mb-4">6</p>
            <p className="text-[14px] font-normal text-[#FD244A]">-3%</p>
          </div>
          <div className="p-6.25">
            <div className="bg-linear-to-tl p-3.25 rounded-[14px]  from-[#00BC7D] to-[#00C950]">
              <img className="w-6" src={assets.crossIcon} alt="cross icon" />
            </div>
          </div>
        </div>

        {/* Avg Call Duration */}
        <div className="h-36.5 lg:w-93.5 md:w-80 sm:w-full rounded-2xl border border-[#2B7FFF33]/80 bg-[#0F172B80] flex justify-between">
          <div className="p-6.25">
            <p className="text-[14px] font-normal secondary-color">
              Avg Call Duration
            </p>
            <p className="text-3xl font-normal primary-color mt-2 mb-4">3:42</p>
            <p className="text-[14px] font-normal text-[#05DF72]">+15%</p>
          </div>
          <div className="p-6.25">
            <div className="bg-linear-to-tl p-3.25 rounded-[14px]  from-[#2B7FFF] to-[#615FFF]">
              <img className="w-6" src={assets.timeIcon} alt="time icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
