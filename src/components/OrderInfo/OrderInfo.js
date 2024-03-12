import css from './OrderInfo.module.css';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectActiveOrder } from '../../redux/orders/selectors';

export const OrderInfo = ({ id }) => {

  const { t } = useTranslation();
  const order = useSelector(selectActiveOrder);
  const date = new Date(order.plannedDeadline);

  return (
    <div className={css.wrapper}>
      <p className={css.orderNumber}>{order.number}</p>
      <div className={css.description}>
        <p className={css.orderName}>{order.group} {order.name}</p>
        <p className={css.orderSize}>{t('size')}: {order.size}</p>
        <p className={css.orderFabric}>{t('fabric')}: {order.fabric}</p>
        <p className={css.orderDescription}>{t('description')}: {order.description}</p>
        <p className={css.orderDeadline}>{t('deadline')}: {`${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`}</p>
        <p>{order.dealer}</p>
        <p className={css.orderAdress}>{t('adress')}: {order.adress}</p>
        <p className={css.orderRest}>{t('rest')}: {order.rest}</p>
      </div>
      {order.images || order.images.length !== 0 ? 
      <ul>
        {order.images.map((imageId) => (
          <li key={imageId}>
            <img src={`https://drive.google.com/thumbnail?id=${imageId}&sz=w1000`} alt={imageId}/>
          </li>
        ))}
      </ul> 
      : <></>}
    </div>
  );
};