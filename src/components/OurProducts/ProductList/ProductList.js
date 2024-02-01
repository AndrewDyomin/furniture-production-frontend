import { useSelector, useDispatch } from 'react-redux';
import PulseLoader from "react-spinners/PulseLoader";
import { Link, useParams } from "react-router-dom";
import { Product } from '../Product/Product';
import { selectAllProducts } from '../../../redux/products/selectors';
import { setActiveProduct } from '../../../redux/products/operations';
import css from './ProductList.module.css';

export const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  let activeProducts = products.array ? [ ...products.array ] : [];
  const { filter } = useParams();
  
  if (products.array && filter) {
    activeProducts = products.array.filter(el => el.group.toLowerCase() === filter.toLowerCase());
  }
  

  return (
    <div className={css.container}>
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