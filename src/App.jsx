import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/content";

function App() {
  return (
    <div className="max-w-360 mx-auto">
      <div className="grid grid-cols-[60px_auto] lg:grid-cols-[241px_auto] h-screen">
        <BrowserRouter>
          <Sidebar />
          <Content />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
