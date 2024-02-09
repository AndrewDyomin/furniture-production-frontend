import { Formik, Field, Form, FieldArray } from 'formik';
import axios from 'axios';
import css from './CollectionEditor.module.css';
import { useState } from 'react';
import Select from 'react-select';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

const groups = [
    { value: 'sofa', label: 'Sofa' },
    { value: 'bed', label: 'Bed' },
  ];

export const CollectionEditor = () => {

    const [selectedGroup, setSelectedGroup] = useState('sofa');

    const [selectedFiles, setSelectedFiles] = useState('');

    const handleFileChange = (event) => {
        setSelectedFiles(event.target.files);
    };

  return (
    <div className={css.wrapper}>
        <h2 className={css.title}>Collection Editor</h2>
        <Formik
        initialValues={{
            group: selectedGroup,
            name: '',
            dimensions: {
                width: '',
                height: '',
                depth: ''
            },
            subscription: '',
            basePrice: '',
            images: [''],
            components: [''],
        }}
        onSubmit={async (values, { resetForm }) => {
            try {
                const formData = new FormData();
                formData.append('group', values.group);
                formData.append('name', values.name);
                formData.append('dimensions[width]', values.dimensions.width);
                formData.append('dimensions[height]', values.dimensions.height);
                formData.append('dimensions[depth]', values.dimensions.depth);
                formData.append('subscription', values.subscription);
                formData.append('basePrice', values.basePrice);
                values.components.forEach((component, index) => {
                    formData.append(`components[${index}]`, component);
                });
                formData.append('file', selectedFiles[0]);

                await axios.post('/collections/add', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                resetForm();
            } catch(error) {
                console.log(error);
            }
        }}
        >
        <Form className={css.formWrapper}>
            <div className={css.formItem}>
                <label htmlFor="group">Group</label>
                <Select
                        className={css.field}
                        id="group"
                        name="group"
                        defaultValue={selectedGroup}
                        onChange={e => setSelectedGroup(e.value)}
                        options={groups}
                    />
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
                <label htmlFor="basePrice">Base price</label>
                <Field className={css.field} id="basePrice" name="basePrice" placeholder="12500" />
            </div>
            <div className={css.formItem}>
                <Field className={css.field} id="files" name="files" type="file" onChange={handleFileChange}/>
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