import css from './Loading.module.css';
import logo from '../../images/logo black.png'

export const Loading = () => {

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <img className={css.logo} src={logo} alt='Misazh Company'/>
        <div className={css.shine}></div>
      </div>
    </div>
  );
};