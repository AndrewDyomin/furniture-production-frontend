import { Formik, Field, Form, FieldArray } from 'formik';
import axios from 'axios';
import css from './CollectionEditor.module.css';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

export const CollectionEditor = () => {

  return (
    <div className={css.wrapper}>
        <h2>Collection Editor</h2>
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
        <Form>
            <label htmlFor="group">Group</label>
            <Field id="group" name="group" placeholder="Sofa" />

            <label htmlFor="name">Name</label>
            <Field id="name" name="name" placeholder="Faynee mini" />

            <label htmlFor="dimensions.width">Width</label>
            <Field id="dimensions.width" name="dimensions.width" placeholder="Width"/>

            <label htmlFor="dimensions.height">Height</label>
            <Field id="dimensions.height" name="dimensions.height" placeholder="Height"/>

            <label htmlFor="dimensions.depth">Depth</label>
            <Field id="dimensions.depth" name="dimensions.depth" placeholder="Depth"/>

            <label htmlFor="subscription">Subscription</label>
            <Field id="subscription" name="subscription" placeholder="Subscription" />

            <FieldArray
                name="images"
                render={(arrayHelpers) => (
                    <div>
                    {arrayHelpers.form.values.images.map((image, index) => (
                        <div key={index}>
                        <Field name={`images.${index}`} placeholder="images"/>
                        <button
                            type="button"
                            onClick={() => arrayHelpers.remove(index)}
                        >
                            -
                        </button>
                        {index === arrayHelpers.form.values.images.length - 1 && (
                            <button
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
            <FieldArray
                name="components"
                render={(arrayHelpers) => (
                    <div>
                    {arrayHelpers.form.values.components.map((component, index) => (
                        <div key={index}>
                        <Field name={`components.${index}`} placeholder="components"/>
                        <button
                            type="button"
                            onClick={() => arrayHelpers.remove(index)}
                        >
                            -
                        </button>
                        {index === arrayHelpers.form.values.components.length - 1 && (
                            <button
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
            <button type="submit">Submit</button>
        </Form>
        </Formik>
    </div>
  );
};