import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar">
            <ul className='sidebar-link'>
        <Link to='/'>
          <li className='sidebar-item'>HOME</li>
        </Link>
        <Link to='/events'>
          <li className='sidebar-item'>EVENTS</li>
        </Link>
        <Link to='/blog'>
          <li className='sidebar-item'>BLOG</li>
        </Link>
        <Link to='/about'>
          <li className='sidebar-item sidebar-end'>ABOUT US</li>
        </Link>
        
        
      </ul>
        </div>
    )
}

export default Sidebar