import { useState } from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import default_img from '../assets/default.jpg';
import ConnectUs from "../components/ConnectUs";

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
          <div className="white-background">
            <img src={default_img} alt='TMH'></img>
            <ConnectUs />
          </div>
      </div>
    )
}

export default Blog