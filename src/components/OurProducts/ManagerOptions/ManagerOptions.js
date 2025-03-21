import { useTranslation } from 'react-i18next';
import css from './ManagerOptions.module.css';
import Select from 'react-select';
import { fetchAllFabrics } from '../../../redux/fabrics/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import ToggleButton from 'react-toggle-button';
import axios from 'axios';
import toast from 'react-hot-toast';
import PulseLoader from 'react-spinners/PulseLoader';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

export const ManagerOptions = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.activeItem);
  const fabricItems = useSelector(state => state.fabrics.items);
  const [isPending, setIsPending] = useState(false);
  const [ProductKonva, setProductKonva] = useState(null);
  const [productWidth, setProductWidth] = useState(
    product.dimensions.width || 0
  );
  const [productDepth, setProductDepth] = useState(
    product.dimensions.depth || 0
  );
  const [mattressWidth, setMattressWidth] = useState(Number(160));
  const [mattressDepth, setMattressDepth] = useState(Number(200));
  const [standardProportions, setStandardProportions] = useState(true);
  const [headHeight, setHeadHeight] = useState('Standard');
  const [headDepth, setHeadDepth] = useState(10);
  const [tsargHeight, setTsargHeight] = useState('Standard');
  const [tsargWidth, setTsargWidth] = useState(5);
  const [angleDirection, setAngleDirection] = useState({
    value: '7',
    label: '7',
  });
  const [activeModules, setActiveModules] = useState([]);
  const [drawstrings, setDrawstrings] = useState({
    value: 'с утяжками',
    label: 'С утяжками',
  });
  const [fabricOptions, setFabricOptions] = useState([]);
  const [fabricDealer, setFabricDealer] = useState({
    value: 'не выбрано',
    label: 'Не выбрано',
  });
  const [fabricNames, setFabricNames] = useState([]);
  const [fabricName, setFabricName] = useState({
    value: 'не выбрано',
    label: 'Не выбрано',
  });
  const [comment, setComment] = useState('');
  const [seatModule, setSeatModule] = useState({});
  const [cornerModule, setCornerModule] = useState({});

  useEffect(() => {
    if (fabricItems.length === 0) {
      dispatch(fetchAllFabrics());
    }
  }, [dispatch, fabricItems.length]);

  useEffect(() => {
    if (fabricItems && fabricItems.length > 0) {
      const titles = fabricItems.map(item => ({
        value: item.title,
        label: item.title.charAt(0).toUpperCase() + item.title.slice(1),
      }));
      setFabricOptions([
        { value: 'не выбрано', label: 'Не выбрано' },
        ...titles,
      ]);
    }
  }, [fabricItems]);

  useEffect(() => {
    if (fabricDealer.value !== 'не выбрано') {
      const target = fabricItems.find(
        item => item.title === fabricDealer.value
      );
      const namesOptions = [];
      for (const fabric of target.array) {
        namesOptions.push({
          value: `${fabric.name} -$${fabric.price}`,
          label: `${
            fabric.name.charAt(0).toUpperCase() + fabric.name.slice(1)
          } -$${fabric.price}`,
        });
      }
      setFabricName({ value: 'не выбрано', label: 'Не выбрано' });
      setFabricNames([
        { value: 'не выбрано', label: 'Не выбрано' },
        ...namesOptions,
      ]);
    }
  }, [fabricDealer, fabricItems]);

  const stageContainerRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateSize = () => {
      if (stageContainerRef.current) {
        setDimensions({
          width: stageContainerRef.current.offsetWidth,
          height: stageContainerRef.current.offsetHeight,
        });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  useEffect(() => {
    const loadComponent = async () => {
      try {
        const modelModule = await import(`../Konvas/${product.name}`);
        setProductKonva(() => modelModule.default);
      } catch {
        const modelModule = await import(`../Konvas/Undefined`);
        setProductKonva(() => modelModule.default);
      }
    };

    loadComponent();
  }, [product.name, mattressWidth, mattressDepth, productWidth, productDepth]);

  const changeMattressWidth = value => {
    const difference = value - 160;
    setProductWidth(() => Number(product.dimensions.width) + difference);
    setMattressWidth(value);
  };

  const changeMattressDepth = value => {
    const difference = value - 200;
    setProductDepth(() => Number(product.dimensions.depth) + difference);
    setMattressDepth(value);
  };

  const changeHeadDepth = value => {
    if (value > headDepth) {
      const difference = value - headDepth;
      setProductDepth(() => productDepth + difference);
    } else {
      const difference = headDepth - value;
      setProductDepth(() => productDepth - difference);
    }
    setHeadDepth(value);
  };

  const changeTsargWidth = value => {
    if (value > tsargWidth) {
      const difference = value - tsargWidth;
      setProductDepth(() => productDepth + difference);
      setProductWidth(() => productWidth + difference * 2);
    } else {
      const difference = tsargWidth - value;
      setProductDepth(() => productDepth - difference);
      setProductWidth(() => productWidth - difference * 2);
    }
    setTsargWidth(value);
  };

  const productKonvaRef = useRef(null);

  const downloadScheme = () => {
    setIsPending(true);
    const image = productKonvaRef.current.getImage();
    const link = document.createElement('a');
    link.href = image;
    link.download = 'konva-image.jpg';

    link.click();
    setIsPending(false);
  };

  const sendCalc = async () => {
    setIsPending(true);
    const image = productKonvaRef.current.getImage();

    const response = await fetch(image);
    const blob = await response.blob();

    const formData = new FormData();
    formData.append('file', blob, 'konva-image.jpg');
    formData.append('_id', product._id);
    formData.append('width', productWidth);
    formData.append('depth', productDepth);
    formData.append('comment', comment);
    formData.append('name', product.name);
    formData.append('fabricDealer', fabricDealer.value);
    formData.append('fabricName', fabricName.value);
    if (product.group === 'bed') {
      formData.append('mattressWidth', mattressWidth);
      formData.append('mattressDepth', mattressDepth);
      formData.append('standardProportions', standardProportions);
    }
    if (!standardProportions && product.group === 'bed') {
      formData.append('headHeight', headHeight);
      formData.append('headDepth', headDepth);
      formData.append('tsargHeight', tsargHeight);
      formData.append('tsargWidth', tsargWidth);
    }
    if (product.costCalc.corner) {
      formData.append('angleDirection', angleDirection.value);
    }
    if (product.costCalc.drawstrings) {
      formData.append('drawstrings', drawstrings.value);
    }
    if (product.costCalc.module) {
      let modules = [];
      activeModules.map(module => modules.push({name: module.name, width: module.width}))
      formData.append('Modules', JSON.stringify(modules));
      formData.append('Standard proportions', standardProportions);
    }

    try {
      await axios.post('/calculations/send', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setIsPending(false);
      toast.success(t('Your application has been successfully sent'));
    } catch (error) {
      toast.error(error);
    }
  };

  const deleteModule = index => {
    if (activeModules[index].id !== 'BKPL') {
      const changedWidth = productWidth - activeModules[index].width;
      setProductWidth(changedWidth);
    }

    setActiveModules(prevState => [
      ...prevState.slice(0, index),
      ...prevState.slice(index + 1),
    ]);
  };

  const addModule = () => {
    const pos = seatModule.i;
    setActiveModules((prevState) => {
      const updatedModules = [...prevState];
      updatedModules.splice(pos, 0, seatModule);
      return updatedModules;
    })
    setProductWidth(prevState => prevState + seatModule.width)
  }

  const updateModuleWidth = (index, newWidth) => { 
      const oldWidth = activeModules[index].width;
    if (newWidth >= 4) {

      const difference = newWidth <= oldWidth ? oldWidth - newWidth : newWidth - oldWidth;
      setProductWidth((prevState) => newWidth <= oldWidth ? prevState - difference : prevState + difference
      );

      let resizedModules = activeModules.map((module, i) =>
          i === index ? { ...module, width: Number(newWidth) } : module
        )

      setActiveModules(resizedModules)
    }
  };

  return (
    <>
      <h3 className={css.calcHeader}>{t('cost calculation')}</h3>
      <div className={css.calcArea}>
        <div ref={stageContainerRef} className={css.schemaArea}>
          {!ProductKonva ? (
            <p>Loading...</p>
          ) : (
            <ProductKonva
              ref={productKonvaRef}
              dimensions={dimensions}
              productWidth={productWidth}
              productDepth={productDepth}
              angleDirection={angleDirection}
              activeModules={activeModules}
              setActiveModules={setActiveModules}
              mattressWidth={mattressWidth}
              mattressDepth={mattressDepth}
              headDepth={headDepth}
              setHeadDepth={setHeadDepth}
              tsargWidth={tsargWidth}
              setTsargWidth={setTsargWidth}
              standardProportions={standardProportions}
              seatModule={seatModule}
              setSeatModule={setSeatModule}
              cornerModule={cornerModule}
              setCornerModule={setCornerModule}
            />
          )}
        </div>
        <div className={css.inputsArea} id="widthInput">
          <label>
            {t('width')}
            {product.group === 'bed' && (
              <input
                className={css.sizeInput}
                disabled={true}
                value={productWidth}
              />
            )}
            {product.group !== 'bed' && (
              <input
                className={css.sizeInput}
                disabled={!standardProportions && true}
                value={productWidth ?? 100}
                onChange={e => setProductWidth(Number(e.target.value))}
              />
            )}
          </label>
          <label>
            {t('depth')}
            {product.group === 'bed' && (
              <input
                className={css.sizeInput}
                disabled={true}
                value={productDepth}
              />
            )}
            {product.group !== 'bed' && (
              <input
                className={css.sizeInput}
                defaultValue={productDepth}
                onChange={e =>
                  e.target.value >= 85 &&
                  setProductDepth(Number(e.target.value))
                }
              />
            )}
          </label>
          {product.group === 'bed' && (
            <div>
              <label>{t('sleeping area')}</label>
              <div>
                <input
                  className={`${css.sizeInput} ${css.sleepSizeInput}`}
                  defaultValue={mattressWidth}
                  onChange={e =>
                    e.target.value >= 90 &&
                    changeMattressWidth(Number(e.target.value))
                  }
                />
                {` x `}
                <input
                  className={`${css.sizeInput} ${css.sleepSizeInput}`}
                  defaultValue={mattressDepth}
                  onChange={e =>
                    e.target.value >= 90 &&
                    changeMattressDepth(Number(e.target.value))
                  }
                />
              </div>
              <div className={css.proportionsBtnWrapper}>
                <p className={css.proportionsLabel}>
                  {t('standard proportions')}
                </p>
                <ToggleButton
                  inactiveLabel={'X'}
                  activeLabel={'V'}
                  value={standardProportions}
                  onToggle={value => {
                    setStandardProportions(!value);
                  }}
                />
              </div>
              {!standardProportions && (
                <div className={css.bedDetailsWrapper}>
                  <label>
                    {t('head height')}
                    <input
                      className={css.sizeInput}
                      defaultValue={headHeight}
                      onChange={e =>
                        e.target.value >= 9 &&
                        setHeadHeight(Number(e.target.value))
                      }
                    />
                  </label>
                  <label>
                    {t('head thickness')}
                    <input
                      className={css.sizeInput}
                      defaultValue={headDepth}
                      onChange={e =>
                        e.target.value >= 9 &&
                        changeHeadDepth(Number(e.target.value))
                      }
                    />
                  </label>
                  <label>
                    {t('tsarg height')}
                    <input
                      className={css.sizeInput}
                      defaultValue={tsargHeight}
                      onChange={e =>
                        e.target.value >= 9 &&
                        setTsargHeight(Number(e.target.value))
                      }
                    />
                  </label>
                  <label>
                    {t('tsarg thickness')}
                    <input
                      className={css.sizeInput}
                      defaultValue={tsargWidth}
                      onChange={e =>
                        e.target.value >= 5 &&
                        changeTsargWidth(Number(e.target.value))
                      }
                    />
                  </label>
                </div>
              )}
            </div>
          )}
          {product.costCalc.corner && (
            <label>
              {t('angle direction')}
              <Select
                placeholder="угол поворота"
                options={[
                  { value: '7', label: '7' },
                  { value: 'Г', label: 'Г' },
                ]}
                defaultValue={angleDirection}
                onChange={e => setAngleDirection(e)}
              />
            </label>
          )}
          {product.costCalc.module && (
            <div>
              <div className={css.proportionsBtnWrapper}>
                <p className={css.proportionsLabel}>
                  {t('standard proportions')}
                </p>
                <ToggleButton
                  inactiveLabel={'X'}
                  activeLabel={'V'}
                  value={standardProportions}
                  onToggle={value => {
                    setStandardProportions(!value);
                  }}
                />
              </div>
              <div>
                <p>{t('modules list')}:</p>
                <ul>
                  {activeModules.map((module, index) => (
                    <li key={index} className={css.moduleDetailsArea}>
                      <div>
                        <p>{module.name}</p>
                        {!standardProportions && <input
                          className={css.sizeInput}
                          defaultValue={module.width}
                          onChange={e => updateModuleWidth(index, e.target.value)}
                        />}
                      </div>
                      <button
                        className={css.delModelBtn}
                        onClick={() => deleteModule(index)}
                      >
                        x
                      </button>
                    </li>
                  ))}
                </ul>
                <button className={css.btn} onClick={addModule}>
                  {isPending ? (
                    <PulseLoader color="#c8c19b" size="10px" />
                  ) : (
                    `${t('add module')}`
                  )}
                </button>
              </div>
            </div>
          )}
          {product.costCalc.drawstrings && (
            <label>
              {t('Утяжки')}
              <Select
                placeholder="утяжки"
                options={[
                  { value: 'с утяжками', label: 'С утяжками' },
                  { value: 'без утяжек', label: 'Без утяжек' },
                ]}
                defaultValue={drawstrings}
                onChange={e => setDrawstrings(e)}
              />
            </label>
          )}
          <label>
            {t('supplier')}
            <Select
              name="fabricDealer"
              placeholder="поставщик ткани"
              defaultValue={fabricDealer}
              options={fabricOptions.sort((a, b) =>
                a.value.localeCompare(b.value)
              )}
              onChange={e => setFabricDealer(e)}
            />
          </label>
          {fabricDealer.value !== 'не выбрано' && (
            <label>
              {t('fabric name')}
              <Select
                placeholder="название ткани"
                options={fabricNames}
                value={fabricName}
                onChange={e => setFabricName(e)}
              />
            </label>
          )}
          <label>
            {t('comment')}
            <input
              className={css.sizeInput}
              defaultValue={comment}
              onChange={e => setComment(e.target.value)}
            />
          </label>
          <button className={css.btn} onClick={sendCalc}>
            {isPending ? (
              <PulseLoader color="#c8c19b" size="10px" />
            ) : (
              `${t('send')}`
            )}
          </button>
          <p>{t('or')}</p>
          <button className={css.btn} onClick={downloadScheme}>
            {isPending ? (
              <PulseLoader color="#c8c19b" size="10px" />
            ) : (
              `${t('download scheme')}`
            )}
          </button>
        </div>
      </div>
    </>
  );
};
