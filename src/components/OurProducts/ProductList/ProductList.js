import { useSelector, useDispatch } from 'react-redux';
import PulseLoader from "react-spinners/PulseLoader";
import { Link } from "react-router-dom";
import { Product } from '../Product/Product';
import { selectAllProducts } from '../../../redux/products/selectors';
import { setActiveProduct } from '../../../redux/products/operations';
import css from './ProductList.module.css';

export const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);

  return (
    <div className={css.container}>
        {products.length !== 0 ? 
            <ul className={css.list}>
                {products.array.map(({ _id }) => (
                <li key={_id} className={css.item}>
                  <Link to={`${_id}`} 
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