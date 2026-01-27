const CallTrends = () => {
  return (
    <div className="rounded-2xl border border-[#2B7FFF33]/80 bg-[#0F172B80]">
      {/* title section */}
      <div className="p-6.25 md:flex space-y-3 md:space-y-0 justify-between">
        <div>
          <h3 className="text-[20px] font-normal text-white">
            Call Trends - This Week
          </h3>
          <p className="secondary-color text-[14px] font-normal">
            Total: 472 calls
          </p>
        </div>
        <div>
          <select
            className="text-white border border-[#2B7FFF33]/80 rounded-[10px] py-2.75 px-4.75 focus:ring-1-[#2B7FFF33]/80 w-full  md:w-35"
            name="data"
            id="data"
          >
            <option className="bg-[#121c3a]" value="This Week">
              This Week
            </option>
            <option className="bg-[#121c3a] " value="This Month">
              This Month
            </option>
            <option className="bg-[#121c3a]" value="This Year">
              This Year
            </option>
          </select>
        </div>
      </div>

      {/* chart section */}
      <div></div>
    </div>
  );
};

export default CallTrends;
