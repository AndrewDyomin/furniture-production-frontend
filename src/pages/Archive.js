import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { fetchArchivedOrders, setActiveOrder } from '../redux/orders/operations';
import { ArchiveList } from '../components/ArchiveList/ArchiveList';

export default function Archive() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveOrder({}));
    dispatch(fetchArchivedOrders())
  }, [dispatch]);

  return (
    <>
      <HelmetProvider>
          <Helmet>
              <title>Archive</title>
          </Helmet>
          <ArchiveList />
      </HelmetProvider>
    </>
  );
}