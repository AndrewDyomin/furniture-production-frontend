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
  let wrapperClassName = css.wrapper;

  if (order.fabricStatus === 'ordered') {
    fabricClassName = `${css.orderFabric} ${css.backgroundBlue}`
  } else if (order.fabricStatus === 'received') {
    fabricClassName = `${css.orderFabric} ${css.backgroundGreen}`
  }

  if (order.orderStatus === 'TRUE') {
    wrapperClassName = `${css.wrapper} ${css.done}`;
  } else if (order.coverStatus === 'TRUE' && order.frameStatus === 'TRUE') {
    wrapperClassName = `${css.wrapper} ${css.twoPart}`;
  } else if (order.coverStatus === 'TRUE' || order.frameStatus === 'TRUE') {
    wrapperClassName = `${css.wrapper} ${css.onePart}`;
  }  

  return (
    <div className={wrapperClassName}>
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