import NavBar from "../components/NavBar";
import banner from '../assets/avatar.jpg';
import logo from '../assets/logoTMH-01.png';
import Profile from "../components/Profile";


function AboutUs() {

    return (
        <div className="about">
          <NavBar />
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
          <p className="about-structure-content">Chức năng/Nhiệm vụ</p>
          <div style={{display: 'flex', textAlign: 'center'}}>
            <div style={{flex: '1'}}>
              <p className="about-structure-title">BAN CHUYÊN MÔN</p>
              <p className="about-structure-content">Chức năng/Nhiệm vụ</p>
            </div>
            <div style={{flex: '1'}}>
              <p className="about-structure-title">BAN TRUYỀN THÔNG</p>
              <p className="about-structure-content">Chức năng/Nhiệm vụ</p>
            </div>
            <div style={{flex: '1'}}>
              <p className="about-structure-title">BAN ĐỐI NGOẠI</p>
              <p className="about-structure-content">Chức năng/Nhiệm vụ</p>
            </div>
            <div style={{flex: '1'}}>
              <p className="about-structure-title">BAN SỰ KIỆN</p>
              <p className="about-structure-content">Chức năng/Nhiệm vụ</p>
            </div>
            
          </div>
          <div className="white-background">
            <p className="title">OUR PARTNERS</p>
            <div className="about-partner">
              <img src={logo} alt='TMH'></img>
              <img src={logo} alt='TMH'></img>
              <img src={logo} alt='TMH'></img>
              <img src={logo} alt='TMH'></img>
              <img src={logo} alt='TMH'></img>
              <img src={logo} alt='TMH'></img>
              <img src={logo} alt='TMH'></img>
              <img src={logo} alt='TMH'></img>
              <img src={logo} alt='TMH'></img>
              <img src={logo} alt='TMH'></img>
              <img src={logo} alt='TMH'></img>
              <img src={logo} alt='TMH'></img>
              <img src={logo} alt='TMH'></img>
              <img src={logo} alt='TMH'></img>
              <img src={logo} alt='TMH'></img>
              <img src={logo} alt='TMH'></img>
              <img src={logo} alt='TMH'></img>
            </div>
            <p className="connect">CONNECT US VIA</p>
            <div className="copyright">
              <p>COPYRIGHT (C) 2021 TOANMOHINHVN.COM ALL RIGHT RESERVED</p>
            </div>
          </div>
          
      </div>
    )
}

export default AboutUs