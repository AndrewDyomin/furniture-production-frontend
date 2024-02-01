import { CategoriesItem } from "./CategoriesItem/CategoriesItem";
import { Link } from "react-router-dom";
import sofaImage from '../../images/002-01-min-900x675.jpg';
import bedImage from '../../images/feelee002-min-900x675.jpg';
import css from "./OurProducts.module.css";

export const OurProducts = () => {

    const categories = [{image: sofaImage, title:'sofa'}, {image: bedImage, title:'bed'}];
    
    return (
        <div className={css.container}>
            <h2 className={css.title}>Our products</h2>
            <ul className={css.categoriesList}>
                {categories.map((category) => (
                    <li key={category.title} className={css.categoriesItem}>
                       <CategoriesItem image={category.image} title={category.title} /> 
                    </li>
                ))}
            </ul>
            <Link to='/products'>
                <button className={css.AllProductsBtn}>All products</button>
            </Link>
        </div>
    );
};