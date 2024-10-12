import Navigation from '../Navigation/Navigation';
import css from './Header.module.css';
import logo from '../../../public/logo.svg';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.logoContainer}>
      <img src={logo} alt="TravelTrucks Logo" className={css.logo} />
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
