import { useSelector } from "react-redux";
import { selectAllComponents } from "redux/components/selectors";
import css from "./ComponentList.module.css";

export const ComponentList = () => {

    const components = useSelector(selectAllComponents);

    return (
        <></>
    )
}