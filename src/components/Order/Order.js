// import { useDispatch } from 'react-redux';
import css from './Order.module.css';

export const Order = ({ name }) => {

  return (
    <div className={css.wrapper}>
      <p className={css.name}>{name}</p>
    </div>
  );
};