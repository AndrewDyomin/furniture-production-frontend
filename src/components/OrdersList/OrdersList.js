import { useSelector } from 'react-redux';
import { Order } from '../Order/Order';
import { selectAllOrders } from '../../redux/orders/selectors';
import css from './OrdersList.module.css';

export const OrdersList = () => {
  const orders = useSelector(selectAllOrders);

  console.log(orders.allOrdersArray)

  return (
    <div className={css.container}>
        {orders.length !== 0 ? 
            <ul className={css.list}>
                {orders.allOrdersArray.map(({ size, name, number, dealer }) => (
                <li key={`${name}${size}${number}`} className={css.item}>
                <Order  
                 name={name}
                 number={number}
                 dealer={dealer} />
                </li>
            ))}
            </ul> : 
            <p>Orders is not loaded</p>
        }
    </div >
  );
};