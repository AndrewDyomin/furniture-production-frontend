import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function MyRoom() {

  return (
    <>
    <HelmetProvider>
        <Helmet>
            <title>Your orders</title>
        </Helmet>
        <></>
    </HelmetProvider>

    </>
  );
}