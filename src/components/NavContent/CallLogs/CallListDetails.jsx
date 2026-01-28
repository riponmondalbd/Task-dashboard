import assets from "../../common/assets";

const CallListDetails = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-6.5">
      {/* call list */}
      <div className="border border-[#2B7FFF33]/80 bg-[#0F172B80]  rounded-2xl">
        <p className="text-xl text-white font-normal pb-4 border-b border-b-[#2B7FFF33]/80 p-4">
          Call List
        </p>

        {/* AI Resolved */}
        <div className="p-4 pb-4 border-b-4 border-b-[#2B7FFF]">
          {/* number  */}
          <div className="md:flex justify-between items-start mt-4 mb-3">
            <div className="flex items-center gap-3">
              <img
                className="call-button"
                src={assets.callIcon}
                alt="call icon"
              />
              <div>
                <p className="text-[16px] font-normal text-white">
                  +1 (555) 345-6789
                </p>
                <p className="text-[12px] font-normal text-[#90A1B9] ">
                  2025-12-16 • 09:42 AM
                </p>
              </div>
            </div>
            <button className="text-[#05DF72] text-[12px] font-normal bg-linear-to-r from-[#00C95033] to-[#00BC7D33] border border-[#00C9504D] py-1 px-3 rounded-[10px] cursor-pointer mt-3 md:mt-0">
              AI Resolved
            </button>
          </div>

          {/* time */}
          <div className="flex gap-2">
            <div className="flex items-center gap-1">
              <img
                className="h-4 w-4 "
                src={assets.clockIcon}
                alt="time icon"
              />
              <p className="text-[14px] font-normal text-[#90A1B9]">5:23</p>
            </div>
            <div className="flex items-center gap-1">
              <img className="h-4 w-4 " src={assets.tikIcon} alt="tik icon" />
              <p className="text-[14px] font-normal text-[#90A1B9]">
                Quote Provided
              </p>
            </div>
            <button className="text-[#51A2FF] text-[14px] font-normal px-2 py-0.5 bg-[#2B7FFF33] cursor-pointer rounded-sm">
              Screen
            </button>
          </div>
        </div>

        {/* Warm Transfer */}
        <div className="p-4 pb-4 border-b border-b-[#2B7FFF33]/80">
          {/* number  */}
          <div className="md:flex justify-between items-start mt-4 mb-3">
            <div className="flex items-center gap-3">
              <img
                className="call-button"
                src={assets.callIcon}
                alt="call icon"
              />
              <div>
                <p className="text-[16px] font-normal text-white">
                  +1 (555) 345-6789
                </p>
                <p className="text-[12px] font-normal text-[#90A1B9] ">
                  2025-12-16 • 09:42 AM
                </p>
              </div>
            </div>
            <button className="text-[#FF8904] text-[12px] font-normal bg-linear-to-r from-[#FF690033] to-[#FB2C3633] border border-[#FF69004D] py-1 px-3 rounded-[10px] cursor-pointer  mt-3 md:mt-0">
              Warm Transfer
            </button>
          </div>

          {/* time */}
          <div className="flex gap-2">
            <div className="flex items-center gap-1">
              <img
                className="h-4 w-4 "
                src={assets.clockIcon}
                alt="time icon"
              />
              <p className="text-[14px] font-normal text-[#90A1B9]">5:23</p>
            </div>
            <div className="flex items-center gap-1">
              <img className="h-4 w-4 " src={assets.tikIcon} alt="tik icon" />
              <p className="text-[14px] font-normal text-[#90A1B9]">
                Escalated to technician
              </p>
            </div>
            <button className="text-[#51A2FF] text-[14px] font-normal px-2 py-0.5 bg-[#2B7FFF33] cursor-pointer rounded-sm">
              Software
            </button>
          </div>
        </div>

        {/* Appointment */}
        <div className="p-4 pb-4 border-b border-b-[#2B7FFF33]/80">
          {/* number  */}
          <div className="md:flex justify-between items-start mt-4 mb-3">
            <div className="flex items-center gap-3">
              <img
                className="call-button"
                src={assets.callIcon}
                alt="call icon"
              />
              <div>
                <p className="text-[16px] font-normal text-white">
                  +1 (555) 345-6789
                </p>
                <p className="text-[12px] font-normal text-[#90A1B9] ">
                  2025-12-16 • 09:42 AM
                </p>
              </div>
            </div>
            <button className="text-[#51A2FF] text-[12px] font-normal bg-linear-to-r from-[#2B7FFF33] to-[#00B8DB33] border border-[#2B7FFF4D] py-1 px-3 rounded-[10px] cursor-pointer mt-3 md:mt-0">
              Appointment
            </button>
          </div>

          {/* time */}
          <div className="flex gap-2">
            <div className="flex items-center gap-1">
              <img
                className="h-4 w-4 "
                src={assets.clockIcon}
                alt="time icon"
              />
              <p className="text-[14px] font-normal text-[#90A1B9]">5:23</p>
            </div>
            <div className="flex items-center gap-1">
              <img className="h-4 w-4 " src={assets.tikIcon} alt="tik icon" />
              <p className="text-[14px] font-normal text-[#90A1B9]">
                Appointment Booked
              </p>
            </div>
            <button className="text-[#51A2FF] text-[14px] font-normal px-2 py-0.5 bg-[#2B7FFF33] cursor-pointer rounded-sm">
              Battery
            </button>
          </div>
        </div>

        {/* Dropped */}
        <div className="p-4 pb-4 border-b border-b-[#2B7FFF33]/80">
          {/* number  */}
          <div className="md:flex justify-between items-start mt-4 mb-3">
            <div className="flex items-center gap-3">
              <img
                className="call-button"
                src={assets.callIcon}
                alt="call icon"
              />
              <div>
                <p className="text-[16px] font-normal text-white">
                  +1 (555) 345-6789
                </p>
                <p className="text-[12px] font-normal text-[#90A1B9] ">
                  2025-12-16 • 09:42 AM
                </p>
              </div>
            </div>
            <button className="text-[#FF0404] text-[12px] font-normal bg-linear-to-r from-[#FF150033] to-[#FB2C3633] border border-[#FF69004D] py-1 px-3 rounded-[10px] cursor-pointer mt-3 md:mt-0">
              Dropped
            </button>
          </div>

          {/* time */}
          <div className="flex gap-2">
            <div className="flex items-center gap-1">
              <img
                className="h-4 w-4 "
                src={assets.clockIcon}
                alt="time icon"
              />
              <p className="text-[14px] font-normal text-[#90A1B9]">5:23</p>
            </div>
            <div className="flex items-center gap-1">
              <img className="h-4 w-4 " src={assets.tikIcon} alt="tik icon" />
              <p className="text-[14px] font-normal text-[#90A1B9]">
                Call Dropped
              </p>
            </div>
            <button className="text-[#51A2FF] text-[14px] font-normal px-2 py-0.5 bg-[#2B7FFF33] cursor-pointer rounded-sm">
              Unknown
            </button>
          </div>
        </div>

        {/* all resolved */}
        <div className="p-4 pb-4">
          {/* number  */}
          <div className="md:flex justify-between items-start mt-4 mb-3">
            <div className="flex items-center gap-3">
              <img
                className="call-button"
                src={assets.callIcon}
                alt="call icon"
              />
              <div>
                <p className="text-[16px] font-normal text-white">
                  +1 (555) 345-6789
                </p>
                <p className="text-[12px] font-normal text-[#90A1B9] ">
                  2025-12-16 • 09:42 AM
                </p>
              </div>
            </div>
            <button className="text-[#05DF72] text-[12px] font-normal bg-linear-to-r from-[#00C95033] to-[#00BC7D33] border border-[#00C9504D] py-1 px-3 rounded-[10px] cursor-pointer mt-3 md:mt-0">
              AI Resolved
            </button>
          </div>

          {/* time */}
          <div className="flex gap-2">
            <div className="flex items-center gap-1">
              <img
                className="h-4 w-4 "
                src={assets.clockIcon}
                alt="time icon"
              />
              <p className="text-[14px] font-normal text-[#90A1B9]">5:23</p>
            </div>
            <div className="flex items-center gap-1">
              <img className="h-4 w-4 " src={assets.tikIcon} alt="tik icon" />
              <p className="text-[14px] font-normal text-[#90A1B9]">
                Quote Provided
              </p>
            </div>
            <button className="text-[#51A2FF] text-[14px] font-normal px-2 py-0.5 bg-[#2B7FFF33] cursor-pointer rounded-sm">
              Screen
            </button>
          </div>
        </div>
      </div>

      {/* call details */}
      <div className="border border-[#2B7FFF33]/80 bg-[#0F172B80]  rounded-2xl">
        <p className="text-xl text-white font-normal pb-4 border-b border-b-[#2B7FFF33]/80 p-4">
          Call Details
        </p>

        <div className="p-6 space-y-6">
          {/* phone number date */}
          <div className="space-y-4">
            <div className="grid grid-cols-2">
              <div>
                <p className="text-[14px] font-normal text-[#90A1B9]">
                  Phone Number
                </p>
                <p className="text-white text-[16px] font-normal">
                  +1 (555) 123-4567
                </p>
              </div>
              <div>
                <p className="text-[14px] font-normal text-[#90A1B9]">
                  Duration
                </p>
                <p className="text-white text-[16px] font-normal">4:32</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[14px] font-normal text-[#90A1B9]">
                  Date & Time
                </p>
                <p className="text-white text-[16px] font-normal">
                  2025-12-16 10:45 AM
                </p>
              </div>
              <div>
                <p className="text-[14px] font-normal text-[#90A1B9]">
                  Issue Type
                </p>
                <p className="text-white text-[16px] font-normal">Screen</p>
              </div>
            </div>
          </div>

          {/* call type */}
          <div>
            <p className="text-[14px] font-normal text-[#90A1B9] mb-2">
              Call Type
            </p>
            <button className="text-[#05DF72] text-[12px] font-normal bg-linear-to-r from-[#00C95033] to-[#00BC7D33] border border-[#00C9504D] py-1 px-3 rounded-[10px] cursor-pointer ">
              AI Resolved
            </button>
          </div>

          {/* outcome */}
          <div>
            <p className="text-[14px] font-normal text-[#90A1B9]">Outcome</p>
            <p className="text-white text-[16px] font-normal">Quote provided</p>
          </div>

          {/* pay audio recording */}
          <div className="flex justify-center p-3.75 border border-[#AD46FF4D] rounded-[14px] bg-linear-to-r from-[#AD46FF33] to-[#F6339A33]">
            <div className="flex items-center gap-1.75">
              <img src={assets.payIcon} alt="play icon" />
              <p className="text-[#C27AFF] text-[16px] font-normal">
                Play Audio Recording
              </p>
            </div>
          </div>

          {/* Conversation Transcript */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src={assets.docIcon} alt="doc icon" />
              <p className="text-white text-[16px] font-normal">
                Conversation Transcript
              </p>
            </div>

            {/* details */}
            <div className="bg-[#1D293D80] p-4 rounded-[14px] space-y-3">
              {/* assistant */}
              <div>
                <p className="text-[#05DF72] text-[14px] font-normal">
                  AI Assistant:
                </p>
                <p className="text-white text-[12px] font-medium">
                  Thank you for calling UBreakiFix! How can I help you today?
                </p>
              </div>
              {/* Customer: */}
              <div>
                <p className="text-[#51A2FF] text-[14px] font-normal">
                  Customer:
                </p>
                <p className="text-white text-[12px] font-medium">
                  Hi, my iPhone 13 screen is cracked. How much would it cost to
                  repair?
                </p>
              </div>
              {/*Ai assistant */}
              <div>
                <p className="text-[#05DF72] text-[14px] font-normal">
                  AI Assistant:
                </p>
                <p className="text-white text-[12px] font-medium">
                  I can help you with that! For an iPhone 13 screen repair, our
                  price is $199. This includes parts, labor, and comes with a
                  90-day warranty. Would you like to book an appointment?
                </p>
              </div>
              {/* customer */}
              <div>
                <p className="text-[#51A2FF] text-[14px] font-normal">
                  Customer:
                </p>
                <p className="text-white text-[12px] font-medium">
                  Yes, please! When are you available?
                </p>
              </div>
              {/* ai assistant */}
              <div>
                <p className="text-[#05DF72] text-[14px] font-normal">
                  AI Assistant:
                </p>
                <p className="text-white text-[12px] font-medium">
                  Great! I have availability today at 2:00 PM or tomorrow at
                  10:00 AM. Which works better for you?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallListDetails;
