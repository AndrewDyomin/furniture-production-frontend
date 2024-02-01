import { Formik, Field, Form, FieldArray } from 'formik';
import axios from 'axios';
import css from './CollectionEditor.module.css';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

export const CollectionEditor = () => {

  return (
    <div className={css.wrapper}>
        <h2 className={css.title}>Collection Editor</h2>
        <Formik
        initialValues={{
            group: '',
            name: '',
            dimensions: {
                width: '',
                height: '',
                depth: ''
            },
            subscription: '',
            images: [''],
            components: [''],
        }}
        onSubmit={async (values, { resetForm }) => {
            try {
                await axios.post('/collections/add', values);
                resetForm();
            } catch(error) {
                console.log(error);
            }
        }}
        >
        <Form className={css.formWrapper}>
            <div className={css.formItem}>
                <label htmlFor="group">Group</label>
                <Field className={css.field} id="group" name="group" placeholder="Sofa" />
            </div>
            <div className={css.formItem}>
                <label htmlFor="name">Name</label>
                <Field className={css.field} id="name" name="name" placeholder="Faynee mini" />
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
                <label htmlFor="price">Base price</label>
                <Field className={css.field} id="price" name="price" placeholder="12500" />
            </div>
            <div className={css.formItem}>
                <FieldArray
                    name="images"
                    render={(arrayHelpers) => (
                        <div>
                        {arrayHelpers.form.values.images.map((image, index) => (
                            <div key={index} className={css.inputArray}>
                            <Field className={css.field} name={`images.${index}`} placeholder="images"/>
                            {arrayHelpers.form.values.images.length > 1 ? <button
                                className={css.minBtn}
                                type="button"
                                onClick={() => arrayHelpers.remove(index)}
                            >
                                -
                            </button> : <></>}
                            {index === arrayHelpers.form.values.images.length - 1 && (
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
    </div>
  );
};