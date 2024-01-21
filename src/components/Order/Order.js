// import { useDispatch } from 'react-redux';
import css from './Order.module.css';

export const Order = ({ name, number, dealer, plannedDeadline }) => {

  return (
    <div className={css.wrapper}>
      <p className={css.number}>{number}</p>
      <div className={css.discription}>
        <p>{name}</p>
        <p>{Date.parse(plannedDeadline)}</p>
        <p>{dealer}</p>
      </div>
    </div>
  );
};