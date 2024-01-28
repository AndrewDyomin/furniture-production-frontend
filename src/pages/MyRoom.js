import { Helmet, HelmetProvider } from 'react-helmet-async';
import { CollectionEditor } from '../components/CollectionEditor/CollectionEditor';

export default function MyRoom() {

  return (
    <>
      <HelmetProvider>
          <Helmet>
              <title>My room</title>
          </Helmet>
          <h1>It's your private room</h1>
          <CollectionEditor />
      </HelmetProvider>
    </>
  );
}