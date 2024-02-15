import { Formik, Field, Form, FieldArray } from 'formik';
import { selectAllComponents } from "../../redux/components/selectors";
import axios from 'axios';
import css from './CollectionEditor.module.css';
import { useState } from 'react';
import Select from 'react-select';
import { useSelector } from 'react-redux';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

const groups = [
    { value: 'sofa', label: 'Sofa' },
    { value: 'bed', label: 'Bed' },
  ];

export const CollectionEditor = () => {

    const components = useSelector(selectAllComponents).array;
    let componentList = [];

    components.forEach((component) => {
        componentList.push({value: component._id, label: `${component.name}/${component.units}`})
    })

    const [selectedGroup, setSelectedGroup] = useState({ value: 'sofa', label: 'Sofa' });
    const [selectedFiles, setSelectedFiles] = useState('');
    const [selectedComponents, setSelectedComponents] = useState([]);

    const handleFileChange = (event) => {
        setSelectedFiles(event.target.files);
    };

  return (
    <div className={css.wrapper}>
        <h2 className={css.title}>Collection Editor</h2>
        <Formik
        initialValues={{
            group: selectedGroup.value,
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
                formData.append('group', selectedGroup.value);
                formData.append('name', values.name);
                formData.append('dimensions[width]', values.dimensions.width);
                formData.append('dimensions[height]', values.dimensions.height);
                formData.append('dimensions[depth]', values.dimensions.depth);
                formData.append('subscription', values.subscription);
                formData.append('basePrice', values.basePrice);
                selectedComponents.forEach((component, index) => {
                    formData.append(`components[${index}]`, component);
                });
                formData.append('file', selectedFiles[0]);
                await axios.post('/collections/add', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                // formData.forEach((value, key) => {
                //     console.log(key + ': ' + value);
                // });
                resetForm();
            } catch(error) {
                console.log(error);
            }
        }}
        >
        <Form className={css.formWrapper}>
            <div className={css.formItem}>
                <label htmlFor="group">Group</label>
                <Field component={Select} 
                    name="group" 
                    id="group"
                    onChange={e => setSelectedGroup(e)}
                    options={groups}
                    defaultValue={selectedGroup.value}
                    >
                </Field>
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
                            {/* <Field className={css.field} name={`components.${index}`} placeholder="components"/> */}
                            <Field component={Select} 
                                name={`components.${index}`} 
                                onChange={e => setSelectedComponents(prevState => {
                                    const updatedComponents = [...prevState];
                                    updatedComponents[index] = e.value;
                                    return updatedComponents;
                                  })}
                                options={componentList}
                                >
                            </Field>
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