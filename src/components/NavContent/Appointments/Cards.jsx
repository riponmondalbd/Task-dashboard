import assets from "../../common/assets";

const Cards = () => {
  return (
    <div className="grid md:grid-cols-3 gap-10">
      {/* total booked */}
      <div className="bg-[#0F172B80] border border-[#2B7FFF33] p-6.25 rounded-2xl space-y-2">
        <div className="flex items-center gap-3">
          <img src={assets.blueAppointmentIcon} alt="appointment icon" />
          <p className="text-[#90A1B9] text-[14px] font-normal">Total Booked</p>
        </div>
        <p className="text-white text-[24px] font-normal">34</p>
        <p className="text-[#05DF72] text-[14px] font-normal">+8 this week</p>
      </div>
      {/* AI Booked */}
      <div className="bg-[#0F172B80] border border-[#2B7FFF33] p-6.25 rounded-2xl space-y-2">
        <div className="flex items-center gap-3">
          <img src={assets.grennTikIcon} alt="appointment icon" />
          <p className="text-[#90A1B9] text-[14px] font-normal">AI Booked</p>
        </div>
        <p className="text-white text-[24px] font-normal">28</p>
        <p className="text-[#90A1B9] text-[14px] font-normal">82% of total</p>
      </div>
      {/* Pending */}
      <div className="bg-[#0F172B80] border border-[#2B7FFF33] p-6.25 rounded-2xl space-y-2">
        <div className="flex items-center gap-3">
          <img src={assets.yellowIcon} alt="appointment icon" />
          <p className="text-[#90A1B9] text-[14px] font-normal">Pending</p>
        </div>
        <p className="text-white text-[24px] font-normal">3</p>
        <p className="text-[#90A1B9] text-[14px] font-normal">
          Awaiting confirmation
        </p>
      </div>
    </div>
  );
};

export default Cards;
