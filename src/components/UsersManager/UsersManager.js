import { useDispatch, useSelector } from 'react-redux';
import css from './UsersManager.module.css';
import { useEffect, useState } from 'react';
import { getAllUsers, deleteUser } from '../../redux/user/operations';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { PopUp } from 'components/PopUp/PopUp';
import { Field, Form, Formik } from 'formik';
import axios from 'axios';

export const UsersManager = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getAllUsers());
    toast.success('All users fetch requested');
  }, [dispatch]);

  const users = useSelector(state => state.user.users);
  const isLoading = useSelector(state => state.user.isLoading);
  const [visibleUser, setVisibleUser] = useState('');
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const targetUser = users
    ? users.find(user => user._id.includes(visibleUser))
    : {
        name: '',
        description: '',
        organization: 'demo',
        access: {
          demo: true,
          homeIs: false,
          mebTown: false,
          millini: false,
          misazh: false,
          other: false,
          sweetHome: false,
        },
      };

  const openEditModal = () => {
    setIsModalEditOpen(true);
    document.body.classList.add('modal-open');
  };

  const closeEditModal = () => {
    setIsModalEditOpen(false);
    document.body.classList.remove('modal-open');
  };

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
    document.body.classList.add('modal-open');
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    document.body.classList.remove('modal-open');
  };

  const visibleToggle = id => {
    if (visibleUser !== id) {
      setVisibleUser(id);
    } else {
      setVisibleUser('');
    }
  };

  const handleDelete = id => {
    dispatch(deleteUser(id));
  };

  return (
    <div className={css.section}>
      <h3 className={css.header}>Users list</h3>
      {!isLoading ? (
        <ul>
          {users &&
            users.map(user => (
              <li key={user._id} className={css.userCard}>
                <div
                  className={css.firstBlock}
                  onClick={() => visibleToggle(user._id)}
                >
                  <p className={css.userName}>{user.name}</p>
                  <p className={css.userRole}>Role: {user.description}</p>
                </div>
                <div
                  className={
                    visibleUser === user._id
                      ? css.secondBlock
                      : `${css.secondBlock} ${css.hidden}`
                  }
                >
                  <hr />
                  <p>Email: {user.email}</p>
                  <p>Organization: {user.organization}</p>
                  <p>Access:</p>
                  <ul className={css.accessList}>
                    {Object.entries(user.access).map(([key, value]) => (
                      <li key={key} className={css.accessItem}>
                        <p className={css.accessKey}>{key}: </p>
                        <p
                          className={
                            value
                              ? `${css.accessValue} ${css.accessTrue}`
                              : css.accessValue
                          }
                        >
                          {value ? '+' : '-'}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <div className={css.adminBlock}>
                    <button
                      onClick={openDeleteModal}
                      className={`${css.btn} ${css.delBtn}`}
                    >
                      {t('delete')}
                    </button>
                    <button className={css.btn} onClick={openEditModal}>
                      {t('edit')}
                    </button>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
      <PopUp
        isOpen={isModalEditOpen}
        close={closeEditModal}
        className={css.modalContent}
        body={
          <>
            <p>{t('edit mode')}</p>
            <Formik
              initialValues={{
                name: targetUser.name,
                description: targetUser.description,
                organization: targetUser.organization,
                access: targetUser.access,
              }}
              onSubmit={values => {
                // Обработка отправки данных
                console.log('Submitted values:', values);
              }}
            >
              {({ values, handleChange }) => (
                <Form className={css.formWrapper}>
                  <div className={css.formItem}>
                    <label htmlFor="name">Name:</label>
                    <Field
                      id="name"
                      name="name"
                      placeholder="Enter name"
                      type="text"
                      value={values.name}
                      onChange={handleChange}
                      className={css.field}
                    />
                  </div>

                  <div className={css.formItem}>
                    <label htmlFor="description">Role:</label>
                    <Field
                      id="description"
                      name="description"
                      as="select"
                      value={values.description}
                      onChange={handleChange}
                      className={css.field}
                    >
                    <option value="administrator">administrator</option>
                    <option value="manager">manager</option>
                    <option value="carpenter">carpenter</option>
                    <option value="seamstress">seamstress</option>
                    <option value="upholsterer">upholsterer</option>
                    </Field>
                  </div>

                  <div className={css.formItem}>
                    <label htmlFor="organization">Organization:</label>
                    <Field
                      id="organization"
                      name="organization"
                      as="select"
                      value={values.organization}
                      onChange={handleChange}
                      className={css.field}
                    >
                      <option value="demo">demo</option>
                      <option value="mebtown">mebtown</option>
                      <option value="misazh">misazh</option>
                      <option value="millini">millini</option>
                      <option value="homeis">homeis</option>
                      <option value="yura">yura</option>
                      <option value="sweethome">sweethome</option>
                      {/* Добавить другие опции, если необходимо */}
                    </Field>
                  </div>

                  <div className={css.formItem}>
                    <h3>Access:</h3>
                    {Object.keys(values.access).map(key => (
                      <div
                        key={key}
                        className={`${css.field} ${css.checkboxField}`}
                      >
                        <label className={css.checkboxLabel}>
                          {key}
                          <Field
                            type="checkbox"
                            name={`access.${key}`}
                            checked={values.access[key]}
                            onChange={handleChange}
                          />
                        </label>
                      </div>
                    ))}
                  </div>

                  <button
                    type="submit"
                    className={`${css.btn} ${css.modalSubmitButton}`}
                  >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </>
        }
      />
      <PopUp
        isOpen={isDeleteModalOpen}
        close={closeDeleteModal}
        body={
          <>
            <p>{t('are you sure')}???</p>
            <div className={css.delModalWrapper}>
              <button onClick={closeDeleteModal} className={css.btn}>
                {t('cancel')}
              </button>
              <button
                onClick={handleDelete}
                className={`${css.btn} ${css.delBtn}`}
              >
                {t('delete')}
              </button>
            </div>
          </>
        }
      />
    </div>
  );
};
