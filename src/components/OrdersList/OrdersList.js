import { useSelector, useDispatch } from 'react-redux';
import PulseLoader from "react-spinners/PulseLoader";
import { Link } from "react-router-dom";
import { Order } from '../Order/Order';
import { selectAllOrders } from '../../redux/orders/selectors';
import { setActiveOrder } from '../../redux/orders/operations';
import css from './OrdersList.module.css';
import { useState } from 'react';
import Select from 'react-select';

export const OrdersList = () => {

  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();
  const orders = useSelector(selectAllOrders);
  let dealerNames = [];
  const filteredOrders = orders;

  if (orders.allOrdersArray) {
    orders.allOrdersArray.forEach((order, index) => {
      dealerNames.push({value: `${order.dealer}`, label: `${order.dealer}`})
      console.log(filters)
    })
  }

  let filters = Array.from(new Set(dealerNames));

  return (
    <div className={css.container}>
      <Select
          className={css.filter}
          name="filter" 
          id="filter"
          onChange={e => setFilter(e)}
          options={filters}
          defaultValue={filter}
          placeholder='Filter'>
      </Select>
      {filteredOrders.length !== 0 ? 
          <ul className={css.list}>
              {filteredOrders.allOrdersArray.map(({ _id }) => (
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
          <PulseLoader 
            color="#c8c19b"
            cssOverride={{
              position: 'absolute',
              top: '20%',
              left: '45%'
            }}
          />
      }
    </div >
  );
};