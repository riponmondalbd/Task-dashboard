import assets from "../../common/assets";

const Pagination = () => {
  return (
    <div className="md:w-1/2 mx-auto mt-11">
      <div className="flex justify-between ">
        <div className="flex gap-2 cursor-pointer">
          <img src={assets.pagiLeft} alt="left icon" />
          <p className="text-[#697077] text-[16px] font-semibold cursor-pointer">
            Previous
          </p>
        </div>
        <div className="text-[#0F62FE] cursor-pointer">1</div>
        <div className="text-[#001D6C] bg-[#A6C8FF] px-2 cursor-pointer">2</div>
        <div className="text-[#0F62FE] cursor-pointer">3</div>
        <div className="text-[#0F62FE] hidden lg:block cursor-pointer">4</div>
        <div className="text-[#0F62FE] hidden lg:block cursor-pointer">5</div>
        <div className="text-[#0F62FE] cursor-pointer">...</div>
        <div className="text-[#0F62FE] cursor-pointer">11 </div>
        <div className="flex gap-2 cursor-pointer">
          <p className="text-[#0F62FE] text-[16px] font-semibold cursor-pointer">
            Next
          </p>
          <img src={assets.pagiRight} alt="right icon" />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
