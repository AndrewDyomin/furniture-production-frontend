import css from './DruftInfo.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PulseLoader from 'react-spinners/PulseLoader';
import axios from 'axios';
import svgIcons from '../../images/icons.svg';
import { Formik, Field, Form, FieldArray } from 'formik';
import { selectActiveDruft } from '../../redux/drufts/selectors';
import { selectUser } from '../../redux/auth/selectors';
import { setActiveDruft, deleteDruft } from '../../redux/drufts/operations';
import { PopUp } from 'components/PopUp/PopUp';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import Fancybox from 'components/Fancybox/Fancybox';
import Carousel from 'components/Fancybox/Carousel';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(9, 9, 9, 0.75)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    position: 'relative',
    top: 'auto',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
    minWidth: '300px',
    maxWidth: '80%',
    width: 'auto',
    maxHeight: '80%',
    padding: '50px 20px',
    borderRadius: '12px',
    border: '2px solid black',
    backgroundColor: 'FFF',
    transition: 'top 0.3s ease-in-out',
  },
};

export const DruftInfo = ({ id }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const druft = useSelector(selectActiveDruft);
  const user = useSelector(selectUser);
  const location = useLocation();
  const navigate = useNavigate();
  const backLinkHref = location.state?.from ?? '/drufts';

  useEffect(() => {}, [druft]);

  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isSliderModalOpen, setIsSliderModalOpen] = useState(false);

  const openEditModal = () => {
    setIsModalEditOpen(true);
    document.body.classList.add('modal-open');
    setSelectedFiles([]);
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

  const handleFileChange = event => {
    setSelectedFiles([...event.target.files]);
  };

  const handleDelete = () => {
    dispatch(deleteDruft(druft._id));
    navigate('/drufts', { replace: true });
  };

  const currentImagesArray = druft.imageArrays.find(
    item => item.role === user.description
  ) || { images: [] };

  return (
    <div className={css.wrapper}>
      <Link to={backLinkHref}>
        <button className={`${css.btn} ${css.backBtn}`}>
          <svg className={css.backIcon}>
            <use href={`${svgIcons}#icon-arrow-right`} width={'32px'} />
          </svg>
        </button>
      </Link>
      <p className={css.druftName}>{druft.name}</p>
      <p className={css.druftDcrptn}>{druft.description}</p>
      {user.description !== 'administrator' &&
        currentImagesArray.images.length > 0 && (
          <Fancybox
            options={{
              Carousel: {
                infinite: false,
              },
            }}
          >
            <Carousel options={{ infinite: false }}>
              {currentImagesArray.images.map(imageId => (
                <div
                  key={imageId}
                  className="f-carousel__slide"
                  data-fancybox="gallery"
                  data-src={`https://lh3.googleusercontent.com/d/${imageId}=w800?authuser=0`}
                  data-thumb-src={`https://lh3.googleusercontent.com/d/${imageId}=w800?authuser=0`}
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
        )}
      {user.description === 'administrator' &&
        druft.imageArrays.length > 0 &&
        druft.imageArrays.map(role => (
          <div key={role.role}>
            <p>{role.role}</p>
            <Fancybox
              options={{
                Carousel: {
                  infinite: false,
                },
              }}
            >
              <Carousel options={{ infinite: false }}>
                {role.images.map(imageId => (
                  <div
                    key={imageId}
                    className="f-carousel__slide"
                    data-fancybox="gallery"
                    data-src={`https://lh3.googleusercontent.com/d/${imageId}=w800?authuser=0`}
                    data-thumb-src={`https://lh3.googleusercontent.com/d/${imageId}=w800?authuser=0`}
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
          </div>
        ))}
      <div className={css.optionsWrapper}>
        <button className={css.btn} onClick={openEditModal}>
          {t('edit')}
        </button>
        <button
          className={`${css.btn} ${css.delBtn}`}
          onClick={openDeleteModal}
        >
          {t('delete')}
        </button>
      </div>
      <PopUp
        isOpen={isModalEditOpen}
        close={closeEditModal}
        className={css.modalContent}
        body={
          <>
            <p>{t('edit mode')}</p>
            <Formik
              initialValues={{
                name: druft.name,
                description: druft.description,
                _id: druft._id,
                images: currentImagesArray.images,
              }}
              onSubmit={async values => {
                try {
                  setIsLoading(true);
                  let formData = new FormData();
                  formData.append('name', values.name);
                  formData.append('description', values.description);
                  formData.append('_id', values._id);
                  formData.append('imd', currentImagesArray._id);
                  values.images.forEach((image, index) => {
                    formData.append(`images[${index}]`, values.images[index]);
                  });
                  selectedFiles.forEach(file => {
                    formData.append('file', file);
                  });

                  const response = await axios.post(
                    '/drufts/update',
                    formData,
                    {
                      headers: {
                        'Content-Type': 'multipart/form-data',
                      },
                    }
                  );
                  dispatch(setActiveDruft(response.data));
                  setIsLoading(false);
                  closeEditModal();
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              <Form className={css.formWrapper}>
                <div className={css.formItem}>
                  <label htmlFor="name">{t('unit name')}</label>
                  <Field className={css.field} id="name" name="name" />
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
      <Modal
        isOpen={isSliderModalOpen}
        onRequestClose={() => {
          setIsSliderModalOpen(false);
        }}
        style={customStyles}
        ariaHideApp={false}
      >
        <button
          className={css.modalCloseButton}
          type="button"
          onClick={() => {
            setIsSliderModalOpen(false);
          }}
        >
          <svg className={css.menuIcon}>
            <use href={`${svgIcons}#icon-close-circle`}></use>
          </svg>
        </button>
      </Modal>
    </div>
  );
};
