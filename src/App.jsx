import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="grid grid-cols-[241px_auto] h-screen">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
