import css from './OrderInfo.module.css';
import { useSelector } from 'react-redux';
import { selectAllOrders } from '../../redux/orders/selectors';

export const OrderInfo = ({ id }) => {

  const orders = useSelector(selectAllOrders);
  const order = orders.allOrdersArray.find((el) => {return(el._id === id)});
  const date = new Date(order.plannedDeadline);
  console.log(order)

  return (
    <div className={css.wrapper}>
      <p className={css.number}>{order.number}</p>
      <div className={css.description}>
        <p>{order.name}</p>
        <p>{order.fabric}</p>
        <p>{order.description}</p>
        <p>{`${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`}</p>
        <p>{order.dealer}</p>
      </div>
    </div>
  );
};