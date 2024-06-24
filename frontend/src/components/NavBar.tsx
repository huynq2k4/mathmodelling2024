import { Link } from 'react-router-dom';
// import './NavBar.css';
import React from 'react'

const useViewport = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { width };
};

function NavBar() {
  return (
    <div className='navbar'>
      <Link to='/'>
        <img src='../src/images/logoTMH-01.png' alt='TMH' className='navbar-logo'></img>
      </Link>
        <div className='navbar-name'>TOÁN MÔ HÌNH HÀ NỘI</div>
      
      <ul className='navbar-link'>
        <Link to='/'>
          <li className='navbar-item'>HOME</li>
        </Link>
        <Link to='/events'>
          <li className='navbar-item'>EVENTS</li>
        </Link>
        <Link to='/blog'>
          <li className='navbar-item'>BLOG</li>
        </Link>
        <Link to='/about'>
          <li className='navbar-item navbar-end'>ABOUT US</li>
        </Link>
        
      </ul>
    </div>
  );
}

export default NavBar;