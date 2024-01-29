import { Helmet, HelmetProvider } from 'react-helmet-async';
import { HeroPage } from 'components/HeroPage/HeroPage';
import { OurProducts } from 'components/OurProducts/OurProducts';
  
  export default function Home() {
    return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <HeroPage />
        <OurProducts />
      </div>
    </HelmetProvider>

    );
  }