import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { fetchMebtownOrders } from '../redux/orders/operations';
import { selectLoading } from '../redux/orders/selectors';
import { OrdersList } from '../components/OrdersList/OrdersList';

export default function Orders() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchMebtownOrders());
  }, [dispatch]);

  return (
    <>
    <HelmetProvider>
        <Helmet>
            <title>Your orders</title>
        </Helmet>
        <div>{isLoading && 'Request in progress...'}</div>
        <OrdersList />
    </HelmetProvider>

    </>
  );
}