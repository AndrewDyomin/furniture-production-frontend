import css from './Order.module.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { useMediaQuery } from 'react-responsive';
import { useHref } from 'react-router-dom';

export const Order = ({ order }) => {
  const date = new Date(order.plannedDeadline) || '';
  const user = useSelector(selectUser);
  const isMobile = useMediaQuery({ query: '(max-width: 833px)' });
  let isArchive = false;
  let fabricClassName = css.orderFabric;
  let wrapperClassName = css.wrapper;
  const orderStatus = order.orderStatus && order.orderStatus !== 'TRUE' ? JSON.parse(order.orderStatus).status : order.orderStatus === 'TRUE' ? 'TRUE' : '';

  const url = useHref();
  if (url === '/furniture-production-frontend/archive') {
    isArchive = true;
  }

  if (order.fabricStatus === 'ordered') {
    fabricClassName = `${css.orderFabric} ${css.backgroundBlue}`;
  } else if (order.fabricStatus === 'received') {
    fabricClassName = `${css.orderFabric} ${css.backgroundGreen}`;
  }

  if (orderStatus === 'TRUE') {
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
        <p className={css.orderName}>
          {!isMobile && order.group} {order.name}
        </p>
        {user.description === 'administrator' ||
        user.description === 'seamstress' ? (
          <p className={fabricClassName}>{order.fabric}</p>
        ) : (
          <></>
        )}
        {isMobile && (
          <p className={css.orderDeadline}>{`${date.getDate()}.${
            date.getMonth() + 1
          }.${date.getFullYear()}`}</p>
        )}
        {isArchive && (
          <div>
            <p>{order.size}</p>
            <p>{order.innerPrice}грн.</p>
          </div>
        )}
        {!isArchive && <p className={css.orderDealer}>{order.dealer}</p>}
      </div>
    </div>
  );
};
