import { useSelector } from "react-redux";
import { useState } from "react";
import { Formik, Field, Form } from 'formik';
import Select from 'react-select';
import { selectAllComponents } from "../../redux/components/selectors";
import svgIcons from '../../images/icons.svg';
import css from "./ComponentList.module.css";

const currencies = [
    { value: 'USD', label: 'USD' },
    { value: 'грн', label: 'грн' },
  ];
const units = [
    { value: 'шт.', label: 'шт' },
    { value: 'м', label: 'м' },
    { value: 'кг', label: 'кг' },
];

export const ComponentList = () => {

    const components = useSelector(selectAllComponents);
    const [isListOpen, setIsListOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState('грн');
    const [selectedUnits, setSelectedUnits] = useState('шт');

    const handleListOpen = (e) => {
        isListOpen ? setIsListOpen(false) : setIsListOpen(true)
        !isListOpen ? e.target.classList = css.active : e.target.classList = css.notActive;
    };

    return (
        <div className={css.wrapper}>
            <div className={css.titleArea}>
                <p>Component list</p>
                <button className={css.openBtn} id="isOpen" onClick={handleListOpen}>
                    <svg>
                        <use className={css.openBtnIcon} href={`${svgIcons}#icon-arrow-down`} width={'32px'}/>
                    </svg>
                </button>
            </div>
            {isListOpen ? 
            <div>
                <ul>
                {components.array.map((component) => (
                    <li key={component._id} className={css.item}>
                        <p>{component.name}</p>
                    </li>
                    
                ))}
                </ul>
                <Formik
                initialValues={{
                    name: '',
                    subscription: '',
                    price: '',
                    currency: '',
                    units: '',
                }}
                onSubmit={async (values, { resetForm }) => {
                    try {

                        resetForm();
                    } catch(error) {
                        console.log(error);
                    }
                }}
                >
                <Form className={css.formWrapper}>
                    <div className={css.formItem}>
                        <Field className={css.field} id="name" name="name" placeholder="Name" />
                    </div>
                    <div className={css.formItem}>
                        <Field className={css.field} id="subscription" name="subscription" placeholder="Subscription" />
                    </div>
                    <div className={css.formItem}>
                        <Field className={css.field} id="price" name="price" placeholder="Price" />
                    </div>
                    <div className={css.formItem}>
                        <label htmlFor="currency">Currency</label>
                        <Select
                                className={css.field}
                                id="currency"
                                name="currency"
                                defaultValue={selectedCurrency}
                                onChange={e => setSelectedCurrency(e.value)}
                                options={currencies}
                            />
                    </div>
                    <div className={css.formItem}>
                        <label htmlFor="units">Units</label>
                        <Select
                                className={css.field}
                                id="units"
                                name="units"
                                defaultValue={selectedUnits}
                                onChange={e => setSelectedUnits(e.value)}
                                options={units}
                            />
                    </div>
                    <button type="submit" className={css.btn}>Add component</button>
                </Form>
                </Formik>
            </div> : <></>}
        </div>
    )
}