import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import svgIcons from '../../images/icons.svg';
import css from './OrderEditor.module.css';
import { useState } from 'react';
import Select from 'react-select';
import toast from 'react-hot-toast';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

const groups = [
    { value: 'sofa', label: 'Sofa' },
    { value: 'bed', label: 'Bed' },
  ];

const sleepSizes = [
    { value: '160 x 200', label: '160 x 200' },
    { value: '180 x 200', label: '180 x 200' },
    { value: '200 x 200', label: '200 x 200' },
    { value: '160 x 190', label: '160 x 190' },
    { value: '180 x 190', label: '180 x 190' },
    { value: '200 x 190', label: '200 x 190' },
    { value: '90 x 200', label: '90 x 200' },
    { value: '120 x 200', label: '120 x 200' },
    { value: '140 x 200', label: '140 x 200' },
    { value: '90 x 190', label: '90 x 190' },
    { value: '120 x 190', label: '120 x 190' },
    { value: '140 x 190', label: '140 x 190' },
]

export const OrderEditor = () => {

    const [selectedGroup, setSelectedGroup] = useState({ value: 'sofa', label: 'Sofa' });
    const [selectedSleepSizes, setSelectedSleepSizes] = useState({ value: '160 x 200', label: '160 x 200' });
    const [isEditorOpen, setIsEditorOpen] = useState(false);

    const handleEditorOpen = (e) => {
        isEditorOpen ? setIsEditorOpen(false) : setIsEditorOpen(true)
        !isEditorOpen ? e.target.classList = css.active : e.target.classList = css.notActive;
    };

  return (
    <div className={css.wrapper}>
        <div className={css.titleArea}>
            <p className={css.title}>Order Editor</p>
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
            size: '',
            fabric: '',
            description: '',
            number: '',
            adress: '',
            rest: '',
            deadline: '',
        }}
        onSubmit={async (values, { resetForm }) => {
            try {
                const formData = new FormData();
                formData.append('group', selectedGroup.value);
                formData.append('name', values.name);
                formData.append('size', values.size);
                formData.append('fabric', values.fabric);
                formData.append('description', values.description);
                formData.append('number', values.number);
                formData.append('adress', values.adress);
                formData.append('rest', values.rest);
                formData.append('deadline', values.deadline);
                // await axios.post('/orders/add', formData, {
                //     headers: {
                //         'Content-Type': 'multipart/form-data'
                //     }
                // });
                formData.forEach((value, key) => {
                    console.log(key + ': ' + value);
                });
                resetForm();
            } catch(error) {
                toast.error(error)
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
            {selectedGroup.value === 'bed' ? 
                <div className={css.formItem}>
                    <label htmlFor="sleepingArea">Sleeping area</label>
                    <Field component={Select} 
                        name="sleepingArea" 
                        id="sleepingArea"
                        onChange={e => setSelectedSleepSizes(e)}
                        options={sleepSizes}
                        defaultValue={selectedSleepSizes.value}
                        >
                    </Field>
                </div> : <></>}
            <div className={css.formItem}>
                <label htmlFor="size">Size</label>
                <Field className={css.field} id="size" name="size" placeholder={`${selectedGroup.label} size`} />
            </div>
            <div className={css.formItem}>
                <label htmlFor="fabric">Fabric</label>
                <Field className={css.field} id="fabric" name="fabric" placeholder="Fabric" />
            </div>
            <div className={css.formItem}>
                <label htmlFor="description">Description</label>
                <Field className={css.field} id="description" name="description" placeholder="Description" />
            </div>
            <div className={css.formItem}>
                <label htmlFor="number">Number</label>
                <Field className={css.field} id="number" name="number" placeholder="125" />
            </div>
            <div className={css.formItem}>
                <label htmlFor="adress">Adress</label>
                <Field className={css.field} id="adress" name="adress" placeholder="Kiev, Kyrylivska street, 103" />
            </div>
            <div className={css.formItem}>
                <label htmlFor="rest">Rest</label>
                <Field className={css.field} id="rest" name="rest" placeholder="21000" />
            </div>
            <div className={css.formItem}>
                <label htmlFor="deadline">Deadline</label>
                <Field className={css.field} id="deadline" name="deadline" placeholder="21" />
            </div>
            <button type="submit" className={css.btn}>Submit</button>
        </Form>
        </Formik>
        : <></>}
    </div>
  );
};