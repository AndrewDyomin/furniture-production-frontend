import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { Order } from '../Order/Order';
import { selectAllOrders } from '../../redux/orders/selectors';
import { setActiveOrder } from '../../redux/orders/operations';
import css from './OrdersList.module.css';

export const OrdersList = () => {
  const dispatch = useDispatch();
  const orders = useSelector(selectAllOrders);

  return (
    <div className={css.container}>
        {orders.length !== 0 ? 
            <ul className={css.list}>
                {orders.allOrdersArray.map(({ _id }) => (
                <li key={_id} className={css.item}>
                  <Link to={`${_id}`} 
                    className={css.orderLink} 
                    onClick={() => dispatch(setActiveOrder(orders.allOrdersArray.find((el) => {return(el._id === _id)})))}>
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