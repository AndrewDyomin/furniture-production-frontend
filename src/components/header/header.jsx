import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom/dist';
import { useAuth } from '../../hooks/useAuth';

export const Header = () => {
  const { user, isLoggedIn } = useAuth();
  // const firstLetter = user.email = null ? user.email[0].toUpperCase() : '';
  console.log(isLoggedIn);

//   const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 834px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 833px)' });

  return (
    <>
      <header>
        <div className="container">
          <NavLink to="/">Misage</NavLink>
          {isLoggedIn && isMobile && <button>menu</button>}
          {isLoggedIn && 
            <div >
                <p>{user.email}</p>
                <img src={user.avatarURL} alt={"user's avatar"}></img>
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