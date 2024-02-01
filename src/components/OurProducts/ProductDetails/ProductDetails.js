import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllProducts } from '../../../redux/products/selectors';

export const ProductDetails = () => {

    const { id } = useParams();
    const products = useSelector(selectAllProducts);
    const product = products.array.find((el) => (el._id === id));

    return(
        <></>
    )
}