import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return `${css.link} ${isActive ? css.active : ''}`;
  };
  return (
    <nav className={css.nav}>
      <NavLink className={buildLinkClass} to='/'>
        Home
      </NavLink>
      <NavLink className={buildLinkClass} to='/catalog'>
        Catalog
      </NavLink>
    </nav>
  );
};
export default Navigation;
