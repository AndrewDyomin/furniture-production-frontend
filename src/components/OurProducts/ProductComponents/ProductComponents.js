import { selectAllComponents } from "../../../redux/components/selectors";
import { useSelector } from "react-redux";

export const ProductComponents = ({ components }) => {

  const allComponentsArray = useSelector(selectAllComponents).array;

  const targetComponent = (id) => {
    const target = allComponentsArray.find((component) => (component._id === id));
    return target;
  };

  try {
    return (
        <>
            <p>Product components:</p>
            <ul>
            {components.map(component => 
                <li key={component.id}>
                    <p>{`${targetComponent(component.id).name} - ${component.quantity} ${targetComponent(component.id).units}`}</p>
                </li>
            )}
            </ul>
        </>

    )}catch {
        return (
            <p>not found</p>
        )
    }
};