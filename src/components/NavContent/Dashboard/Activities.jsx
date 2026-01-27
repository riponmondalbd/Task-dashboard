const Activities = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* recent activity */}
      <div className="rounded-2xl border border-[#2B7FFF33]/80 bg-[#0F172B80] p-6.25">
        <h3 className="text-[20px] font-normal text-white mb-4">
          Recent Activity
        </h3>

        <div className="space-y-3">
          {/* first activity */}
          <div className="bg-[#1D293D80] rounded-[10px] p-3 flex gap-3 items-baseline">
            <div className="h-2 w-2 bg-[#05DF72] rounded-full"></div>
            <div>
              <p className="text-white text-[14px] font-normal">
                AI booked appointment for iPhone 13 screen repair
              </p>
              <p className="secondary-color font-normal text-[12px]">
                2 min ago
              </p>
            </div>
          </div>

          {/* second activity */}
          <div className="bg-[#1D293D80] rounded-[10px] p-3 flex gap-3 items-baseline">
            <div className="h-2 w-2 bg-[#FF8904] rounded-full"></div>
            <div>
              <p className="text-white text-[14px] font-normal">
                Warm transfer to technician - Software issue
              </p>
              <p className="secondary-color font-normal text-[12px]">
                5 min ago
              </p>
            </div>
          </div>

          {/* third activity */}
          <div className="bg-[#1D293D80] rounded-[10px] p-3 flex gap-3 items-baseline">
            <div className="h-2 w-2 bg-[#05DF72] rounded-full"></div>
            <div>
              <p className="text-white text-[14px] font-normal">
                Quote provided for iPad battery replacement
              </p>
              <p className="secondary-color font-normal text-[12px]">
                8 min ago
              </p>
            </div>
          </div>

          {/* fourth activity */}
          <div className="bg-[#1D293D80] rounded-[10px] p-3 flex gap-3 items-baseline">
            <div className="h-2 w-2 bg-[#FF6467] rounded-full"></div>
            <div>
              <p className="text-white text-[14px] font-normal">
                Call dropped after 12 seconds
              </p>
              <p className="secondary-color font-normal text-[12px]">
                15 min ago
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Repair Requests */}
      <div className="rounded-2xl border border-[#2B7FFF33]/80 bg-[#0F172B80] p-6.25">
        <h3 className="text-[20px] font-normal text-white mb-4">
          Top Repair Requests
        </h3>

        <div className="space-y-3">
          {/* Screen Repair */}
          <div>
            <div className="flex justify-between mb-2">
              <p className="text-[14px] text-white font-normal">
                Screen Repair
              </p>
              <p className="text-[14px] text-[#C0CCDD] font-light">
                156 requests
              </p>
            </div>
            <div className="w-full bg-[#1D293D] rounded-full h-2">
              <div className="bg-linear-to-r from-[#2B7FFF] to-[#00B8DB] h-2 rounded-full w-4/5"></div>
            </div>
          </div>

          {/* Battery Replacement */}
          <div>
            <div className="flex justify-between mb-2">
              <p className="text-[14px] text-white font-normal">
                Battery Replacement
              </p>
              <p className="text-[14px] text-[#C0CCDD] font-light">
                89 requests
              </p>
            </div>
            <div className="w-full bg-[#1D293D] rounded-full h-2">
              <div className="bg-linear-to-r from-[#2B7FFF] to-[#00B8DB] h-2 rounded-full w-4/6"></div>
            </div>
          </div>

          {/* Back Glass Repair */}
          <div>
            <div className="flex justify-between mb-2">
              <p className="text-[14px] text-white font-normal">
                Back Glass Repair
              </p>
              <p className="text-[14px] text-[#C0CCDD] font-light">
                67 requests
              </p>
            </div>
            <div className="w-full bg-[#1D293D] rounded-full h-2">
              <div className="bg-linear-to-r from-[#2B7FFF] to-[#00B8DB] h-2 rounded-full w-3/6"></div>
            </div>
          </div>

          {/* Software Issues */}
          <div>
            <div className="flex justify-between mb-2">
              <p className="text-[14px] text-white font-normal">
                Software Issues
              </p>
              <p className="text-[14px] text-[#C0CCDD] font-light">
                156 requests
              </p>
            </div>
            <div className="w-full bg-[#1D293D] rounded-full h-2">
              <div className="bg-linear-to-r from-[#2B7FFF] to-[#00B8DB] h-2 rounded-full w-2/6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
