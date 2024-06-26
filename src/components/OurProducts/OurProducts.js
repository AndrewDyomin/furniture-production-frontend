import { CategoriesItem } from "./CategoriesItem/CategoriesItem";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import sofaImage from '../../images/002-01-min-900x675.jpg';
import bedImage from '../../images/feelee002-min-900x675.jpg';
import banquetteImage from '../../images/banquette.jpg';
import poufImage from '../../images/pouf-mi.jpg';
import css from "./OurProducts.module.css";

export const OurProducts = () => {

    const { t } = useTranslation();
    const categories = [
        {image: sofaImage, title:`${t('sofas')}`, value: 'sofa'}, 
        {image: bedImage, title:`${t('beds')}`, value: 'bed'},
        {image: banquetteImage, title:`${t('banquettes')}`, value: 'banquette'},
        {image: poufImage, title:`${t('poufs')}`, value: 'pouf'}
    ];
    
    return (
        <div className={css.container}>
            <h2 className={css.title}>{t('our products')}</h2>
            <ul className={css.categoriesList}>
                {categories.map((category) => (
                    <li key={category.title} className={css.categoriesItem}>
                       <CategoriesItem image={category.image} title={category.title} value={category.value}/> 
                    </li>
                ))}
            </ul>
            <Link to='/products'>
                <button className={css.AllProductsBtn}>{t('all products')}</button>
            </Link>
        </div>
    );
};