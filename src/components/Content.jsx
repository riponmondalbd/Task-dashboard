import { Route, Routes } from "react-router-dom";
import Appointment from "./NavContent/Appointments/Appointment";
import CallLogs from "./NavContent/CallLogs/CallLogs";
import Dashboard from "./NavContent/Dashboard/Dashboard";
import Settings from "./NavContent/Settings/Settings";
import ScrollToTop from "./common/ScrollToTop";

const Content = () => {
  return (
    <div>
      <ScrollToTop />
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
