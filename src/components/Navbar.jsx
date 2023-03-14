import { useNavigate } from 'react-router';
import logo from '../assets/images/logo.jpg';
import NavLink from './NavLink';

const Navbar = () => {
  const nav = useNavigate();

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
        <a href='' className='nav-btn-in' onClick={() => nav('/signin/')}>
          SING IN
        </a>
        <a href='#registration' className='nav-btn-up'>
          SING UP
        </a>
      </div>
    </section>
  );
};

export default Navbar;
