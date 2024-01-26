import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import css from './AuthNav.module.css';

export const AuthNav = ({ close }) => {

  const isMobile = useMediaQuery({ query: '(max-width: 833px)' });

  return (
    <div className={isMobile ? css.mobileLinkBlock : css.linkBlock}>
      <NavLink className={css.link} to="/register" onClick={close}>
        Register
      </NavLink>
      <NavLink className={css.link} to="/login" onClick={close}>
        Log In
      </NavLink>
    </div>
  );
};
