import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// data
const data = [
  {
    name: "Mon",
    uv: 45,
  },
  {
    name: "Tue",
    uv: 50,
  },
  {
    name: "Wed",
    uv: 44,
  },
  {
    name: "Thu",
    uv: 65,
  },
  {
    name: "Fri",
    uv: 75,
  },
  {
    name: "Sat",
    uv: 85,
  },
  {
    name: "Sun",
    uv: 50,
  },
];

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
      <div>
        <AreaChart
          width={"98%"}
          height={300}
          responsive={true}
          data={data}
          margin={{ top: 5, right: 0, left: 0, bottom: 0 }}
        >
          {/* gradients logic */}
          <defs>
            {/* area fill */}
            <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6CC" />
              <stop offset="75%" stopColor="#3B82F640" />
              <stop offset="100%" stopColor="#3B82F600" />
            </linearGradient>

            {/* stroke glow */}
            <linearGradient id="areaStroke" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>

          <CartesianGrid stroke="#1E293B" strokeDasharray="3 6" />

          <XAxis dataKey="name" stroke="#94A3B8" />
          <YAxis stroke="#94A3B8" />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="uv"
            stroke="url(#areaStroke)"
            strokeWidth={2.5}
            fill="url(#areaFill)"
            dot={false}
            activeDot={{ r: 4 }}
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default CallTrends;
