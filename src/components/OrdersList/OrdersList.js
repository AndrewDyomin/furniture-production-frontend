import { useSelector } from 'react-redux';
import { Order } from '../Order/Order';
import { selectAllOrders } from '../../redux/orders/selectors';
import css from './OrdersList.module.css';

export const OrdersList = () => {
  const orders = useSelector(selectAllOrders);

  return (
    <>
        {orders.length !== 0 ? 
            <ul className={css.list}>
                {orders.orders.map(({ name, number }) => (
                <li key={number}>
                <Order  
                 name={name} />
                </li>
            ))}
            </ul> : 
            <p>Orders is not loaded</p>
        }
    </>
  );
};