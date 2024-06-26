import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { useTranslation } from 'react-i18next';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        {t('name')}
        <input type="name" name="name" />
      </label>
      <label className={css.label}>
      {t('email')}
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
      {t('password')}
        <input type="password" name="password" />
      </label>
      <button type="submit" className={css.btn}>{t('register')}</button>
    </form>
  );
};
