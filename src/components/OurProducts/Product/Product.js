import { useSelector } from "react-redux";
import { selectAllProducts } from "../../../redux/products/selectors";
import css from "./Product.module.css"

export const Product = ({ id }) => {

    const products = useSelector(selectAllProducts);
    const product = products.array.find((el) => {return(el._id === id)});

    return (
        <div className={css.wrapper}>
            <img src={product.images[0]} alt={`${product.name}`} className={css.image}/>
            <div>
                <p className={css.name}>{product.name}</p>
                <p className={css.size}>{product.dimensions.width} x {product.dimensions.height}</p>
            </div>
        </div>
    )
}