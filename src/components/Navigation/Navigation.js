import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const isMobile = useMediaQuery({ query: '(max-width: 833px)' });

  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && !isMobile && (
        <NavLink className={css.link} to="/orders">
          Orders
        </NavLink>
      )}
    </nav>
  );
};