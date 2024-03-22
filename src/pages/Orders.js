import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { fetchAllOrders } from '../redux/orders/operations';
import { OrdersList } from '../components/OrdersList/OrdersList';

export default function Orders() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllOrders());
  }, [dispatch]);

  return (
    <>
      <HelmetProvider>
          <Helmet>
              <title>Your orders</title>
          </Helmet>
          <OrdersList />
      </HelmetProvider>
    </>
  );
}