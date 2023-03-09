import logo from '../assets/images/logo.jpg';
import NavLink from './NavLink';

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
        <a href='' className='nav-btn-in'>
          SING IN
        </a>
        <a href='' className='nav-btn-up'>
          SING UP
        </a>
      </div>
    </section>
  );
};

export default Navbar;
