import NavBar from "../components/NavBar";
import default_img from "../assets/default.jpg";
import banner from "../assets/avatar.jpg";
import usp_foundation from "../assets/usp-icon-foundation.svg"
import usp_global from "../assets/usp-icon-globe.svg"
import usp_search from "../assets/usp-icon-search.svg"
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ConnectUs from "../components/ConnectUs";

function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
    return (
        <div className="content">
          <NavBar onClick={openSidebar}/>
          <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
          <div className='homepage-avatar'>
            <div className='homepage-competition'>
              
              <p className="homepage-competition-name">THE 2024 MATHEMATICAL MODELING COMPETITION</p>
              <p className="homepage-competition-content">MATHEMATICAL MODELING IN HEALTHCARE SCIENCE</p>
              <button className="homepage-signup">SIGN UP NOW</button>
            </div>
            <div className="transition"></div>
            
          </div>
          <div className="homepage-introduction">
            <p className="title" style={{textAlign: 'left', fontSize: '4vw'}}>HANOI MATHEMATICAL MODELING COMMUNITY</p>
            <p className="homepage-introduction-content">
              Toán Mô hình Hà Nội là dự án quy mô toàn quốc về nghiên cứu và phát triển các ứng dụng của Toán học
            </p>
          </div>
          <p className="title">FEATURE NEWS</p>
          <div className="homepage-news">
          
              <div className="homepage-news-component">
                <img src={default_img} alt='TMH' className="homepage-news-img"></img>
                <p className="homepage-news-title">News title 1</p>
              </div>
              <div className="homepage-news-component">
                <img src={default_img} alt='TMH' className="homepage-news-img"></img>
                <p className="homepage-news-title">News title 2</p>
              </div>
              <div className="homepage-news-component">
                <img src={default_img} alt='TMH' className="homepage-news-img"></img>
                <p className="homepage-news-title">News title 3</p>
              </div>
          </div>
          <p className="title">WHAT MAKES US UNIQUE</p>
          <div className="homepage-unique">
          
              <div className="homepage-usp">
                <img src={usp_foundation} alt='TMH' className="homepage-usp-img"></img>
                <p className="homepage-usp-content">
                  Toán Mô Hình tự tin là một trong những tổ chức sinh viên tiên phong về Toán học Ứng dụng tại Việt Nam với lịch sử 10 năm hình thành và phát triển.
                </p>
              </div>
              <div className="homepage-usp">
                <img src={usp_search} alt='TMH' className="homepage-usp-img"></img>
                <p className="homepage-usp-content">
                  Toán Mô Hình tập trung vào việc tìm kiếm và thúc đẩy các ý tưởng mới ứng dụng Toán học, tạo môi trường cho các bạn trẻ thực hiện hóa những ý tưởng của bản thân.
                </p>
              </div>
              <div className="homepage-usp">
                <img src={usp_global} alt='TMH' className="homepage-usp-img"></img>
                <p className="homepage-usp-content">
                  Với mạng lưới cựu thành viên và Ban Cố vấn đến từ nhiều cơ sở giáo dục, trường đại học danh giá trong và ngoài nước, Toán Mô Hình luôn sẵn sàng hỗ trợ và kết nối với các bạn trẻ đam mê Toán học Ứng dụng.
                </p>
              </div>
          </div>

          
          <div className="white-background">
          <p className="title homepage-network">OUR NETWORKS</p>
          <img src={banner} alt='TMH' className="homepage-network-flag"></img>
          <div className="white-background homepage-network-img">
            
          </div>
          <ConnectUs />

          </div>
          

      </div>
    )
}

export default HomePage