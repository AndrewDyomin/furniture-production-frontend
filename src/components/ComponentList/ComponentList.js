import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Formik, Field, Form } from 'formik';
import Select from 'react-select';
import { selectAllComponents } from "../../redux/components/selectors";
import { addComponent, deleteComponent, updateComponent } from "../../redux/components/operations";
import { PopUp } from "../PopUp/PopUp";
import svgIcons from '../../images/icons.svg';
import css from "./ComponentList.module.css";

const currencies = [
    { value: 'USD', label: 'USD' },
    { value: 'грн', label: 'грн' },
  ];
const units = [
    { value: 'шт', label: 'шт' },
    { value: 'м', label: 'м' },
    { value: 'кг', label: 'кг' },
];

let editedComponent = {};

export const ComponentList = () => {

    const components = useSelector(selectAllComponents);
    const dispatch = useDispatch();
    const [isListOpen, setIsListOpen] = useState(false);
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState({value: 'грн', label: 'грн'});
    const [selectedUnits, setSelectedUnits] = useState({value: 'шт.', label: 'шт'});
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [filter, setFilter] = useState('');
    const [filteredComponents, setFilteredComponents] = useState([]);

    useEffect(() => {
        if (components && components.array && components.array.length !== 0) {
            setFilteredComponents(components.array.filter(c => c.name.toLowerCase().includes(filter.toLowerCase())));
        } else {
            setFilteredComponents([]);
        }
    }, [components, filter]);

    const openDeleteModal = (component) => {
      editedComponent = component;
      setIsDeleteModalOpen(true);
      document.body.classList.add('modal-open');
    };
  
    const closeDeleteModal = () => {
      setIsDeleteModalOpen(false);
      document.body.classList.remove('modal-open');
    };

    const handleDelete = () => {
        dispatch(deleteComponent(editedComponent._id));
        closeDeleteModal();
    }

    const handleListOpen = (e) => {
        isListOpen ? setIsListOpen(false) : setIsListOpen(true)
        !isListOpen ? e.target.classList = css.active : e.target.classList = css.notActive;
    };

    const openEditModal = (component) => {
        editedComponent = component;
        setIsModalEditOpen(true);
        document.body.classList.add('modal-open');
      };
    
    const closeEditModal = () => {
    setIsModalEditOpen(false);
    document.body.classList.remove('modal-open');
    };

    const ComponentsArray = () => {
        try {
            return(
            filteredComponents.map((component) => (
                <li key={component._id} className={css.item}>
                    <p>{component.name}</p>
                    <div>
                        <p>{component.description}</p>
                    </div>
                    <div className={css.price}>
                        <p>Price: {component.price}</p>
                        <p>{component.currency}</p>
                        <p>/{component.units}</p>
                    </div>
                    <div className={css.buttons}>
                        <button className={css.editBtn} onClick={() => openEditModal(component)}>Edit</button>
                        <button className={css.editBtn} onClick={() => openDeleteModal(component)}>Delete</button>
                    </div>
                </li>
            )
        ))} catch {
            return (<></>)
        }};

    return (
        <div className={css.wrapper}>
            <div className={css.titleArea}>
                <p className={css.title}>Component list</p>
                <button className={css.openBtn} id="isOpen" onClick={handleListOpen}>
                    <svg>
                        <use className={css.openBtnIcon} href={`${svgIcons}#icon-arrow-down`} width={'32px'}/>
                    </svg>
                </button>
            </div>
            {isListOpen ? 
            <div>
                <input 
                    className={css.item}
                    onChange={(e) => setFilter(e.target.value)}
                    placeholder={'Filter'}
                />
                <ul className={css.list}>
                    <ComponentsArray />
                </ul>
                <p className={css.title}>Add new component</p>
                <Formik
                initialValues={{         
                    name: '',
                    description: '',
                    price: '',
                    currency: selectedCurrency.value,
                    units: selectedUnits.value, 
                }}
                onSubmit={async (values, { resetForm }) => {
                    try {
                        const val = { ...values, currency: selectedCurrency.value, units: selectedUnits.value }
                        dispatch(addComponent(val));
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
                        <Field className={css.field} id="description" name="description" placeholder="Description" />
                    </div>
                    <div className={css.formItem}>
                        <Field className={css.field} id="price" name="price" placeholder="Price" />
                    </div>
                    <div className={css.formItem}>
                        <label htmlFor="currency">Currency</label>
                        <Field component={Select} 
                                name="currency" 
                                id="currency"
                                onChange={e => setSelectedCurrency(e)}
                                options={currencies}
                                defaultValue={selectedCurrency.value}
                                >
                        </Field>
                    </div>
                    <div className={css.formItem}>
                        <label htmlFor="units">Units</label>
                        <Field component={Select} 
                                name="units" 
                                id="units"
                                onChange={e => setSelectedUnits(e)}
                                options={units}
                                defaultValue={selectedUnits.value}
                                >
                        </Field>
                    </div>
                    <button type="submit" className={css.btn}>Add component</button>
                </Form>
                </Formik>
                <PopUp 
                    isOpen={isModalEditOpen}
                    close={closeEditModal}
                    body={
                        <>
                            <p>Edit mode</p>
                            <Formik
                            initialValues={{
                                name: editedComponent.name,
                                description: editedComponent.description,
                                price: editedComponent.price,
                                currency: editedComponent.currency,
                                units: editedComponent.units,
                            }}
                            onSubmit={async (values) => {
                                try {
                                    const id = editedComponent._id;
                                    dispatch(updateComponent({ id, ...values }));
                                    closeEditModal();
                                } catch(error) {
                                    console.log(error);
                                }
                            }}
                            >
                            <Form className={css.formWrapper}>
                                <div className={css.formItem}>
                                    <label htmlFor="name">Name</label>
                                    <Field className={css.field} id="name" name="name"/>
                                </div>
                                <div className={css.formItem}>
                                    <label htmlFor="description">Description</label>
                                    <Field className={css.field} id="description" name="description"/>
                                </div>
                                <div className={css.formItem}>
                                    <label htmlFor="price">Price</label>
                                    <Field className={css.field} id="price" name="price"/>
                                </div>
                                <div className={css.formItem}>
                                    <label htmlFor="currency">Currency</label>
                                    <Field className={css.field} id="currency" name="currency"/>
                                </div>
                                <div className={css.formItem}>
                                    <label htmlFor="units">Units</label>
                                    <Field className={css.field} id="units" name="units"/>
                                </div>
                                <button type="submit" className={css.btn}>Submit</button>
                            </Form>
                            </Formik>
                        </>}
                />
                <PopUp 
                    isOpen={isDeleteModalOpen}
                    close={closeDeleteModal}
                    body={
                        <>
                            <p>Are you sure???</p>
                            <div className={css.delModalWrapper}>
                                <button onClick={closeDeleteModal} className={css.btn}>Cancel</button>
                                <button onClick={handleDelete} className={`${css.btn} ${css.delBtn}`}>Delete</button>
                            </div>
                        </>}
                />
            </div> : <></>}
        </div>
    )
}