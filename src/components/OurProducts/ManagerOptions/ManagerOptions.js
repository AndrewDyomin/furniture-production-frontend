import { useTranslation } from 'react-i18next';
import css from './ManagerOptions.module.css';
import Select from 'react-select';
import { fetchAllFabrics } from '../../../redux/fabrics/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import ToggleButton from 'react-toggle-button';

export const ManagerOptions = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.activeItem);
  const fabricItems = useSelector(state => state.fabrics.items);
  const [ProductKonva, setProductKonva] = useState(null);
  const [productWidth, setProductWidth] = useState(
    product.dimensions.width || 0
  );
  const [productDepth, setProductDepth] = useState(
    product.dimensions.depth || 0
  );
  const [mattressWidth, setMattressWidth] = useState(Number(160));
  const [mattressDepth, setMattressDepth] = useState(Number(200));
  const [standardProportions, setStandardProportions] = useState({
    value: true,
  });
  const [headHeight, setHeadHeight] = useState('Standard')
  const [headDepth, setHeadDepth] = useState(10)
  const [tsargHeight, setTsargHeight] = useState('Standard')
  const [tsargWidth, setTsargWidth] = useState(5)
  const [angleDirection, setAngleDirection] = useState({
    value: '7',
    label: '7',
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
  const [comment, setComment] = useState('')

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
    };
    setHeadDepth(value);
  };

  const changeTsargWidth = value => {
    if (value > tsargWidth) {
      const difference = value - tsargWidth;
      setProductDepth(() => productDepth + difference);
      setProductWidth(() => productWidth + (difference * 2));
    } else {
      const difference = tsargWidth - value;
      setProductDepth(() => productDepth - difference);
      setProductWidth(() => productWidth - (difference * 2));
    };
    setTsargWidth(value);
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
              dimensions={dimensions}
              productWidth={productWidth}
              productDepth={productDepth}
              angleDirection={angleDirection}
              mattressWidth={mattressWidth}
              mattressDepth={mattressDepth}
              headDepth={headDepth}
              setHeadDepth={setHeadDepth}
              tsargWidth={tsargWidth}
              setTsargWidth={setTsargWidth}
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
                defaultValue={productWidth}
                onChange={e =>
                  e.target.value >= 100 &&
                  setProductWidth(Number(e.target.value))
                }
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
                  e.target.value >= 100 &&
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
                <p className={css.proportionsLabel}>{t('standard proportions')}</p>
                <ToggleButton
                  inactiveLabel={'X'}
                  activeLabel={'V'}
                  value={standardProportions}
                  onToggle={value => {
                    setStandardProportions( !value );
                  }}
                />
              </div>
              {!standardProportions && 
              <div className={css.bedDetailsWrapper}>
                <label>
                  высота изголовья
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
                  толщина изголовья
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
                  высота царг
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
                  толщина царг
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
              }
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
          {product.costCalc.drawstrings && (
            <label>
              {t('Утяжки')}
              <Select
                placeholder="утяжки"
                options={[
                  { value: 'с утяжками', label: 'С утяжками' },
                  { value: 'без утяжек', label: 'Без утяжек' },
                ]}
                defaultValue={{ value: 'с утяжками', label: 'С утяжками' }}
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
                    onChange={e =>
                      setComment(e.target.value)
                    }
                  />
                </label>
        </div>
      </div>
    </>
  );
};
