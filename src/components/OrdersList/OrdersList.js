import { useSelector, useDispatch } from 'react-redux';
import PulseLoader from "react-spinners/PulseLoader";
import { Link } from "react-router-dom";
import { Order } from '../Order/Order';
import { PopUp } from '../PopUp/PopUp';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { selectAllOrders, selectLoading } from '../../redux/orders/selectors';
import { setActiveOrder, fetchAllOrders } from '../../redux/orders/operations';
import css from './OrdersList.module.css';
import { useState } from 'react';
import Select from 'react-select';

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

export const OrdersList = () => {

  const { t } = useTranslation();
  const [filter, setFilter] = useState('');
  const [isModalOrderOpen, setIsModalOrderOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState({ value: 'sofa', label: 'Sofa' });
  const [selectedSleepSizes, setSelectedSleepSizes] = useState({ value: '160 x 200', label: '160 x 200' });
  const [selectedFiles, setSelectedFiles] = useState('');

  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const orders = useSelector(selectAllOrders);
  let dealerNames = [];
  const filters = [{value: '', label: 'All'}];

  if (orders.allOrdersArray) {
    orders.allOrdersArray.forEach((order, index) => {
      dealerNames.push({value: `${order.dealer}`, label: `${order.dealer}`})
    })
    dealerNames.forEach(item => {
      if (!filters.some(obj => obj.value.toLowerCase() === item.value.toLowerCase())) {
          filters.push(item);
      }
    });
  }

  const filteredOrders = orders.allOrdersArray ? orders.allOrdersArray.filter(order => order.dealer.toLowerCase().includes(filter.toLowerCase())) : [];

  const openOrderModal = () => {
    setIsModalOrderOpen(true);
    document.body.classList.add('modal-open');
  };

  const closeOrderModal = () => {
    setIsModalOrderOpen(false);
    document.body.classList.remove('modal-open');
  };

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };

  return (
    <div className={css.container}>
      <div className={css.navigation}>
        <Select
          className={css.filter}
          name="filter" 
          id="filter"
          onChange={e => setFilter(e.value)}
          options={filters}
          defaultValue={filter}
          placeholder={t('filter')}>
        </Select>
        <button className={`${css.btn} ${css.addOrderBtn}`} onClick={openOrderModal}>
          {t('add order')}
        </button>
      </div>
      {filteredOrders.length !== 0 ? 
          <ul className={css.list}>
              {filteredOrders.map(({ _id }) => (
              <li key={_id} className={css.item}>
                <Link to={`${_id}`} 
                  className={css.orderLink} 
                  onClick={() => dispatch(setActiveOrder(orders.allOrdersArray.find((el) => {return(el._id === _id)})))}>
                  <Order  
                  id={_id} />
                </Link>
              </li>
          ))}
          </ul> : <></>}
          {isLoading ? 
          <PulseLoader 
            color="#c8c19b"
            cssOverride={{
              position: 'absolute',
              top: '20%',
              left: '45%'
            }}
          />
      : <></>}
      <PopUp 
        isOpen={isModalOrderOpen}
        close={closeOrderModal}
        body={
        <>
          <div className={css.orderModalWrapper}>
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
                    // eslint-disable-next-line
                    {selectedGroup.value === 'bed' ? 
                    formData.append('description', values.description + ` Спальное место ${selectedSleepSizes.value}`)
                    : formData.append('description', values.description)};
                    formData.append('number', values.number);
                    formData.append('adress', values.adress);
                    formData.append('rest', values.rest);
                    formData.append('deadline', values.deadline);
                    formData.append('file', selectedFiles[0]);
                    await axios.post('/orders/add', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    });
                    toast.success('Order sended');
                    resetForm();
                    closeOrderModal();
                    dispatch(fetchAllOrders());
                } catch(error) {
                    toast.error(`${error.response.data.message}`);
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
                            placeholder={selectedSleepSizes.value}
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
                <div className={css.formItem}>
                  <Field className={css.field} id="files" name="files" type="file" onChange={handleFileChange}/>
                </div>
                <button type="submit" className={css.btn}>Submit</button>
            </Form>
            </Formik>
          </div>
        </>}
      />
    </div >
  );
};