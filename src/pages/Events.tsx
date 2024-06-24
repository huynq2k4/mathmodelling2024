import { useState } from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";

function Event() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
    return (
        <div className="event">
          <NavBar onClick={openSidebar}/>
          <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
          
      </div>
    )
}

export default Event