import { Route, Routes } from "react-router-dom";
import Appointment from "./NavContent/Appointment";
import CallLogs from "./NavContent/CallLogs";
import Dashboard from "./NavContent/Dashboard";
import Settings from "./NavContent/Settings";

const Content = () => {
  return (
    <div className="bg-linear-to-l from-[#020618]/90 via-[#14214e] to-[#0F172B]/99">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/appointments" element={<Appointment />} />
        <Route path="/call-logs" element={<CallLogs />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default Content;
