import { useTranslation } from 'react-i18next';
import css from './ManagerOptions.module.css';
import Select from 'react-select';
import { fetchAllFabrics } from '../../../redux/fabrics/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';

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
  }, [product.name]);

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
            />
          )}
        </div>
        <div className={css.inputsArea}>
          <label>
            {t('width')}
            <input
              className={css.sizeInput}
              defaultValue={productWidth}
              onChange={e =>
                e.target.value > 100 && setProductWidth(e.target.value)
              }
            />
          </label>
          <label>
            {t('depth')}
            <input
              className={css.sizeInput}
              defaultValue={productDepth}
              onChange={e =>
                e.target.value > 100 && setProductDepth(e.target.value)
              }
            />
          </label>
          {product.costCalc.corner && <label>
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
          </label>}
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
        </div>
      </div>
    </>
  );
};
