import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { Order } from '../Order/Order';
import { selectAllOrders } from '../../redux/orders/selectors';
import css from './OrdersList.module.css';

export const OrdersList = () => {
  const orders = useSelector(selectAllOrders);

  return (
    <div className={css.container}>
        {orders.length !== 0 ? 
            <ul className={css.list}>
                {orders.allOrdersArray.map(({ _id }) => (
                <li key={_id} className={css.item}>
                  <Link to={`${_id}`}>
                    <Order  
                    id={_id} />
                  </Link>
                </li>
            ))}
            </ul> : 
            <p>Orders is not loaded</p>
        }
    </div >
  );
};