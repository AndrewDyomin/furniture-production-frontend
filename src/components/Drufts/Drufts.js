import { PopUp } from 'components/PopUp/PopUp';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import css from './Drufts.module.css';
import { Field, Form, Formik } from 'formik';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { PulseLoader } from 'react-spinners';
import { fetchAllDrufts, setActiveDruft } from '../../redux/drufts/operations';
import { selectAllDrufts } from '../../redux/drufts/selectors';
import { Link, useLocation } from 'react-router-dom';

export const Drufts = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const location = useLocation();

  const [isModalDruftOpen, setIsModalDruftOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState('');
  //   const [enteredName, setEnteredName] = useState('');
  //   const [enteredDescription, setEnteredDescription] = useState('');

  const handleFileChange = event => {
    setSelectedFiles([...event.target.files]);
  };

  const openModal = () => {
    setIsModalDruftOpen(true);
  };

  const closeModal = () => {
    setIsModalDruftOpen(false);
  };

  useEffect(() => {
    dispatch(fetchAllDrufts());
  }, [dispatch]);

  const drufts = useSelector(selectAllDrufts).array;
  let firstLetters = [];

  if (drufts) {
    [...drufts]
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach(druft => {
        !firstLetters.includes(druft.name[0].toUpperCase()) &&
          firstLetters.push(druft.name[0].toUpperCase());
      });
  }

  return (
    <div>
      <button onClick={openModal} className={css.btn}>
        {t('add druft')}
      </button>
      <div>
        <ul className={css.list}>
          {firstLetters.map(letter => (
            <li key={letter} className={css.group}>
              <p>{letter}</p>
              <ul className={css.groupList}>
                {drufts &&
                  [...drufts]
                    .filter(druft => druft.name[0].toUpperCase() === letter)
                    .map(druft => (
                      <li key={druft._id} className={css.item}>
                        <Link
                          to={`${druft._id}`}
                          state={{ from: location }}
                          className={css.druftLink}
                          onClick={() =>
                            dispatch(
                              setActiveDruft(
                                drufts.find(el => {
                                  return el._id === druft._id;
                                })
                              )
                            )
                          }
                        >
                          <p className={css.name}>{druft.name}</p>
                        </Link>
                      </li>
                    ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <PopUp
        isOpen={isModalDruftOpen}
        close={closeModal}
        body={
          <div className={css.orderModalWrapper}>
            <Formik
              initialValues={{
                name: '',
                description: '',
              }}
              onSubmit={async (values, { resetForm }) => {
                try {
                  setIsPending(true);
                  const formData = new FormData();
                  formData.append('name', values.name);
                  formData.append('description', values.description);
                  if (selectedFiles && selectedFiles.length !== 0) {
                    selectedFiles.forEach(file => {
                      formData.append('file', file);
                    });
                  }
                  await axios.post('/drufts/add', formData, {
                    headers: {
                      'Content-Type': 'multipart/form-data',
                    },
                  });
                  toast.success('Your druft sended');
                  resetForm();
                  setIsPending(false);
                  setIsModalDruftOpen(false);
                  dispatch(fetchAllDrufts());
                } catch (error) {
                  toast.error(`${error.response.data.message}`);
                }
              }}
            >
              {() => (
                <Form className={css.formWrapper}>
                  <div className={css.formItem}>
                    <label htmlFor="name">{t('order name')}</label>
                    <Field
                      className={css.field}
                      id="name"
                      name="name"
                      placeholder="Faynee mini"
                      //   value={enteredName}
                    />
                  </div>
                  <div className={css.formItem}>
                    <label htmlFor="description">{t('description')}</label>
                    <Field
                      as="textarea"
                      rows="3"
                      className={css.field}
                      id="description"
                      name="description"
                      placeholder={t('description')}
                      //   value={enteredDescription}
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
        }
      />
    </div>
  );
};
