import { useState } from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";

function Blog() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
    return (
      
        <div className="blog">
          <NavBar onClick={openSidebar}/>
          <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
          
      </div>
    )
}

export default Blog