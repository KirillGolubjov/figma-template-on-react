import { navLinks } from '../data/data';

const NavLink = () => {
  return (
    <>
      {navLinks.map((link) => {
        const { id, name } = link;
        return (
          <li key={id}>
            <a href=''>{name}</a>
          </li>
        );
      })}
    </>
  );
};

export default NavLink;
