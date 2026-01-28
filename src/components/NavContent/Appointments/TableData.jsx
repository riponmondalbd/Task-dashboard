const data = [
  {
    ClientName: "Jane.D",
    ClientPhone: "01960685765",
    Clientmail: "admin@gmail.com",
    Device: "Apple/Iphone 13pro",
    RepairType: "Screen",
    Date: "02/06/2026",
    Slotno: "1",
    StartTime: "09:00",
  },
  {
    ClientName: "Jane.D",
    ClientPhone: "01960685765",
    Clientmail: "admin@gmail.com",
    Device: "Apple/Iphone 13pro",
    RepairType: "Screen",
    Date: "02/06/2026",
    Slotno: "1",
    StartTime: "10:00",
  },
  {
    ClientName: "Jane.D",
    ClientPhone: "01960685765",
    Clientmail: "admin@gmail.com",
    Device: "Apple/Iphone 13pro",
    RepairType: "Screen",
    Date: "02/06/2026",
    Slotno: "1",
    StartTime: "11:00",
  },
  {
    ClientName: "Jane.D",
    ClientPhone: "01960685765",
    Clientmail: "admin@gmail.com",
    Device: "Apple/Iphone 13pro",
    RepairType: "Screen",
    Date: "02/06/2026",
    Slotno: "1",
    StartTime: "12:00",
  },
  {
    ClientName: "Jane.D",
    ClientPhone: "01960685765",
    Clientmail: "admin@gmail.com",
    Device: "Apple/Iphone 13pro",
    RepairType: "Screen",
    Date: "02/06/2026",
    Slotno: "1",
    StartTime: "02:00",
  },
  {
    ClientName: "Jane.D",
    ClientPhone: "01960685765",
    Clientmail: "admin@gmail.com",
    Device: "Apple/Iphone 13pro",
    RepairType: "Screen",
    Date: "02/06/2026",
    Slotno: "1",
    StartTime: "03:00",
  },
];

const TableData = () => {
  return (
    <div className="bg-[#0F172B80] border border-[#2B7FFF33]  rounded-2xl">
      <div>
        {/* data head */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-3 border-b border-b-[#162F61] py-6.25">
          <p className="pl-6.25 text-white text-[14px] font-normal text-center">
            Client Name
          </p>
          <p className=" text-white text-[14px] font-normal text-center">
            Client Phone
          </p>
          <p className="text-white text-[14px] font-normal text-center xl:col-span-2 hidden md:block">
            Client mail
          </p>
          <p className="text-white text-[14px] font-normal text-center xl:col-span-2 hidden md:block">
            Device
          </p>
          <p className="text-white text-[14px] font-normal text-center hidden lg:block">
            Repair Type
          </p>
          <p className="text-white text-[14px] font-normal text-center hidden xl:block pr-6.25">
            Date
          </p>
          <p className="text-white text-[14px] font-normal text-center hidden xl:block">
            Slot no
          </p>
          <p className="pr-6.25 text-white text-[14px] font-normal text-center hidden xl:block">
            Start Time
          </p>
        </div>

        {/* data body */}
        <div>
          {data.map((d, index) => (
            <div
              key={index}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 py-6.25 border-t border-t-[#162F61]"
            >
              <p className="text-[#51A2FF] text-[14px] font-normal text-center">
                {d.ClientName}
              </p>
              <p className="text-[#CFCFCF] text-[14px] font-normal text-center">
                {d.ClientPhone}
              </p>
              <p className="text-[#CFCFCF] text-[14px] font-normal text-center xl:col-span-2 hidden md:block">
                {d.Clientmail}
              </p>
              <p className="text-[#CFCFCF] text-[14px] font-normal text-center xl:col-span-2 hidden md:block">
                {d.Device}
              </p>
              <p className="text-[#CFCFCF] text-[14px] font-normal text-center hidden lg:block">
                {d.RepairType}
              </p>
              <p className="text-[#CFCFCF] text-[14px] font-normal text-center hidden xl:block">
                {d.Date}
              </p>
              <p className="text-[#CFCFCF] text-[14px] font-normal text-center hidden xl:block">
                {d.Slotno}
              </p>
              <p className="text-[#CFCFCF] text-[14px] font-normal text-center hidden xl:block">
                {d.StartTime}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableData;
