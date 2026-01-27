import { BrowserRouter, Route, Routes } from "react-router-dom";
import Appointment from "./components/NavContent/Appointment";
import CallLogs from "./components/NavContent/CallLogs";
import Dashboard from "./components/NavContent/Dashboard";
import Settings from "./components/NavContent/Settings";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="grid grid-cols-[60px_auto] md:grid-cols-[241px_auto] h-screen">
      <BrowserRouter>
        {/* sidebar */}
        <Sidebar />

        {/* content area */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/appointments" element={<Appointment />} />
          <Route path="/call-logs" element={<CallLogs />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
