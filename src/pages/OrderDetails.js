import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { selectLoading } from '../redux/orders/selectors';
import { OrderInfo } from '../components/OrderInfo/OrderInfo';

export default function Orders() {
  const isLoading = useSelector(selectLoading);
  const { orderId } = useParams();

  return (
    <>
    <HelmetProvider>
        <Helmet>
            <title>Order details</title>
        </Helmet>
        <div>{isLoading && 'Request in progress...'}</div>
        <OrderInfo id={orderId}/>
    </HelmetProvider>

    </>
  );
}