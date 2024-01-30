import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { fetchAllProducts } from '../redux/products/operations';
import { selectLoading } from '../redux/orders/selectors';
import { ProductsList } from '../components/OurProducts/ProductList/ProductList';

export default function Products () {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <>
    <HelmetProvider>
        <Helmet>
            <title>Our products</title>
        </Helmet>
        <div>{isLoading && 'Request in progress...'}</div>
        <ProductsList />
    </HelmetProvider>

    </>
  );
}