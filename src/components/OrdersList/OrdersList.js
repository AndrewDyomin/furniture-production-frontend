import { useSelector, useDispatch } from 'react-redux';
import PulseLoader from 'react-spinners/PulseLoader';
import { Link, useLocation } from 'react-router-dom';
import { Order } from '../Order/Order';
import { PopUp } from '../PopUp/PopUp';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { selectAllOrders, selectLoading } from '../../redux/orders/selectors';
import { setActiveOrder, fetchAllOrders } from '../../redux/orders/operations';
import css from './OrdersList.module.css';
import { useState } from 'react';
import Select from 'react-select';
import { selectUser } from '../../redux/auth/selectors';
import { useMediaQuery } from 'react-responsive';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

export const OrdersList = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: '(max-width: 833px)' });
  const groups = [
    { value: `${t('sofa')}`, label: `${t('sofa')}` },
    { value: `${t('bed')}`, label: `${t('bed')}` },
    { value: `${t('kitchen banquette')}`, label: `${t('kitchen banquette')}` },
    { value: `${t('pouf')}`, label: `${t('pouf')}` },
    { value: `${t('mattress')}`, label: `${t('mattress')}` },
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
  ];

  const [filter, setFilter] = useState('');
  const [isModalOrderOpen, setIsModalOrderOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState({
    value: `${t('sofa')}`,
    label: `${t('sofa')}`,
  });
  const [enteredName, setEnteredName] = useState('');
  const [selectedSleepSizes, setSelectedSleepSizes] = useState({
    value: '160 x 200',
    label: '160 x 200',
  });
  const [enteredSize, setEnteredSize] = useState('');
  const [enteredFabric, setEnteredFabric] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredNumber, setEnteredNumber] = useState('');
  const [enteredAdress, setEnteredAdress] = useState('');
  const [enteredRest, setEnteredRest] = useState('');
  const [enteredDeadline, setEnteredDeadline] = useState('');
  const [selectedFiles, setSelectedFiles] = useState('');
  const [isPending, setIsPending] = useState(false);

  const location = useLocation();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const orders = useSelector(selectAllOrders);
  let dealerNames = [];
  let prefilteredOrders = orders.allOrdersArray;
  let dateArray = [];
  const filters = [{ value: '', label: 'All' }];

  if (orders.allOrdersArray) {
    orders.allOrdersArray.forEach((order, index) => {
      dealerNames.push({ value: `${order.dealer}`, label: `${order.dealer}` });
    });
    dealerNames.forEach(item => {
      if (
        !filters.some(
          obj => obj.value.toLowerCase() === item.value.toLowerCase()
        )
      ) {
        filters.push(item);
      }
    });
  }

  if (user.description === 'seamstress') {
    prefilteredOrders =
      orders.allOrdersArray && orders.allOrdersArray.length !== 0
        ? orders.allOrdersArray.filter(order => order.coverStatus !== 'TRUE')
        : [];
  }

  if (user.description === 'carpenter') {
    prefilteredOrders =
      orders.allOrdersArray && orders.allOrdersArray.length !== 0
        ? orders.allOrdersArray.filter(order => order.frameStatus !== 'TRUE')
        : [];
  }

  if (user.description === 'upholsterer') {
    prefilteredOrders =
      orders.allOrdersArray && orders.allOrdersArray.length !== 0
        ? orders.allOrdersArray.filter(order => order.orderStatus !== 'TRUE')
        : [];
  }

  const filteredOrders =
    prefilteredOrders && prefilteredOrders.length !== 0
      ? prefilteredOrders.filter(order =>
          order.dealer.toLowerCase().includes(filter.toLowerCase())
        )
      : [];

  const openOrderModal = () => {
    setIsModalOrderOpen(true);
    document.body.classList.add('modal-open');
  };

  const closeOrderModal = () => {
    setIsModalOrderOpen(false);
    document.body.classList.remove('modal-open');
  };

  const handleFileChange = event => {
    setSelectedFiles([...event.target.files]);
  };

  function dateToString(date) {
    const d = new Date(date);
    const month = d.getMonth() + 1;
    const dateString = `${d.getDate().toString().padStart(2, '0')}.${month
      .toString()
      .padStart(2, '0')}.${d.getFullYear()}`;
    return dateString;
  }

  const NewOrderSchema = Yup.object().shape({
    group: Yup.string().required(`${t('required')}`),
    name: Yup.string().required(`${t('required')}`),
    size: Yup.string().required(`${t('required')}`),
    fabric: Yup.string().required(`${t('required')}`),
    description: Yup.string().required(`${t('required')}`),
    number: Yup.string().required(`${t('required')}`),
    adress: Yup.string(),
    rest: Yup.string(),
    deadline: Yup.number()
      .min(10, `${t('too small')}`)
      .max(60, `${t('too large')}`)
      .required(`${t('required')}`),
  });

  if (!isMobile) {
    filteredOrders.forEach((order, index) => {
      let date = dateToString(order.plannedDeadline);
      !dateArray.includes(date) && dateArray.push(date)
    });
  }

  const PreFormList = () => {
    if (!isMobile) {
      return (
        <ul className={css.list}>
          {dateArray.map((day) => (
            <li key={day} className={css.dateItem}>
              <p className={css.dayTitle}>{day}</p>
              <ul className={`${css.list} ${css.dateWrapper}`}>
              {filteredOrders.map(({ _id, plannedDeadline }) => (
                dateToString(plannedDeadline) === day &&
                <li key={_id} className={css.item}>
                  <Link
                    to={`${_id}`}
                    state={{ from: location }}
                    className={css.orderLink}
                    onClick={() =>
                      dispatch(
                        setActiveOrder(
                          orders.allOrdersArray.find(el => {
                            return el._id === _id;
                          })
                        )
                      )
                    }
                  >
                    <Order id={_id} />
                  </Link>
                </li>
              ))}
              </ul>
            </li>
          ))}
        </ul>
    )}
    return (
      <ul className={css.list}>
        {filteredOrders.map(({ _id }) => (
          <li key={_id} className={css.item}>
            <Link
              to={`${_id}`}
              state={{ from: location }}
              className={css.orderLink}
              onClick={() =>
                dispatch(
                  setActiveOrder(
                    orders.allOrdersArray.find(el => {
                      return el._id === _id;
                    })
                  )
                )
              }
            >
              <Order id={_id} />
            </Link>
          </li>
        ))}
      </ul>
    )
  }

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
          placeholder={t('filter')}
        ></Select>
        <button
          className={`${css.btn} ${css.addOrderBtn}`}
          onClick={openOrderModal}
        >
          {t('add order')}
        </button>
      </div>
      {isLoading ? (
        <PulseLoader
          color="#c8c19b"
          cssOverride={{
            marginTop: '15px',
            display: 'flex',
            justifyContent: 'center',
          }}
        />
      ) : (
        <></>
      )}
      {filteredOrders.length !== 0 ? (
        <PreFormList />
      ) : (
        <></>
      )}
      <PopUp
        isOpen={isModalOrderOpen}
        close={closeOrderModal}
        body={
          <>
            <div className={css.orderModalWrapper}>
              <Formik
                enableReinitialize={true}
                initialValues={{
                  group: selectedGroup.value,
                  name: enteredName,
                  size: enteredSize,
                  fabric: enteredFabric,
                  description: enteredDescription,
                  number: enteredNumber,
                  adress: enteredAdress,
                  rest: enteredRest,
                  deadline: enteredDeadline,
                }}
                validationSchema={NewOrderSchema}
                onSubmit={async (values, { resetForm }) => {
                  try {
                    setIsPending(true);
                    const formData = new FormData();
                    formData.append('group', selectedGroup.value);
                    formData.append('name', values.name);
                    formData.append('size', values.size);
                    formData.append('fabric', values.fabric);
                    // eslint-disable-next-line
                    {
                      selectedGroup.value === `${t('bed')}`
                        ? formData.append(
                            'description',
                            values.description +
                              ` Спальное место ${selectedSleepSizes.value}`
                          )
                        : formData.append('description', values.description);
                    }
                    formData.append('number', values.number);
                    formData.append('adress', values.adress);
                    formData.append('rest', values.rest);
                    formData.append('deadline', values.deadline);
                    if (selectedFiles && selectedFiles.length !== 0) {
                      selectedFiles.forEach(file => {
                        formData.append('file', file);
                      });
                    }
                    await axios.post('/orders/add', formData, {
                      headers: {
                        'Content-Type': 'multipart/form-data',
                      },
                    });
                    toast.success('Order sended');
                    resetForm();
                    setIsPending(false);
                    setSelectedGroup({value: `${t('sofa')}`, label: `${t('sofa')}`,});
                    setEnteredName('');
                    setEnteredSize('');
                    setEnteredFabric('');
                    setEnteredDescription('');
                    setEnteredNumber('');
                    setEnteredAdress('');
                    setEnteredRest('');
                    setEnteredDeadline('');
                    closeOrderModal();
                    dispatch(fetchAllOrders());
                  } catch (error) {
                    toast.error(`${error.response.data.message}`);
                  }
                }}
              >
                {({ errors, touched, setFieldValue }) => (
                <Form className={css.formWrapper}>
                  <div className={css.formItem}>
                    <label htmlFor="group">{t('group')}</label>
                    <Field
                      component={Select}
                      name="group"
                      id="group"
                      onChange={e => setSelectedGroup(e)}
                      options={groups}
                      defaultValue={selectedGroup.value}
                      placeholder={selectedGroup.label}
                    ></Field>
                    {errors.group && touched.group ? (
                      <div>{errors.group}</div>
                    ) : null}
                  </div>
                  <div className={css.formItem}>
                    <label htmlFor="name">{t('order name')}</label>
                    <Field
                      className={errors.name && touched.name ? `${css.field} ${css.formError}` : css.field}
                      id="name"
                      name="name"
                      placeholder="Faynee mini"
                      value={enteredName}
                      onChange={e => {setEnteredName(e.target.value); setFieldValue('name', e.target.value);}}
                    />
                    {errors.name && touched.name ? (
                      <div>{errors.name}</div>
                    ) : null}
                  </div>
                  {selectedGroup.value === `${t('bed')}` ? (
                    <div className={css.formItem}>
                      <label htmlFor="sleepingArea">{t('sleeping area')}</label>
                      <Field
                        component={Select}
                        name="sleepingArea"
                        id="sleepingArea"
                        onChange={e => setSelectedSleepSizes(e)}
                        options={sleepSizes}
                        defaultValue={selectedSleepSizes.value}
                        placeholder={selectedSleepSizes.value}
                      ></Field>
                    </div>
                  ) : (
                    <></>
                  )}
                  <div className={css.formItem}>
                    <label htmlFor="size">{t('size')}</label>
                    <Field
                      className={errors.size && touched.size ? `${css.field} ${css.formError}` : css.field}
                      id="size"
                      name="size"
                      placeholder={`${t('overall size')}`}
                      value={enteredSize}
                      onChange={e => {setEnteredSize(e.target.value); setFieldValue('size', e.target.value);}}
                    />
                    {errors.size && touched.size ? (
                      <div>{errors.size}</div>
                    ) : null}
                  </div>
                  <div className={css.formItem}>
                    <label htmlFor="fabric">{t('fabric')}</label>
                    <Field
                      className={errors.fabric && touched.fabric ? `${css.field} ${css.formError}` : css.field}
                      id="fabric"
                      name="fabric"
                      placeholder={t('fabric name')}
                      value={enteredFabric}
                      onChange={e => {setEnteredFabric(e.target.value); setFieldValue('fabric', e.target.value);}}
                    />
                    {errors.fabric && touched.fabric ? (
                      <div>{errors.fabric}</div>
                    ) : null}
                  </div>
                  <div className={css.formItem}>
                    <label htmlFor="description">{t('description')}</label>
                    <Field
                      as="textarea"
                      rows="3"
                      className={errors.description && touched.description ? `${css.field} ${css.formError}` : css.field}
                      id="description"
                      name="description"
                      placeholder={t('description')}
                      value={enteredDescription}
                      onChange={e => {setEnteredDescription(e.target.value); setFieldValue('description', e.target.value);}}
                    />
                    {errors.description && touched.description ? (
                      <div>{errors.description}</div>
                    ) : null}
                  </div>
                  <div className={css.formItem}>
                    <label htmlFor="number">{t('number')}</label>
                    <Field
                      className={errors.number && touched.number ? `${css.field} ${css.formError}` : css.field}
                      id="number"
                      name="number"
                      placeholder="125"
                      value={enteredNumber}
                      onChange={e => {setEnteredNumber(e.target.value); setFieldValue('number', e.target.value);}}
                    />
                    {errors.number && touched.number ? (
                      <div>{errors.number}</div>
                    ) : null}
                  </div>
                  <div className={css.formItem}>
                    <label htmlFor="adress">{t('adress')}</label>
                    <Field
                      className={errors.adress && touched.adress ? `${css.field} ${css.formError}` : css.field}
                      id="adress"
                      name="adress"
                      placeholder={t('Kiev, Kyrylivska street, 103')}
                      value={enteredAdress}
                      onChange={e => {setEnteredAdress(e.target.value); setFieldValue('adress', e.target.value);}}
                    />
                    {errors.adress && touched.adress ? (
                      <div>{errors.adress}</div>
                    ) : null}
                  </div>
                  <div className={css.formItem}>
                    <label htmlFor="rest">{t('rest')}</label>
                    <Field
                      className={errors.rest && touched.rest ? `${css.field} ${css.formError}` : css.field}
                      id="rest"
                      name="rest"
                      placeholder="21000"
                      value={enteredRest}
                      onChange={e => {setEnteredRest(e.target.value); setFieldValue('rest', e.target.value);}}
                    />
                    {errors.rest && touched.rest ? (
                      <div>{errors.rest}</div>
                    ) : null}
                  </div>
                  <div className={css.formItem}>
                    <label htmlFor="deadline">{t('deadline')}</label>
                    <Field
                      className={errors.deadline && touched.deadline ? `${css.field} ${css.formError}` : css.field}
                      id="deadline"
                      name="deadline"
                      placeholder="21"
                      value={enteredDeadline}
                      onChange={e => {setEnteredDeadline(e.target.value); setFieldValue('deadline', e.target.value);}}
                    />
                    {errors.deadline && touched.deadline ? (
                      <div>{errors.deadline}</div>
                    ) : null}
                  </div>
                  <div className={css.formItem}>
                    <label htmlFor="files">{t('add new images')}</label>
                    <Field
                      className={css.field}
                      id="files"
                      name="files"
                      type="file"
                      onChange={handleFileChange}
                      multiple
                    />
                  </div>
                  <button type="submit" className={css.btn}>
                    {isPending ? (
                      <PulseLoader color="#c8c19b" size="10px" />
                    ) : (
                      `${t('submit')}`
                    )}
                  </button>
                </Form>
                )}
              </Formik>
            </div>
          </>
        }
      />
    </div>
  );
};
