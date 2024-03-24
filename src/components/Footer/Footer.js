import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useAuth } from 'hooks';
import css from './Footer.module.css';
import logo from '../../images/logo black.png'

export const Footer = () => {
  const { isLoggedIn } = useAuth();
  const isMobile = useMediaQuery({ query: '(max-width: 833px)' });

  return (
    <nav className={css.navBlock}>
      {isLoggedIn && !isMobile && (
        <div>
            <NavLink className={css.link} to="/orders">
            Orders
            </NavLink>
        </div>
      )}
      <NavLink className={css.link} to="/">
        <img src={logo} alt='logo' className={css.logo}/>
      </NavLink>
      <p>Misazh Company</p>
    </nav>
  );
};