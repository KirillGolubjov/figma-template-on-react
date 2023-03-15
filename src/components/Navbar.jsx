import logo from '../assets/images/logo.jpg';
import NavLink from './NavLink';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <section className='navbar'>
      <div className='navbar-logo'>
        <img src={logo} className='logo' />
      </div>
      <div className='nav-links'>
        <ul className='ul-nav-links'>
          <NavLink />
        </ul>
      </div>
      <div className='nav-btn'>
        <Link to='/signin/' className='nav-btn-in'>
          SING IN
        </Link>
        <Link to='/register/' className='nav-btn-up'>
          SING UP
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
