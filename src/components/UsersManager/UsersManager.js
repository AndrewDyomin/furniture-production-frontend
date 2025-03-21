import { useDispatch, useSelector } from 'react-redux';
import css from './UsersManager.module.css';
import { useState } from 'react';
import { deleteUser, updateUser } from '../../redux/user/operations';
import { useTranslation } from 'react-i18next';
import { PopUp } from 'components/PopUp/PopUp';
import { Field, Form, Formik } from 'formik';
import { PulseLoader } from 'react-spinners';

export const UsersManager = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const users = useSelector(state => state.user.users);
  const isLoading = useSelector(state => state.user.isLoading);
  const [visibleUser, setVisibleUser] = useState('');
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);

  let targetUser = {
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

  if (users && users.length > 0) {
    targetUser = users.find(user => user._id.includes(visibleUser))
  }

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

  const handleDelete = () => {
    dispatch(deleteUser({ _id: targetUser._id })).then(() => {
      setVisibleUser('');
    });
    setIsDeleteModalOpen(false);
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
                email: targetUser.email,
                description: targetUser.description,
                organization: targetUser.organization,
                access: targetUser.access,
                _id: targetUser._id,
              }}
              onSubmit={values => {
                setIsPending(true);
                dispatch(updateUser(values));
                closeEditModal();
                setIsPending(false);
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
                    <label htmlFor="email">Email:</label>
                    <Field
                      id="email"
                      name="email"
                      placeholder="Enter email"
                      type="text"
                      value={values.email}
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
                    <option value="guest">guest</option>
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
                      <option value="mebTown">mebtown</option>
                      <option value="misazh">misazh</option>
                      <option value="millini">millini</option>
                      <option value="homeIs">homeis</option>
                      <option value="Yura">yura</option>
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
                            className={css.checkboxField}
                          />
                        </label>
                      </div>
                    ))}
                  </div>

                  <button
                    type="submit"
                    className={`${css.btn} ${css.modalSubmitButton}`}
                  >
                    {isPending ? (
                      <PulseLoader color="#c8c19b" size="10px" />
                    ) : (
                      `${t('submit')}`
                    )}
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
