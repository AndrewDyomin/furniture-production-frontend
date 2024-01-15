import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Header } from "./header/header";
import { refreshUser } from '../redux/auth/operations';

export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        React template
      </div>
    </>

  );
};
