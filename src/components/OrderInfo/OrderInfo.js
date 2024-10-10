import css from './OrderInfo.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PulseLoader from 'react-spinners/PulseLoader';
import axios from 'axios';
import Select from 'react-select';
import svgIcons from '../../images/icons.svg';
import { Formik, Field, Form, FieldArray } from 'formik';
import { selectActiveOrder } from '../../redux/orders/selectors';
import { selectUser } from '../../redux/auth/selectors';
import { setActiveOrder, archiveOrder } from '../../redux/orders/operations';
import { PopUp } from 'components/PopUp/PopUp';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Fancybox from 'components/Fancybox/Fancybox';
import Carousel from 'components/Fancybox/Carousel';

export const OrderInfo = ({ id }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const order = useSelector(selectActiveOrder);
  const user = useSelector(selectUser);
  const location = useLocation();
  const navigate = useNavigate();
  const backLinkHref = location.state?.from ?? '/orders';
  const statuses = [
    { value: '', label: `${t('not ordered')}` },
    { value: 'ordered', label: `${t('ordered')}` },
    { value: 'received', label: `${t('received')}` },
  ];
  let initialFabricStatus = !order.fabricStatus
    ? { value: '', label: `${t('not ordered')}` }
    : { value: '', label: `${t(order.fabricStatus)}` };

  useEffect(() => {}, [order]);

  function dateToString(date) {
    const d = new Date(date);
    const month = d.getMonth() + 1;
    const dateString = `${d.getDate().toString().padStart(2, '0')}.${month
      .toString()
      .padStart(2, '0')}.${d.getFullYear()}`;
    return dateString;
  }

  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  if (order.fabricStatus === 'ordered') {
    initialFabricStatus = { value: 'ordered', label: `${t('ordered')}` };
  } else if (order.fabricStatus === 'received') {
    initialFabricStatus = { value: 'received', label: `${t('received')}` };
  }

  const openEditModal = () => {
    setIsModalEditOpen(true);
    document.body.classList.add('modal-open');
    setSelectedFiles([]);
  };
  const closeEditModal = () => {
    setIsModalEditOpen(false);
    document.body.classList.remove('modal-open');
  };

  const handleFileChange = event => {
    setSelectedFiles([...event.target.files]);
  };

  const sewnToggle = async e => {
    setIsLoading(true);
    let orderStatus = order.orderStatus;
    let fabricStatus = order.fabricStatus;
    let sewnStatus = order.coverStatus;
    let frameStatus = order.frameStatus;

    if (e.value === '') {
      fabricStatus = '';
    } else if (e.value) {
      fabricStatus = e.value;
    }

    if (e.target) {
      if (e.target.name === 'isSewn') {
        sewnStatus = order.coverStatus !== 'TRUE' ? 'TRUE' : '';
      } else if (e.target.name === 'frame') {
        frameStatus = order.frameStatus !== 'TRUE' ? 'TRUE' : '';
      } else if (e.target.name === 'order') {
        orderStatus = order.orderStatus !== 'TRUE' ? 'TRUE' : '';
      }
    }

    let formData = new FormData();
    formData.append('group', order.group);
    formData.append('size', order.size);
    formData.append('name', order.name);
    formData.append('fabric', order.fabric);
    formData.append('description', order.description);
    formData.append('base', order.base);
    formData.append('deliveryDate', order.deliveryDate);
    formData.append('innerPrice', order.innerPrice);
    formData.append('number', order.number);
    formData.append('dealer', order.dealer);
    formData.append('deadline', order.deadline);
    formData.append('dateOfOrder', dateToString(order.dateOfOrder));
    formData.append('adress', order.adress);
    formData.append('additional', order.additional);
    formData.append('rest', order.rest);
    formData.append('plannedDeadline', dateToString(order.plannedDeadline));
    formData.append('orderStatus', orderStatus);
    formData.append('_id', order._id);
    order.images.forEach((image, index) => {
      formData.append(`images[${index}]`, order.images[index]);
    });
    formData.append('fabricStatus', fabricStatus);
    formData.append('coverStatus', sewnStatus);
    formData.append('frameStatus', frameStatus);

    const response = await axios.post('/orders/update', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    dispatch(setActiveOrder(response.data));
    setIsLoading(false);
  };

  const sendToArchive = async () => {
    console.log(order._id);
    const res = await dispatch(archiveOrder(order._id));
    console.log(res);
    navigate('/orders', { replace: true });
  };

  return (
    <div className={css.wrapper}>
      <Link to={backLinkHref}>
        <button className={`${css.btn} ${css.backBtn}`}>
          <svg className={css.backIcon}>
            <use href={`${svgIcons}#icon-arrow-right`} width={'32px'} />
          </svg>
        </button>
      </Link>
      <p className={css.orderNumber}>{order.number}</p>
      <div className={css.description}>
        <p className={css.orderName}>
          {order.group} {order.name}
        </p>
        <p className={css.orderSize}>
          {t('size')}: {order.size}
        </p>
        <p className={css.orderFabric}>
          {t('fabric')}: {order.fabric}
        </p>
        <p className={css.orderDescription}>
          {t('description')}: {order.description}
        </p>
        {user.description === 'manager' ||
          (user.description === 'administrator' && (
            <p className={css.orderDescription}>
              {t('inner price')}: {order.innerPrice}
            </p>
          ))}
        <p className={css.orderDeadline}>
          {t('deadline')}: {dateToString(order.plannedDeadline)}
        </p>
        <p>{order.dealer}</p>
        {user.description === 'manager' ||
          (user.description === 'administrator' && (
            <div>
              <p className={css.orderAdress}>
                {t('adress')}: {order.adress}
              </p>
              <p className={css.orderRest}>
                {t('rest')}: {order.rest}
              </p>
            </div>
          ))}
      </div>
      {order.images && order.images.length !== 0 ? (
        <Fancybox
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >
          <Carousel options={{ infinite: false }}>
            {order.images.map(imageId => (
              <div
                key={imageId}
                className="f-carousel__slide"
                data-fancybox="gallery"
                data-src={`https://lh3.googleusercontent.com/d/${imageId}=w800?authuser=0`}
                // data-thumb-src={`https://lh3.googleusercontent.com/d/${imageId}=w800?authuser=0`}
              >
                <img
                  src={`https://lh3.googleusercontent.com/d/${imageId}=w800?authuser=0`}
                  alt={imageId}
                  width="auto"
                  height="500"
                />
              </div>
            ))}
          </Carousel>
        </Fancybox>
      ) : (
        <></>
      )}
      {user.description === 'administrator' ? (
        <div className={css.optionWrapper}>
          <button className={css.btn} onClick={openEditModal}>
            {t('edit')}
          </button>
          <Select
            className={css.fabricStatusSelector}
            name="fabricStatusSelector"
            id="fabricStatusSelector"
            onChange={e => sewnToggle(e)}
            options={statuses}
            defaultValue={initialFabricStatus}
            placeholder={t('fabric')}
          ></Select>
          <button
            name="isSewn"
            className={
              order.coverStatus === '' ? css.btn : `${css.btn} ${css.activeBtn}`
            }
            onClick={e => sewnToggle(e)}
          >
            {isLoading ? (
              <PulseLoader color="#c8c19b" size="10px" />
            ) : (
              `${t('is sewn')}`
            )}
          </button>
          <button
            name="frame"
            className={
              order.frameStatus === '' ? css.btn : `${css.btn} ${css.activeBtn}`
            }
            onClick={e => sewnToggle(e)}
          >
            {isLoading ? (
              <PulseLoader color="#c8c19b" size="10px" />
            ) : (
              `${t('frame is done')}`
            )}
          </button>
          <button
            name="order"
            className={
              order.orderStatus === '' ? css.btn : `${css.btn} ${css.activeBtn}`
            }
            onClick={e => sewnToggle(e)}
          >
            {isLoading ? (
              <PulseLoader color="#c8c19b" size="10px" />
            ) : (
              `${t('order is done')}`
            )}
          </button>
          <button name="done" className={css.btn} onClick={sendToArchive}>
            {isLoading ? (
              <PulseLoader color="#c8c19b" size="10px" />
            ) : (
              `${t('to archive')}`
            )}
          </button>
        </div>
      ) : (
        <></>
      )}
      {user.description === 'manager' ? (
        <div className={css.optionWrapper}>
          <button className={css.btn} onClick={openEditModal}>
            {t('edit')}
          </button>
          <Select
            className={css.fabricStatusSelector}
            name="fabricStatusSelector"
            id="fabricStatusSelector"
            onChange={e => sewnToggle(e)}
            options={statuses}
            defaultValue={initialFabricStatus}
            placeholder={t('fabric')}
          ></Select>
          <button
            name="order"
            className={
              order.orderStatus === '' ? css.btn : `${css.btn} ${css.activeBtn}`
            }
            onClick={e => sewnToggle(e)}
          >
            {isLoading ? (
              <PulseLoader color="#c8c19b" size="10px" />
            ) : (
              `${t('order is done')}`
            )}
          </button>
          <button name="done" className={css.btn} onClick={sendToArchive}>
            {isLoading ? (
              <PulseLoader color="#c8c19b" size="10px" />
            ) : (
              `${t('to archive')}`
            )}
          </button>
        </div>
      ) : (
        <></>
      )}
      {user.description === 'seamstress' ? (
        <div className={css.optionWrapper}>
          <button
            name="isSewn"
            className={
              order.coverStatus === '' ? css.btn : `${css.btn} ${css.activeBtn}`
            }
            onClick={e => sewnToggle(e)}
          >
            {isLoading ? (
              <PulseLoader color="#c8c19b" size="10px" />
            ) : (
              `${t('is sewn')}`
            )}
          </button>
        </div>
      ) : (
        <></>
      )}
      {user.description === 'carpenter' ? (
        <div className={css.optionWrapper}>
          <button
            name="frame"
            className={
              order.frameStatus === '' ? css.btn : `${css.btn} ${css.activeBtn}`
            }
            onClick={e => sewnToggle(e)}
          >
            {isLoading ? (
              <PulseLoader color="#c8c19b" size="10px" />
            ) : (
              `${t('frame is done')}`
            )}
          </button>
        </div>
      ) : (
        <></>
      )}
      {user.description === 'upholsterer' ? (
        <div className={css.optionWrapper}>
          <button
            name="order"
            className={
              order.orderStatus === '' ? css.btn : `${css.btn} ${css.activeBtn}`
            }
            onClick={e => sewnToggle(e)}
          >
            {isLoading ? (
              <PulseLoader color="#c8c19b" size="10px" />
            ) : (
              `${t('order is done')}`
            )}
          </button>
        </div>
      ) : (
        <></>
      )}
      <PopUp
        isOpen={isModalEditOpen}
        close={closeEditModal}
        className={css.modalContent}
        body={
          <>
            <p>Edit mode</p>
            <Formik
              initialValues={{
                group: order.group,
                size: order.size,
                name: order.name,
                fabric: order.fabric,
                description: order.description,
                base: order.base,
                deliveryDate: order.deliveryDate,
                innerPrice: order.innerPrice,
                number: order.number,
                dealer: order.dealer,
                deadline: order.deadline,
                dateOfOrder: dateToString(order.dateOfOrder),
                adress: order.adress,
                additional: order.additional,
                rest: order.rest,
                plannedDeadline: dateToString(order.plannedDeadline),
                orderStatus: order.orderStatus,
                _id: order._id,
                images: order.images,
                fabricStatus: order.fabricStatus,
                coverStatus: order.coverStatus,
                frameStatus: order.frameStatus,
              }}
              onSubmit={async values => {
                try {
                  setIsLoading(true);
                  let formData = new FormData();
                  formData.append('group', values.group);
                  formData.append('size', values.size);
                  formData.append('name', values.name);
                  formData.append('fabric', values.fabric);
                  formData.append('description', values.description);
                  formData.append('base', values.base);
                  formData.append('deliveryDate', values.deliveryDate);
                  formData.append('innerPrice', values.innerPrice);
                  formData.append('number', values.number);
                  formData.append('dealer', values.dealer);
                  formData.append('deadline', values.deadline);
                  formData.append('dateOfOrder', values.dateOfOrder);
                  formData.append('adress', values.adress);
                  formData.append('additional', values.additional);
                  formData.append('rest', values.rest);
                  formData.append('plannedDeadline', values.plannedDeadline);
                  formData.append('orderStatus', values.orderStatus);
                  formData.append('_id', values._id);
                  values.images.forEach((image, index) => {
                    formData.append(`images[${index}]`, values.images[index]);
                  });
                  formData.append('fabricStatus', values.fabricStatus);
                  formData.append('coverStatus', values.coverStatus);
                  formData.append('frameStatus', values.frameStatus);
                  selectedFiles.forEach(file => {
                    formData.append('file', file);
                  });

                  const response = await axios.post(
                    '/orders/update',
                    formData,
                    {
                      headers: {
                        'Content-Type': 'multipart/form-data',
                      },
                    }
                  );
                  dispatch(setActiveOrder(response.data));
                  setIsLoading(false);
                  closeEditModal();
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              <Form className={css.formWrapper}>
                <div className={css.formItem}>
                  <label htmlFor="group">{t('group')}</label>
                  <Field className={css.field} id="group" name="group" />
                </div>
                <div className={css.formItem}>
                  <label htmlFor="size">{t('size')}</label>
                  <Field className={css.field} id="size" name="size" />
                </div>
                <div className={css.formItem}>
                  <label htmlFor="name">{t('order name')}</label>
                  <Field className={css.field} id="name" name="name" />
                </div>
                <div className={css.formItem}>
                  <label htmlFor="fabric">{t('fabric')}</label>
                  <Field className={css.field} id="fabric" name="fabric" />
                </div>
                <div className={css.formItem}>
                  <label htmlFor="description">{t('description')}</label>
                  <Field
                    className={css.field}
                    id="description"
                    name="description"
                    placeholder="Description"
                  />
                </div>
                <div className={css.formItem}>
                  <label htmlFor="base">{t('base')}</label>
                  <Field className={css.field} id="base" name="base" />
                </div>
                <div className={css.formItem}>
                  <label htmlFor="innerPrice">{t('inner price')}</label>
                  <Field
                    className={css.field}
                    id="innerPrice"
                    name="innerPrice"
                  />
                </div>
                <div className={css.formItem}>
                  <label htmlFor="number">{t('number')}</label>
                  <Field className={css.field} id="number" name="number" />
                </div>
                <div className={css.formItem}>
                  <label htmlFor="adress">{t('adress')}</label>
                  <Field className={css.field} id="adress" name="adress" />
                </div>
                <div className={css.formItem}>
                  <label htmlFor="additional">{t('additional')}</label>
                  <Field
                    className={css.field}
                    id="additional"
                    name="additional"
                  />
                </div>
                <div className={css.formItem}>
                  <label htmlFor="rest">{t('rest')}</label>
                  <Field className={css.field} id="rest" name="rest" />
                </div>
                <div className={css.formItem}>
                  <label htmlFor="plannedDeadline">
                    {t('planned deadline')}
                  </label>
                  <Field
                    className={css.field}
                    id="plannedDeadline"
                    name="plannedDeadline"
                  />
                </div>
                <div className={css.formItem}>
                  <FieldArray
                    name="images"
                    render={arrayHelpers => (
                      <div className={css.field}>
                        {arrayHelpers.form.values.images.map((image, index) => (
                          <div key={index} className={css.inputItem}>
                            <img
                              src={`https://lh3.googleusercontent.com/d/${image}=w200?authuser=0`}
                              alt={image}
                            />
                            <button
                              className={css.btn}
                              type="button"
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              {t('delete')}
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  />
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
                <button
                  type="submit"
                  className={`${css.btn} ${css.modalSubmitButton}`}
                >
                  {isLoading ? (
                    <PulseLoader color="#c8c19b" size="10px" />
                  ) : (
                    `${t('submit')}`
                  )}
                </button>
              </Form>
            </Formik>
          </>
        }
      />
    </div>
  );
};
