import { Helmet, HelmetProvider } from 'react-helmet-async';
import { CollectionEditor } from '../components/CollectionEditor/CollectionEditor';
import { ComponentList } from '../components/ComponentList/ComponentList';
import { MaterialsPlanner } from '../components/MaterialsPlanner/MaterialsPlanner';
import { fetchAllComponents } from '../redux/components/operations';
import { fetchAllOrders } from '../redux/orders/operations';
import { fetchAllProducts } from '../redux/products/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { UsersManager } from '../components/UsersManager/UsersManager';
import { getAllUsers } from '../redux/user/operations';

export default function MyRoom() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllComponents());
    toast.success('All components fetch requested');
    dispatch(fetchAllOrders());
    toast.success('All orders fetch requested');
    dispatch(fetchAllProducts());
    toast.success('All products fetch requested');
    dispatch(getAllUsers());
    toast.success('All users fetch requested');
  }, [dispatch]);

  return (
    <>
      <HelmetProvider>
          <Helmet>
              <title>My room</title>
          </Helmet>
          <h1>It's your private room</h1>
          <CollectionEditor />
          <ComponentList />
          <MaterialsPlanner />
          <UsersManager/>
      </HelmetProvider>
    </>
  );
}