import assets from "../../common/assets";

const Pagination = () => {
  return (
    <div className="md:w-1/2 mx-auto mt-11">
      <div className="flex justify-between ">
        <div className="flex gap-2">
          <img src={assets.pagiLeft} alt="left icon" />
          <p className="text-[#697077] text-[16px] font-semibold">Previous</p>
        </div>
        <div className="text-[#0F62FE]">1</div>
        <div className="text-[#001D6C] bg-[#A6C8FF] px-2">2</div>
        <div className="text-[#0F62FE]">3</div>
        <div className="text-[#0F62FE] hidden lg:block">4</div>
        <div className="text-[#0F62FE] hidden lg:block">5</div>
        <div className="text-[#0F62FE]">...</div>
        <div className="text-[#0F62FE]">11 </div>
        <div className="flex gap-2">
          <p className="text-[#0F62FE] text-[16px] font-semibold">Next</p>
          <img src={assets.pagiRight} alt="right icon" />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
