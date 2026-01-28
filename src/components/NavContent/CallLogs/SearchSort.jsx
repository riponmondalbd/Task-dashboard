import assets from "../../common/assets";

const SearchSort = () => {
  return (
    <div className="grid grid-cols-2 gap-6.5">
      <div className="flex items-center gap-2 bg-[#0F172B80] border border-[#2B7FFF33] pl-10 py-3 rounded-[14px]">
        <img className="h-5 w-5" src={assets.searchIcon} alt="search icon" />
        <p className="font-normal text-[16px] text-[#62748E]">
          Search by phone number, issue type...
        </p>
      </div>

      <div className="flex justify-end gap-6">
        {/* all type */}
        <div>
          <select
            className="text-white border bg-[#0F172B80] border-[#2B7FFF33]/80 rounded-[10px] py-2.75 px-4.75 focus:ring-1-[#2B7FFF33]/80 w-full  md:w-35"
            name="data"
            id="data"
          >
            <option className="bg-[#121c3a]" value="This Week">
              All Type
            </option>
            <option className="bg-[#121c3a] " value="This Month">
              All
            </option>
            <option className="bg-[#121c3a]" value="This Year">
              Type
            </option>
          </select>
        </div>

        {/* all issues */}
        <div>
          <select
            className="text-white border bg-[#0F172B80] border-[#2B7FFF33]/80 rounded-[10px] py-2.75 px-4.75 focus:ring-1-[#2B7FFF33]/80 w-full  md:w-35"
            name="data"
            id="data"
          >
            <option className="bg-[#121c3a]" value="This Week">
              All Issues
            </option>
            <option className="bg-[#121c3a] " value="This Month">
              All
            </option>
            <option className="bg-[#121c3a]" value="This Year">
              Issues
            </option>
          </select>
        </div>

        {/* Today */}
        <div>
          <select
            className="text-white border bg-[#0F172B80] border-[#2B7FFF33]/80 rounded-[10px] py-2.75 px-4.75 focus:ring-1-[#2B7FFF33]/80 w-full  md:w-35"
            name="data"
            id="data"
          >
            <option className="bg-[#121c3a]" value="This Week">
              Today
            </option>
            <option className="bg-[#121c3a] " value="This Month">
              Tomorrow
            </option>
            <option className="bg-[#121c3a]" value="This Year">
              Next Day
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchSort;
