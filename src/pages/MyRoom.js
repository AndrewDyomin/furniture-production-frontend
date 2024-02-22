import { Helmet, HelmetProvider } from 'react-helmet-async';
import { CollectionEditor } from '../components/CollectionEditor/CollectionEditor';
import { ComponentList } from '../components/ComponentList/ComponentList';
import { OrderEditor } from '../components/OrderEditor/OrderEditor';

export default function MyRoom() {

  return (
    <>
      <HelmetProvider>
          <Helmet>
              <title>My room</title>
          </Helmet>
          <h1>It's your private room</h1>
          <CollectionEditor />
          <ComponentList />
          <OrderEditor />
      </HelmetProvider>
    </>
  );
}