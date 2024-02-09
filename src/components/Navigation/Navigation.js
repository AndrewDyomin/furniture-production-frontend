import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';
import logo from '../../images/logo black.png'

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const isMobile = useMediaQuery({ query: '(max-width: 833px)' });

  return (
    <nav className={css.navBlock}>
      <NavLink className={css.link} to="/">
        <img src={logo} alt='logo' className={css.logo}/>
      </NavLink>
      {isLoggedIn && !isMobile && (
        <>
          <NavLink className={css.link} to="/orders">
            Orders
          </NavLink>
          <NavLink className={css.link} to="/products">
            All products
          </NavLink>
        </>
      )}
    </nav>
  );
};