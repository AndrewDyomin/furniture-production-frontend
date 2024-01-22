import css from './Order.module.css';

export const Order = ({ name, number, dealer, plannedDeadline }) => {

  const date = new Date(plannedDeadline);

  return (
    <div className={css.wrapper}>
      <p className={css.number}>{number}</p>
      <div className={css.discription}>
        <p>{name}</p>
        <p>{`${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`}</p>
        <p>{dealer}</p>
      </div>
    </div>
  );
};