import css from './OrderInfo.module.css';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectActiveOrder } from '../../redux/orders/selectors';
import { selectUser } from '../../redux/auth/selectors'

export const OrderInfo = ({ id }) => {

  const { t } = useTranslation();
  const order = useSelector(selectActiveOrder);
  const user = useSelector(selectUser);

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
        {user.description === 'seamstress' || user.description === 'carpenter' || user.description === 'upholsterer' ? <></> : 
        <div>
          <p className={css.orderAdress}>{t('adress')}: {order.adress}</p>
          <p className={css.orderRest}>{t('rest')}: {order.rest}</p> 
        </div>
        }
      </div>
      {order.images && order.images.length !== 0 ? 
      <ul className={css.imagesList}>
        {order.images.map((imageId) => (
          <li key={`${imageId}`}>
            <img className={css.orderImage} src={`https://lh3.googleusercontent.com/d/${imageId}=w800?authuser=0`} alt={imageId}/>
            {/* <img src={`https://drive.google.com/thumbnail?id=${imageId}&sz=w800`} alt={imageId}/> */}
          </li>
        ))}
      </ul> 
      : <></>}
    </div>
  );
};