import { NavLink } from 'react-router-dom';
import css from './ReviewHeader.module.css';
import iconSprite from '../../assets/sprite.svg';

const ReviewHeader = () => {
  return (
    <>
      <nav className={css.nav}>
        <NavLink
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.activeLink : ''}`
          }
          to='features'>
          Features
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.activeLink : ''}`
          }
          to='reviews'>
          Reviews
        </NavLink>
      </nav>
      <svg width='100%' height='2' className={css.line}>
        <use href={`${iconSprite}#line`}></use>
      </svg>
    </>
  );
};

export default ReviewHeader;
