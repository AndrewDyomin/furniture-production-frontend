import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { selectLoading } from '../redux/orders/selectors';
import { DruftInfo } from '../components/DruftInfo/DruftInfo';

export default function Drufts() {
  const isLoading = useSelector(selectLoading);
  const { druftId } = useParams();

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Druft details</title>
        </Helmet>
        <div>{isLoading && 'Request in progress...'}</div>
        <DruftInfo id={druftId} />
      </HelmetProvider>
    </>
  );
}
