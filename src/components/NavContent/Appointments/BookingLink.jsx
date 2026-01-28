import assets from "../../common/assets";

const BookingLink = () => {
  return (
    <div className="bg-linear-to-tl from-[#16213E] to-[#1A1A2E] p-6.25 rounded-2xl space-y-4">
      <p className="text-white text-[16px] font-normal">Booking Link</p>
      <div className="md:flex gap-3">
        <p className="text-white text-[16px] font-normal bg-[#0A0A0F80] py-3 px-4 rounded-[14px] md:flex-1">
          https://techstore.com/book?id=store123
        </p>
        <div className="flex items-center justify-center md:justify-around gap-4 bg-gradient-to-b from-[#1E2A5F] to-[#141B44] shadow-[0_1px_4px_rgba(255,255,255,0.3),0_0_15px_rgba(0,123,255,0.5),inset_0_2px_15px_rgba(255,255,255,0.5)] shadow-white-2xl py-0.5 px-2 rounded-xl cursor-pointer mt-3 md:mt-0">
          <img className="w-8 h-8" src={assets.copyIcon} alt="copy icon" />
          <p className="text-white text-[15px] font-medium">Copy Link</p>
        </div>
      </div>
    </div>
  );
};

export default BookingLink;
