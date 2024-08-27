import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../../../redux/products/operations';
import { selectActiveProduct } from '../../../redux/products/selectors';
import css from './AdminMenu.module.css';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PopUp } from 'components/PopUp/PopUp';
import { Formik, Field, Form, FieldArray } from 'formik';
import axios from 'axios';
import { selectAllComponents } from '../../../redux/components/selectors';
import Select from 'react-select';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

export const AdminMenu = id => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const product = useSelector(selectActiveProduct);
  const components = useSelector(selectAllComponents).array;
  const initialComponents =
    product.components.length > 0 ? product.components : [''];
  let componentList = [];
  let initialComponentId = [];
  let initialComponentQuantity = [];

  try {
    components.forEach(component => {
      componentList.push({
        value: component._id,
        label: `${component.name}/${component.units}`,
      });
    });
  } catch {}

  try {
    initialComponents.forEach(component => {
      initialComponentId.push(component.id);
      initialComponentQuantity.push(component.quantity);
    });
  } catch {}

  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [selectedComponents, setSelectedComponents] = useState([
    ...initialComponentId,
  ]);
  const [selectedQuantity, setSelectedQuantity] = useState([
    ...initialComponentQuantity,
  ]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  useEffect(() => {
    setSelectedComponents([...initialComponentId]);
    setSelectedQuantity([...initialComponentQuantity]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalEditOpen]);

  const handleDelete = () => {
    dispatch(deleteProduct(id));
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

  const getSelectLabel = id => {
    try {
      const placeholder = componentList.find(c => c.value === id).label;
      return placeholder;
    } catch {
      return 'Select...';
    }
  };

  const addComponentField = () => {
    setSelectedComponents(prevState => [...prevState, '']);
    setSelectedQuantity(prevState => [...prevState, '']);
  };

  const removeComponentField = componentId => {
    setSelectedComponents(prevState =>
      prevState.filter(id => id !== componentId)
    );
    setSelectedQuantity(prevState =>
      prevState.filter((_, i) => selectedComponents[i] !== componentId)
    );
  };

  const handleFileChange = event => {
    setSelectedFiles([...event.target.files]);
  };

  return (
    <div>
      <button onClick={openDeleteModal} className={css.btn}>
        {t('delete')}
      </button>
      <button className={css.btn} onClick={openEditModal}>
        {t('edit')}
      </button>
      <PopUp
        isOpen={isModalEditOpen}
        close={closeEditModal}
        className={css.modalContent}
        body={
          <>
            <p>{t('edit mode')}</p>
            <Formik
              initialValues={{
                name: product.name,
                dimensions: {
                  width: product.dimensions.width,
                  height: product.dimensions.height,
                  depth: product.dimensions.depth,
                },
                description: product.description,
                basePrice: product.basePrice,
                components: selectedComponents,
                quantity: selectedQuantity,
                images: product.images,
              }}
              onSubmit={async values => {
                try {
                  let formData = new FormData();
                  let componentsArray = [];
                  values.images.forEach((image, index) => {
                    formData.append(`images[${index}]`, values.images[index]);
                  });
                  selectedFiles.forEach(file => {
                    formData.append('file', file);
                  });
                  const dimensionsJSON = JSON.stringify(values.dimensions);
                  formData.append('dimensions', dimensionsJSON);
                  formData.append('name', values.name);
                  formData.append('description', values.description);
                  formData.append('basePrice', values.basePrice);
                  formData.append('_id', id.id);
                  selectedComponents.forEach((component, index) => {
                    const componentId = component;
                    const quantity = selectedQuantity[index];
                    componentsArray.push({ id: componentId, quantity });
                  });
                  const componentsJSON = JSON.stringify(componentsArray);
                  formData.append('components', componentsJSON);
                  await axios.post('/collections/update', formData, {
                    headers: {
                      'Content-Type': 'multipart/form-data',
                    },
                  });
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
                  <label htmlFor="dimensions.width">{t('width')}</label>
                  <Field
                    className={css.field}
                    id="dimensions.width"
                    name="dimensions.width"
                    placeholder="Width"
                  />
                </div>
                <div className={css.formItem}>
                  <label htmlFor="dimensions.depth">{t('depth')}</label>
                  <Field
                    className={css.field}
                    id="dimensions.depth"
                    name="dimensions.depth"
                    placeholder="Depth"
                  />
                </div>
                <div className={css.formItem}>
                  <label htmlFor="dimensions.height">{t('height')}</label>
                  <Field
                    className={css.field}
                    id="dimensions.height"
                    name="dimensions.height"
                    placeholder="Height"
                  />
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
                  <label htmlFor="basePrice">{t('base price')}</label>
                  <Field
                    className={css.field}
                    id="basePrice"
                    name="basePrice"
                    placeholder="12500"
                  />
                </div>
                <div className={css.formItem}>
                  <FieldArray
                    name="images"
                    render={arrayHelpers => (
                      <div className={css.field}>
                        {arrayHelpers.form.values.images.map((image, index) => (
                          <div key={index} className={css.inputItem}>
                            <img src={image} alt={image} width={'200px'} />
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
                <div className={css.formItem}>
                  <FieldArray
                    name="components"
                    render={arrayHelpers => (
                      <div>
                        {selectedComponents.map((componentId, index) => (
                          <div key={componentId} className={css.inputArray}>
                            <Field
                              component={Select}
                              className={css.selectComponent}
                              name={`components.${index}`}
                              onChange={e =>
                                setSelectedComponents(prevState => {
                                  const updatedComponents = [...prevState];
                                  updatedComponents[index] = e.value;
                                  return updatedComponents;
                                })
                              }
                              options={componentList}
                              placeholder={getSelectLabel(componentId)}
                            ></Field>
                            <Field
                              className={`${css.field} ${css.quantityField}`}
                              name={`quantity.${index}`}
                              value={selectedQuantity[index] || ''}
                              onChange={e =>
                                setSelectedQuantity(prevState => {
                                  const updatedComponents = [...prevState];
                                  updatedComponents[index] = e.target.value;
                                  return updatedComponents;
                                })
                              }
                              placeholder="Quantity"
                            />
                            {selectedComponents.length > 1 ? (
                              <button
                                className={css.minBtn}
                                type="button"
                                onClick={() =>
                                  removeComponentField(componentId)
                                }
                              >
                                -
                              </button>
                            ) : (
                              <></>
                            )}
                            {index === selectedComponents.length - 1 && (
                              <button
                                className={css.minBtn}
                                type="button"
                                onClick={() => addComponentField()}
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
                <button
                  type="submit"
                  className={`${css.btn} ${css.modalSubmitButton}`}
                >
                  {t('submit')}
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
    </div>
  );
};
