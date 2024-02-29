import { Formik, Field, Form, FieldArray } from 'formik';
import { selectAllComponents } from "../../redux/components/selectors";
import axios from 'axios';
import svgIcons from '../../images/icons.svg';
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

    const components = useSelector(selectAllComponents);
    let componentList = [];

    try {
    components.array.forEach((component) => {
        componentList.push({value: component._id, label: `${component.name}/${component.units}`})
    })
    } catch {}

    const [selectedGroup, setSelectedGroup] = useState({ value: 'sofa', label: 'Sofa' });
    const [selectedFiles, setSelectedFiles] = useState('');
    const [selectedComponents, setSelectedComponents] = useState([]);
    const [isEditorOpen, setIsEditorOpen] = useState(false);

    const handleFileChange = (event) => {
        setSelectedFiles(event.target.files);
    };

    const handleEditorOpen = (e) => {
        isEditorOpen ? setIsEditorOpen(false) : setIsEditorOpen(true)
        !isEditorOpen ? e.target.classList = css.active : e.target.classList = css.notActive;
    };

  return (
    <div className={css.wrapper}>
        <div className={css.titleArea}>
            <p className={css.title}>Collection Editor</p>
            <button className={css.openBtn} id="isOpen" onClick={handleEditorOpen}>
                <svg>
                    <use className={css.openBtnIcon} href={`${svgIcons}#icon-arrow-down`} width={'32px'}/>
                </svg>
            </button>
        </div>
        {isEditorOpen ? 
        <Formik
        initialValues={{
            group: selectedGroup.value,
            name: '',
            dimensions: {
                width: '',
                height: '',
                depth: ''
            },
            description: '',
            basePrice: '',
            images: [''],
            components: [''],
            quantity: [''],
        }}
        onSubmit={async (values, { resetForm }) => {
            try {
                const formData = new FormData();
                formData.append('group', selectedGroup.value);
                formData.append('name', values.name);
                formData.append('dimensions[width]', values.dimensions.width);
                formData.append('dimensions[height]', values.dimensions.height);
                formData.append('dimensions[depth]', values.dimensions.depth);
                formData.append('description', values.description);
                formData.append('basePrice', values.basePrice);
                selectedComponents.forEach((component, index) => {
                    const componentId = selectedComponents[index];
                    const quantity = values.quantity[index];
                    formData.append(`components[${index}][id]`, componentId);
                    formData.append(`components[${index}][quantity]`, quantity);
                })
                formData.append('file', selectedFiles[0]);
                await axios.post('/collections/add', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                setSelectedComponents([]);
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
                <label htmlFor="description">Description</label>
                <Field className={css.field} id="description" name="description" placeholder="Description" />
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
                            <Field component={Select} 
                                className={css.selectComponent}
                                name={`components.${index}`} 
                                onChange={e => setSelectedComponents(prevState => {
                                    const updatedComponents = [...prevState];
                                    updatedComponents[index] = e.value;
                                    return updatedComponents;
                                  })}
                                options={componentList}
                                >
                            </Field>
                            <Field className={`${css.field} ${css.quantityField}`} name={`quantity.${index}`} placeholder="Quantity" />
                            {arrayHelpers.form.values.components.length > 1 ? <button
                                className={css.minBtn}
                                type="button"
                                onClick={() => {arrayHelpers.remove(index);
                                arrayHelpers.form.values.quantity.splice(index, 1)}}
                            >
                                -
                            </button> : <></>}
                            {index === arrayHelpers.form.values.components.length - 1 && (
                                <button
                                    className={css.minBtn}
                                type="button"
                                onClick={() => {arrayHelpers.push('');
                                arrayHelpers.form.values.quantity.push('')}}
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
        : <></>}
    </div>
  );
};