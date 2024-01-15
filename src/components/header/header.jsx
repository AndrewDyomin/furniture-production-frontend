import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom/dist';
import { useAuth } from '../../hooks/useAuth';

export const Header = () => {
  const { isLoggedIn } = useAuth();

//   const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 834px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 833px)' });

  return (
    <>
      <header>
        <div className="container">
          <NavLink to="/">Misage</NavLink>
          {isLoggedIn && isMobile && <HeaderMobMenuBtn />}
          {isLoggedIn && 
          <div >
                <p>{user.email}</p>
                {user.avatarURL.includes('www.gravatar.com') ? (
                <div>{firstLetter}</div>
                ) : (
                <img src={user.avatarURL}></img>
                )}
            </div>}
          {!isLoggedIn &&     
          <div>
                <NavLink to="/signin">Sign in</NavLink>
                {'/'}
                <NavLink to="/signup">Sign up</NavLink>
            </div>}
        </div>
      </header>
    </>
  );
};