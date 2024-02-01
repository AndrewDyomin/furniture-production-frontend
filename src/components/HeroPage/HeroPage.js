import css from './HeroPage.module.css';
import { Link } from 'react-router-dom';

export const HeroPage = () => {

  return (
    <div className={css.container}>
        <div className={css.wrapper}>
            <h1 className={css.heroTitle}>Discover Our New Collection</h1>
            <Link to="/products">
            <button className={css.heroBtn}>More</button>
            </Link>
        </div>
    </div>
  );
};