import css from './HeroPage.module.css';

export const HeroPage = () => {

  return (
    <div className={css.container}>
        <div className={css.wrapper}>
            <h1 className={css.heroTitle}>Discover Our New Collection</h1>
            <button className={css.heroBtn}>More</button>
        </div>
    </div>
  );
};