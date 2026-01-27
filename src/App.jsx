import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/content";

function App() {
  return (
    <div className="grid grid-cols-[60px_auto] lg:grid-cols-[241px_auto] h-screen ">
      <BrowserRouter>
        {/* sidebar */}
        <Sidebar />

        {/* content area */}
        <Content />
      </BrowserRouter>
    </div>
  );
}

export default App;
