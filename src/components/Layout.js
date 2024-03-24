import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Footer } from './Footer/Footer';
import css from './Layout.module.css'

export const Layout = () => {
  return (
    // <div style={{ maxWidth: 960, margin: '0 auto', padding: '0' }}>
    <div className={css.layout}>
      <AppBar className={css.header}/>
      <div className={css.main}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
      <Footer className={css.footer}/>
    </div>
  );
};
