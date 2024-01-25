import css from './OrderInfo.module.css';
import { useSelector } from 'react-redux';
import { selectActiveOrder } from '../../redux/orders/selectors';

export const OrderInfo = ({ id }) => {

  const order = useSelector(selectActiveOrder);
  const date = new Date(order.plannedDeadline);

  return (
    <div className={css.wrapper}>
      <p className={css.orderNumber}>{order.number}</p>
      <div className={css.description}>
        <p className={css.orderName}>{order.group} {order.name}</p>
        <p className={css.orderSize}>{order.size}</p>
        <p className={css.orderFabric}>{order.fabric}</p>
        <p>{order.description}</p>
        <p>{`${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`}</p>
        <p>{order.dealer}</p>
        <p className={css.orderAdress}>Adress: {order.adress}</p>
        <p className={css.orderRest}>Rest: {order.rest}</p>
      </div>
    </div>
  );
};