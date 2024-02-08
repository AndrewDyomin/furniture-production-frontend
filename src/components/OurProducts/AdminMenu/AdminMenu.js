import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../redux/products/operations";

export const AdminMenu = ({ id }) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteProduct({ id }));
        console.log(id)
    }

    return (
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}