import css from './Order.module.css';
import { useSelector } from 'react-redux';
import { selectAllOrders } from '../../redux/orders/selectors';
import { selectUser } from '../../redux/auth/selectors';

export const Order = ({ id }) => {

  const orders = useSelector(selectAllOrders);
  const order = orders.allOrdersArray.find((el) => {return(el._id === id)});
  const date = new Date(order.plannedDeadline);
  const user = useSelector(selectUser);
  let fabricClassName = css.orderFabric;

  if (order.fabricStatus === 'ordered') {
    fabricClassName = `${css.orderFabric} ${css.backgroundBlue}`
  } else if (order.fabricStatus === 'received') {
    fabricClassName = `${css.orderFabric} ${css.backgroundGreen}`
  }

  return (
    <div className={css.wrapper}>
      <p className={css.number}>{order.number}</p>
      <div className={css.discription}>
        <p className={css.orderName}>{order.name}</p>
        {user.description === 'administrator' || user.description === 'seamstress' ? 
        <p className={fabricClassName}>{order.fabric}</p> : <></>}
        <p className={css.orderDeadline}>{`${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`}</p>
        <p className={css.orderDealer}>{order.dealer}</p>
      </div>
    </div>
  );
};