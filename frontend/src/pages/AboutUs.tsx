import NavBar from "../components/NavBar";
// import './AboutUs.css'

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
                <p style={{textAlign: 'justify'}}>Innovative • Determined • Gracious</p>
            </div>
            <img src='../src/images/avatar.jpg' alt='img' className="about-intro-img" />
          </div>
          <div className="about-achievement">
            <div className="about-achievement-left"></div>
            <div className="about-achievement-right"></div>
          </div>
      </div>
    )
}

export default AboutUs