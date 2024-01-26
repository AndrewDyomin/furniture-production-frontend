import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import css from './AuthNav.module.css';

export const AuthNav = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 833px)' });

  return (
    <div>
      <NavLink className={isMobile ? css.mobileLink : css.link} to="/register">
        Register
      </NavLink>
      <NavLink className={isMobile ? css.mobileLink : css.link} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
