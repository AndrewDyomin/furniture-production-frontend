import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, updateProduct } from "../../../redux/products/operations";
import { selectActiveProduct } from '../../../redux/products/selectors';
import css from './AdminMenu.module.css';
import { useState } from 'react';
import { PopUp } from "components/PopUp/PopUp";
import { Formik, Field, Form, FieldArray } from 'formik';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

export const AdminMenu = (id) => {

    const dispatch = useDispatch();
    const product = useSelector(selectActiveProduct);

    const handleDelete = () => {
        dispatch(deleteProduct(id));
    }

    const [isModalEditOpen, setIsModalEditOpen] = useState(false);

    const openEditModal = () => {
      setIsModalEditOpen(true);
      document.body.classList.add('modal-open');
    };
  
    const closeEditModal = () => {
      setIsModalEditOpen(false);
      document.body.classList.remove('modal-open');
    };

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const openDeleteModal = () => {
      setIsDeleteModalOpen(true);
      document.body.classList.add('modal-open');
    };
  
    const closeDeleteModal = () => {
      setIsDeleteModalOpen(false);
      document.body.classList.remove('modal-open');
    };    

    return (
        <div>
            <button onClick={openDeleteModal} className={css.btn}>Delete</button>
            <button className={css.btn} onClick={openEditModal}>Edit</button>
            <PopUp 
                isOpen={isModalEditOpen}
                close={closeEditModal}
                body={
                    <>
                        <p>Edit mode</p>
                        <Formik
                        initialValues={{
                            name: product.name,
                            dimensions: {
                                width: product.dimensions.width,
                                height: product.dimensions.height,
                                depth: product.dimensions.depth
                            },
                            subscription: product.subscription,
                            basePrice: product.basePrice,
                            components: product.components,
                        }}
                        onSubmit={async (values) => {
                            try {
                                dispatch(updateProduct({ ...id, ...values }));
                                closeEditModal();
                            } catch(error) {
                                console.log(error);
                            }
                        }}
                        >
                        <Form className={css.formWrapper}>
                            <div className={css.formItem}>
                                <label htmlFor="name">Name</label>
                                <Field className={css.field} id="name" name="name" />
                            </div>
                            <div className={css.formItem}>
                                <label htmlFor="dimensions.width">Width</label>
                                <Field className={css.field} id="dimensions.width" name="dimensions.width" placeholder="Width"/>
                            </div>
                            <div className={css.formItem}>
                                <label htmlFor="dimensions.depth">Depth</label>
                                <Field className={css.field} id="dimensions.depth" name="dimensions.depth" placeholder="Depth"/>
                            </div>
                            <div className={css.formItem}>
                                <label htmlFor="dimensions.height">Height</label>
                                <Field className={css.field} id="dimensions.height" name="dimensions.height" placeholder="Height"/>
                            </div>
                            <div className={css.formItem}>
                                <label htmlFor="subscription">Subscription</label>
                                <Field className={css.field} id="subscription" name="subscription" placeholder="Subscription" />
                            </div>
                            <div className={css.formItem}>
                                <label htmlFor="basePrice">Base price</label>
                                <Field className={css.field} id="basePrice" name="basePrice" placeholder="12500" />
                            </div>
                            <div className={css.formItem}>
                                <FieldArray
                                    name="components"
                                    render={(arrayHelpers) => (
                                        <div>
                                        {arrayHelpers.form.values.components.map((component, index) => (
                                            <div key={index} className={css.inputArray}>
                                            <Field className={css.field} name={`components.${index}`} placeholder="components"/>
                                            {arrayHelpers.form.values.components.length > 1 ? <button
                                                className={css.minBtn}
                                                type="button"
                                                onClick={() => arrayHelpers.remove(index)}
                                            >
                                                -
                                            </button> : <></>}
                                            {index === arrayHelpers.form.values.components.length - 1 && (
                                                <button
                                                    className={css.minBtn}
                                                type="button"
                                                onClick={() => arrayHelpers.push('')}
                                                >
                                                +
                                                </button>
                                            )}
                                            </div>
                                        ))}
                                        </div>
                                    )}
                                />  
                            </div>
                            <button type="submit" className={css.btn}>Submit</button>
                        </Form>
                        </Formik>
                    </>
                }
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
        </div>
    )
}