import css from './OrderInfo.module.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { Formik, Field, Form, FieldArray } from 'formik';
import { selectActiveOrder } from '../../redux/orders/selectors';
import { selectUser } from '../../redux/auth/selectors';
import { PopUp } from "components/PopUp/PopUp";

export const OrderInfo = ({ id }) => {

  const { t } = useTranslation();
  const order = useSelector(selectActiveOrder);
  const user = useSelector(selectUser);

  function dateToString(date) {
    const d = new Date(date);
    const month = d.getMonth() + 1;
    const dateString = `${d.getDate().toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${d.getFullYear()}`;
    return dateString;
  };

  // const date = new Date(order.plannedDeadline);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false)

  const openEditModal = () => {
    setIsModalEditOpen(true);
    document.body.classList.add('modal-open');
  };
  const closeEditModal = () => {
    setIsModalEditOpen(false);
    document.body.classList.remove('modal-open');
  };

  return (
    <div className={css.wrapper}>
      <p className={css.orderNumber}>{order.number}</p>
      <div className={css.description}>
        <p className={css.orderName}>{order.group} {order.name}</p>
        <p className={css.orderSize}>{t('size')}: {order.size}</p>
        <p className={css.orderFabric}>{t('fabric')}: {order.fabric}</p>
        <p className={css.orderDescription}>{t('description')}: {order.description}</p>
        <p className={css.orderDeadline}>{t('deadline')}: {dateToString(order.plannedDeadline)}</p>
        <p>{order.dealer}</p>
        {user.description === 'seamstress' || user.description === 'carpenter' || user.description === 'upholsterer' ? <></> : 
        <div>
          <p className={css.orderAdress}>{t('adress')}: {order.adress}</p>
          <p className={css.orderRest}>{t('rest')}: {order.rest}</p> 
        </div>
        }
      </div>
      {order.images && order.images.length !== 0 ? 
      <ul className={css.imagesList}>
        {order.images.map((imageId) => (
          <li key={`${imageId}`}>
            <img className={css.orderImage} src={`https://lh3.googleusercontent.com/d/${imageId}=w800?authuser=0`} alt={imageId}/>
            {/* <img src={`https://drive.google.com/thumbnail?id=${imageId}&sz=w800`} alt={imageId}/> */}
          </li>
        ))}
      </ul> 
      : <></>}
      {user.description === 'administrator' ? 
      <div>
        <button className={css.btn} onClick={openEditModal}>{t('edit')}</button>
      </div> 
      : <></>}
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
              onSubmit={async (values) => {
                  try {
                    const formData = new FormData();
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
                    formData.append('images', values.images);
                    formData.append('fabricStatus', values.fabricStatus);
                    formData.append('coverStatus', values.coverStatus);
                    formData.append('frameStatus', values.frameStatus);
                  
                    await axios.post('/orders/update', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    });
                    console.log(formData)
                    closeEditModal();
                  } catch(error) {
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
                    <Field className={css.field} id="description" name="description" placeholder="Description" />
                </div>
                <div className={css.formItem}>
                    <label htmlFor="base">{t('base')}</label>
                    <Field className={css.field} id="base" name="base" />
                </div>
                <div className={css.formItem}>
                    <label htmlFor="innerPrice">{t('inner price')}</label>
                    <Field className={css.field} id="innerPrice" name="innerPrice" />
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
                    <Field className={css.field} id="additional" name="additional" />
                </div>
                <div className={css.formItem}>
                    <label htmlFor="plannedDeadline">{t('planned deadline')}</label>
                    <Field className={css.field} id="plannedDeadline" name="plannedDeadline" />
                </div>
                <button type="submit" className={`${css.btn} ${css.modalSubmitButton}`}>{t('submit')}</button>
              </Form>
            </Formik>
          </>
        }
      />
    </div>
  );
};