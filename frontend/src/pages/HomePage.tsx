import NavBar from "../components/NavBar";

function HomePage() {
    return (
        <div className="content">
          <NavBar />
          <div className='homepage-avatar'>
            <div className='homepage-competition'>
              
              <p className="homepage-competition-name">THE 2024 MATHEMATICAL MODELING COMPETITION</p>
              <p className="homepage-competition-content">MATHEMATICAL MODELING IN HEALTHCARE SCIENCE</p>
              <button className="homepage-signup">SIGN UP NOW</button>
            </div>
            <div className="transition"></div>
            
          </div>
          <div className="homepage-introduction">
            <p className="homepage-title">HANOI MATHEMATICAL MODELING COMMUNITY</p>
            <p className="homepage-introduction-content">Something about TMH</p>
          </div>
          <p className="homepage-title">WHAT MAKES US UNIQUE</p>
          <div className="homepage-unique">
          
              <div className="homepage-usp">
                <img src='./src/images/default.jpg' alt='TMH' className="homepage-usp-img"></img>
                <p className="homepage-usp-content">USP1</p>
              </div>
              <div className="homepage-usp">
                <img src='./src/images/default.jpg' alt='TMH' className="homepage-usp-img"></img>
                <p className="homepage-usp-content">USP2</p>
              </div>
              <div className="homepage-usp">
                <img src='./src/images/default.jpg' alt='TMH' className="homepage-usp-img"></img>
                <p className="homepage-usp-content">USP3</p>
              </div>
          </div>

          <p className="homepage-title">FEATURE NEWS</p>
          <div className="homepage-news">
          
              <div className="homepage-news-component">
                <img src='./src/images/default.jpg' alt='TMH' className="homepage-news-img"></img>
                <p className="homepage-news-title">News title 1</p>
              </div>
              <div className="homepage-news-component">
                <img src='./src/images/default.jpg' alt='TMH' className="homepage-news-img"></img>
                <p className="homepage-news-title">News title 2</p>
              </div>
              <div className="homepage-news-component">
                <img src='./src/images/default.jpg' alt='TMH' className="homepage-news-img"></img>
                <p className="homepage-news-title">News title 3</p>
              </div>
          </div>
          <div className="white-background">
          <p className="white-background homepage-title homepage-network">OUR NETWORKS</p>
          <img src='../src/images/avatar.jpg' alt='TMH' className="homepage-network-flag"></img>
          <div className="white-background homepage-network-img">
            <img src='../src/images/logoTMH-01.png' alt='TMH'></img>
            <img src='../src/images/logoTMH-01.png' alt='TMH'></img>
            <img src='../src/images/logoTMH-01.png' alt='TMH'></img>
            <img src='../src/images/logoTMH-01.png' alt='TMH'></img>
            <img src='../src/images/logoTMH-01.png' alt='TMH'></img>
            <img src='../src/images/logoTMH-01.png' alt='TMH'></img>
            <img src='../src/images/logoTMH-01.png' alt='TMH'></img>
            <img src='../src/images/logoTMH-01.png' alt='TMH'></img>
            <img src='../src/images/logoTMH-01.png' alt='TMH'></img>
            <img src='../src/images/logoTMH-01.png' alt='TMH'></img>
            <img src='../src/images/logoTMH-01.png' alt='TMH'></img>
            <img src='../src/images/logoTMH-01.png' alt='TMH'></img>
            <img src='../src/images/logoTMH-01.png' alt='TMH'></img>
            <img src='../src/images/logoTMH-01.png' alt='TMH'></img>
            <img src='../src/images/logoTMH-01.png' alt='TMH'></img>
            <img src='../src/images/logoTMH-01.png' alt='TMH'></img>
            <img src='../src/images/logoTMH-01.png' alt='TMH'></img>
            <img src='../src/images/logoTMH-01.png' alt='TMH'></img>
            <img src='../src/images/logoTMH-01.png' alt='TMH'></img>
            <img src='../src/images/logoTMH-01.png' alt='TMH'></img>
            <img src='../src/images/logoTMH-01.png' alt='TMH'></img>
            <img src='../src/images/logoTMH-01.png' alt='TMH'></img>
            <img src='../src/images/logoTMH-01.png' alt='TMH'></img>
            <img src='../src/images/logoTMH-01.png' alt='TMH'></img>
            <img src='../src/images/logoTMH-01.png' alt='TMH'></img>
            <img src='../src/images/logoTMH-01.png' alt='TMH'></img>
            <img src='../src/images/logoTMH-01.png' alt='TMH'></img>
            <img src='../src/images/logoTMH-01.png' alt='TMH'></img>
            <img src='../src/images/logoTMH-01.png' alt='TMH'></img>
            <img src='../src/images/logoTMH-01.png' alt='TMH'></img>
          </div>
          <p className="homepage-connect">CONNECT US VIA</p>
          <div className="copyright">
            <p>COPYRIGHT (C) 2021 TOANMOHINHVN.COM ALL RIGHT RESERVED</p>
          </div>
          

          </div>
          

      </div>
    )
}

export default HomePage