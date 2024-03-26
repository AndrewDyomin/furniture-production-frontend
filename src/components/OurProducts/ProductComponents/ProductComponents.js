import { useTranslation } from "react-i18next";
import { selectAllComponents } from "../../../redux/components/selectors";
import { useSelector } from "react-redux";
import { useState, useEffect, useCallback } from "react";

export const ProductComponents = ({ components }) => {

  const allComponentsArray = useSelector(selectAllComponents).array;
  const { t } = useTranslation();
  const [totalUah, setTotalUah] = useState(0);
  const [totalDollars, setTotalDollars] = useState(0);

  const targetComponent = useCallback((id) => {
    return allComponentsArray.find((component) => component._id === id);
  }, [allComponentsArray]);

  useEffect(() => {
    let uahTotal = 0;
    let dollarsTotal = 0;

    components.forEach((component) => {
      const pq = targetComponent(component.id).price * component.quantity;
      targetComponent(component.id).currency === "грн"
        ? (uahTotal += pq)
        : (dollarsTotal += pq);
    });

    setTotalUah(Math.round(uahTotal));
    setTotalDollars(Math.round(dollarsTotal));
  }, [components, targetComponent]);
  
  try {
    return (
        <>
            <p>{t('product components')}:</p>
            <ul>
            {components.map(component => 
                <li key={component.id}>
                    <p>{`${targetComponent(component.id).name} - ${component.quantity} ${targetComponent(component.id).units}`}</p>
                </li>
            )}
            </ul>
            <p>{`${t('total')}: ${totalUah}грн, $${totalDollars}`}</p>
        </>

    )}catch {
        return (
            <p>not found</p>
        )
    }
};