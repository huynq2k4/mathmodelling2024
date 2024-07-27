import NavBar from "../components/NavBar";
import banner from '../assets/avatar.jpg';
import Profile from "../components/Profile";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import partner_1office from "../assets/partner_1office.png"
import partner_3c from "../assets/partner_3c.jpg"
import partner_advertising_vietnam from "../assets/partner_advertising_vietnam.png"
import partner_american_study from "../assets/partner_american_study.png"
import partner_edu_event_sponsor from "../assets/partner_edu_event_sponsor.png"
import partner_everjoy from "../assets/partner_everjoy.png"
import partner_hust from "../assets/partner_hust.png"
import partner_lucky_uniform from "../assets/partner_lucky_uniform.png"
import partner_mina from "../assets/partner_mina.png"
import partner_ongbut from "../assets/partner_ongbut.png"
import partner_sami from "../assets/partner_sami.png"
import partner_stem from "../assets/partner_stem.png"
import partner_summit from "../assets/partner_summit.svg"
import partner_vietan from "../assets/partner_vietan.png"
import partner_vinif from "../assets/partner_vinif.png"
import partner_vinuni from "../assets/partner_vinuni.webp"
import partner_ybox from "../assets/partner_ybox.png"
import ConnectUs from "../components/ConnectUs";


function AboutUs() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

    return (
        <div className="about">
          <NavBar onClick={openSidebar}/>
          <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
          <div className='about-banner'>
            <div className='about-slogan'>
              "KHÔNG CÓ LỜI GIẢI TỐT NHẤT, 
              CHỈ CÓ LỜI GIẢI TỐT HƠN"
            </div>
            <div className="transition"></div>
            
          </div>
          <div className="about-intro">
            
            <div className="about-intro-script">
                <span className="about-intro-script-1">CHÚNG TÔI LÀ</span>
                <p style={{textAlign: 'justify'}}><span style={{fontWeight: 'bold'}}>Toán Mô Hình Hà Nội (Hanoi Mathematical Modeling Community)</span> là một tổ chức độc lập, phi lợi nhuận được thành lập và vận hành bởi thanh niên với mục đích kết nối những bạn trẻ có chung niềm đam mê với Toán học Ứng dụng và thông qua các hoạt động nghiên cứu và dự án tự tổ chức, từ đó thúc đẩy sự phát triển của Toán học Ứng dụng tại Việt Nam.</p>
                <p style={{fontWeight: 'bold'}}>TẦM NHÌN</p>
                <p style={{textAlign: 'justify'}}>Trở thành tổ chức về Toán học Ứng dụng uy tín và có sức ảnh hưởng trên quy mô cả nước</p>
                <p style={{fontWeight: 'bold'}}>SỨ MỆNH</p>
                <p style={{textAlign: 'justify'}}>Phát triển Toán học Ứng dụng tại Việt Nam thông qua việc thay đổi tư duy tiếp cận Toán học của học sinh và sinh viên.</p>
                <p style={{fontWeight: 'bold'}}>GIÁ TRỊ CỐT LÕI</p>
                <p className="about-intro-core-value">Innovative • Determined • Gracious</p>
            </div>
            <img src={banner} alt='img' className="about-intro-img" />
          </div>
          <div className="about-achievement">
            <div className="about-achievement-left">
              <p><span style={{fontSize: '3em', margin: '0 0.2em'}}>10</span>năm hoạt động</p>
              <p><span style={{fontSize: '3em', margin: '0 0.2em'}}>50+</span>dự án triển khai</p>
              <p><span style={{fontSize: '3em', margin: '0 0.2em'}}>03</span>giải thưởng lớn</p>
            </div>

            <div className="about-achievement-right">
              <p className="about-achievement-title">THÀNH TÍCH NỔI BẬT</p>
              <p style={{textAlign: 'justify'}}><span style={{fontWeight: 'bold'}}>Toán Mô Hình Hà Nội (Hanoi Mathematical Modeling Community)</span> là một tổ chức độc lập, phi lợi nhuận được thành lập và vận hành bởi thanh niên với mục đích kết nối những bạn trẻ có chung niềm đam mê với Toán học Ứng dụng và thông qua các hoạt động nghiên cứu và dự án tự tổ chức, từ đó thúc đẩy sự phát triển của Toán học Ứng dụng tại Việt Nam.</p>
              <p style={{fontWeight: 'bold'}}>Giải thưởng Dự án Thanh niên Kiến tạo 2021 - CSDS</p>
              <p style={{fontWeight: 'bold'}}>Honorable Mention @ MCM/ICM 2023 - COMAP</p>
              <p style={{fontWeight: 'bold'}}>Outstanding Submission @ SCUDEM 2023 - SIMIODE</p>
            </div>
          </div>
          <div style={{paddingLeft: '3vw', paddingRight: '3vw'}} className="white-background">
            <p className="title">HUMANS OF TOÁN MÔ HÌNH</p>
            <p className="about-human-title">FOUNDERS</p>
            <div className="about-human">
              <Profile />
              <Profile />
              <Profile />
              <Profile />
            </div>
            <p className="about-human-title">HALL OF FAME</p>
            <div className="about-human">
              <Profile />
              <Profile />
              <Profile />
              <Profile />
            </div>
            
          </div>
          <p className="title">ORGANIZATIONAL STRUCTURE</p>
          <p className="about-structure-title">BAN ĐIỀU HÀNH</p>

          <div style={{display: 'grid', textAlign: 'center', gridTemplateColumns: '1fr 1fr 1fr', padding: '0 1vw'}}>
            <div style={{flex: '1'}}>
              <p className="about-structure-title">BAN CHUYÊN MÔN</p>
              <p className="about-structure-content">Mảng Giáo dục</p>
              <p className="about-structure-content">Mảng Nghiên cứu</p>
            </div>
            <div style={{flex: '1'}}>
              <p className="about-structure-title">BAN TRUYỀN THÔNG</p>
              <p className="about-structure-content">Mảng Nội dung</p>
              <p className="about-structure-content">Mảng Kỹ thuật (Media)</p>
            </div>
            <div style={{flex: '1'}}>
              <p className="about-structure-title">BAN SỰ KIỆN</p>
              <p className="about-structure-content">Mảng Hậu cần</p>
              <p className="about-structure-content">Mảng Đối ngoại</p>
            </div>
            
          </div>
          <div className="white-background">
            <p className="title">OUR PARTNERS</p>
            <div className="about-partner">
              <img src={partner_stem} alt='TMH'></img>
              <img src={partner_hust} alt='TMH'></img>
              <img src={partner_sami} alt='TMH'></img>
              <img src={partner_vinuni} alt='TMH'></img>
              <img src={partner_ongbut} alt='TMH'></img>
              <img src={partner_1office} alt='TMH'></img>
              <img src={partner_vinif} alt='TMH'></img>
              <img src={partner_3c} alt='TMH'></img>
              <img src={partner_vietan} alt='TMH'></img>
              <img src={partner_everjoy} alt='TMH'></img>
              <img src={partner_edu_event_sponsor} alt='TMH'></img>
              <img src={partner_lucky_uniform} alt='TMH'></img>
              <img src={partner_mina} alt='TMH'></img>
              <img src={partner_advertising_vietnam} alt='TMH'></img>
              <img src={partner_american_study} alt='TMH'></img>
              <img src={partner_summit} alt='TMH'></img>
              <img src={partner_ybox} alt='TMH'></img>
            </div>
            <ConnectUs />
          </div>
          
          
      </div>
    )
}

export default AboutUs