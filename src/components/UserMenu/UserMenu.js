import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from 'hooks';
import { useTranslation } from 'react-i18next';
import css from './UserMenu.module.css';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector';

export const UserMenu = ({ close }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useAuth();
  const isMobile = useMediaQuery({ query: '(max-width: 833px)' });

  return (
    <div className={isMobile ? css.mobileWrapper : css.wrapper}>
      <p className={css.username}>{user.email}</p>
      {isLoggedIn && isMobile && (
        <div className={css.mobileMenuLinks}>
          <Link className={css.link} to="/orders" onClick={close}>
            {t('orders')}
          </Link>
          <Link className={css.link} to="/products" onClick={close}>
            {t('all products')}
          </Link>
          {user.description === "administrator" && (
            <Link className={css.link} to="/room" onClick={close}>{t('my room')}</Link>
          )}
        </div>
      )}
      <div className={isMobile ? css.propMob : css.prop}>
        <LanguageSelector />
        <button type="button" onClick={() => dispatch(logOut())} >
        {t('logout')}
      </button>
      </div>
    </div>
  );
};