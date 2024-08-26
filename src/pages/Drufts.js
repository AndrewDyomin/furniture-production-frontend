import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { fetchAllOrders, setActiveOrder } from '../redux/orders/operations';
import { Drufts } from '../components/Drufts/Drufts';

export default function Orders() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveOrder({}));
    dispatch(fetchAllOrders());
  }, [dispatch]);

  return (
    <>
      <HelmetProvider>
          <Helmet>
              <title>My drufts</title>
          </Helmet>
          <Drufts />
      </HelmetProvider>
    </>
  );
}