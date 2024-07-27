import NavBar from "../components/NavBar";
import banner from "../assets/avatar.jpg";
import usp_foundation from "../assets/usp-icon-foundation.svg"
import usp_global from "../assets/usp-icon-globe.svg"
import usp_search from "../assets/usp-icon-search.svg"
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ConnectUs from "../components/ConnectUs";
import NewsCard from "../components/NewsCard";
import img1 from "../assets/thanh-vien-toan-mo-hinh.jpg"
import img2 from "../assets/gioi-thieu-dong-hanh.jpg"
import img3 from "../assets/nhin-lai-nhung-lan.png"

function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const newsContent = [
    {
      img: img1,
      title: 'THÀNH VIÊN TOÁN MÔ HÌNH HÀ NỘI GIÀNH ĐƯỢC GIẢI THƯỞNG TẠI CUỘC THI TOÁN MÔ HÌNH QUỐC TẾ',
      content: 'Vừa qua, từ ngày 18/02 đến 21/02/2023; cuộc thi Mathematical Modeling Contest 2023 (MCM-ICM) đã được tổ chức với sự tham gia của 11296 đội thi trên toàn thế giới. Đây là một cuộc thi quốc tế được tổ chức hàng năm và mở cho sinh viên đại học trên toàn thế giới. Cuộc thi được thiết kế nhằm khuyến khích sự hợp tác đội nhóm, giải quyết vấn đề và kỹ năng giao tiếp giữa các thí sinh.'
    },
    {
      img: img2,
      title: 'GIỚI THIỆU CÁC ĐƠN VỊ ĐỒNG HÀNH, BẢO TRỢ CHUYÊN MÔN CHO CUỘC THI TOÁN MÔ HÌNH MÙA THỨ 9',
      content: 'Tiếp tục thành công từ năm trước, 2023 này, Toán Mô Hình và Đại học Bách Khoa Hà Nội duy trì hợp tác và hướng tới một cuộc thi thành công hơn nữa. Để có được cơ duyên ấy, Toán Mô Hình không thể không gửi lời cảm ơn sâu sắc tới Tiến sĩ Lê Chí Ngọc, người đã đề xuất và tạo điều kiện cho cuộc thi đến với Đại học Bách Khoa Hà Nội. Thầy cũng đã giúp đỡ Toán Mô Hình rất nhiều trong khâu tổ chức cũng như các vấn đề chuyên môn.'
    },
    {
      img: img3,
      title: 'NHÌN LẠI NHỮNG LẦN TOÁN MÔ HÌNH XUẤT HIỆN TRÊN CÁC CUỘC THI VÀ PHƯƠNG TIỆN TRUYỀN THÔNG',
      content: 'Trong suốt những năm hoạt động của mình, Toán Mô Hình Hà Nội đã vinh dự có những lần chiến thắng giải thưởng trong các cuộc thi hay xuất hiện trên những phương tiện truyền thông đại chúng. Đây là một vinh dự cũng như động lực để những bản trẻ sinh viên tiếp tục hành trình công việc của mình với sứ mệnh tạo ra một cộng đồng Toán Ứng dụng lớn mạnh cho học sinh, sinh viên tại Việt Nam. Hãy cùng điểm lại một số sự kiện đáng nhớ mà dự án cũng như tổ chức đã từng góp mặt'
    }
  ];

  const truncateText = (text: string) => {
    if (text.length <= 250) {
      return text;
    } else {
      return text.slice(0, 250);
    }
  }

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
            {newsContent.map((item) => (
              <NewsCard img={item.img} title={item.title} content={truncateText(item.content)} />
            ))}
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