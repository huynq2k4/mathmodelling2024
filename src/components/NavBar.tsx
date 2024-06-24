import { Link } from 'react-router-dom';
import logo from '../assets/logoTMH-01.png';

function NavBar({onClick}) {
  return (
    <div className='navbar'>
      <Link to='/'>
        <img src={logo} alt='TMH' className='navbar-logo'></img>
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
      <button className='navbar-tribar' onClick={onClick}>≡</button>
    </div>
  );
}

export default NavBar;