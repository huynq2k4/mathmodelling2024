import { Link } from 'react-router-dom';

function Sidebar({ isOpen, closeSidebar }: {isOpen: boolean, closeSidebar: any}) {
    return (
        <>
        <div className={`sidebar ${isOpen ? 'active' : ''}`}>
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
          <li className='sidebar-item'>ABOUT US</li>
        </Link>
        
        
      </ul>
      
        </div>
        {isOpen && <div className="overlay" onClick={closeSidebar}></div>}
        </>
    )
}

export default Sidebar