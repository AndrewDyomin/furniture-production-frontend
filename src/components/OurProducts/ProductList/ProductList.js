import { useSelector, useDispatch } from 'react-redux';
import PulseLoader from "react-spinners/PulseLoader";
import { Link, useParams } from "react-router-dom";
import { Product } from '../Product/Product';
import { selectAllProducts } from '../../../redux/products/selectors';
import { setActiveProduct } from '../../../redux/products/operations';
import css from './ProductList.module.css';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export const ProductsList = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const products = useSelector(selectAllProducts);
  let activeProducts = products.array ? [ ...products.array ] : [];
  const { filter } = useParams();
  const [filterArray, setFilterArray] = useState(filter !== undefined ? [filter] : ['bed', 'sofa'])  
  
  if (products.array) {
    activeProducts = products.array.filter(el => filterArray.includes(el.group));
  }
  
  const filterToggle = (target) => {
    filterArray.includes(target) ? 
      setFilterArray(prevState => prevState.filter(item => item !== target)) :
      setFilterArray(prevState => [ ...prevState, target ]);
  }

  return (
    <div className={css.container}>
      <div>
        <button 
          onClick = {() => filterToggle('sofa')}
          className={filterArray.includes('sofa') ? `${css.btn} ${css.activeBtn}` : `${css.btn}`}
          >
          {t('sofas')}
        </button>
        <button 
          onClick = {() => filterToggle('bed')}
          className={filterArray.includes('bed') ? `${css.btn} ${css.activeBtn}` : `${css.btn}`}
          >
          {t('beds')}
        </button>
      </div>
        {products.length !== 0 ? 
            <ul className={css.list}>
                {activeProducts.map(({ _id }) => (
                <li key={_id} className={css.item}>
                  <Link to={`/product-details/${_id}`} 
                    className={css.productLink} 
                    onClick={() => dispatch(setActiveProduct(products.array.find((el) => {return(el._id === _id)})))}>
                    <Product  
                    id={_id} />
                  </Link>
                </li>
            ))}
            </ul> : 
            <PulseLoader 
              color="#c8c19b"
              cssOverride={{
                position: 'absolute',
                top: '20%',
                left: '50%'
              }}
            />
        }
    </div >
  );
};