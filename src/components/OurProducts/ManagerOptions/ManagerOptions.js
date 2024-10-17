import { useTranslation } from 'react-i18next';
import css from './ManagerOptions.module.css';
import Select from 'react-select';
import { fetchAllFabrics } from '../../../redux/fabrics/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { Stage, Layer, Rect } from 'react-konva';

export const ManagerOptions = ({ product }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const fabricItems = useSelector(state => state.fabrics.items);
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

  const seatWidth = product.dimensions.width; // Ширина сиденья от пользователя
  const seatDepth = product.dimensions.depth * 0.6; // Глубина сиденья 60% от общей глубины дивана
  
  const backrestDepth = product.dimensions.depth * 0.1; // Спинка 10% от общей глубины
  const armWidth = seatWidth * 0.1; // Подлокотники по 10% от ширины сиденья
  const sofaTotalDepth = seatDepth + backrestDepth;

  return (
    <>
      <h3 className={css.calcHeader}>{t('cost calculation')}</h3>
      <div className={css.calcArea}>
        <div ref={stageContainerRef} className={css.schemaArea}>
          {
            <Stage width={dimensions.width} height={dimensions.height}>
              <Layer>
        {/* Спинка */}
        <Rect
          x={armWidth} // Начало спинки с учетом ширины подлокотников
          y={0} // Спинка вверху, так как это вид сверху
          width={seatWidth} // Спинка по всей ширине сиденья
          height={backrestDepth} // Глубина спинки
          fill="darkgray"
        />
        
        {/* Сиденье */}
        <Rect
          x={armWidth} // Начало сиденья с учётом подлокотника
          y={backrestDepth} // Сиденье начинается сразу после спинки
          width={seatWidth} // Сиденье по ширине
          height={seatDepth} // Глубина сиденья
          fill="gray"
        />
        
        {/* Левый подлокотник */}
        <Rect
          x={0} // Левый подлокотник в крайнем левом положении
          y={backrestDepth} // Подлокотник начинается после спинки
          width={armWidth} // Ширина подлокотника
          height={seatDepth} // Высота соответствует глубине сиденья
          fill="lightgray"
        />
        
        {/* Правый подлокотник */}
        <Rect
          x={armWidth + seatWidth} // Правый подлокотник после сиденья
          y={backrestDepth} // Начало после спинки
          width={armWidth} // Ширина подлокотника
          height={seatDepth} // Высота подлокотника
          fill="lightgray"
        />
      </Layer>
            </Stage>
          }
        </div>
        <div className={css.inputsArea}>
          <label>
            {t('width')}
            <input
              className={css.sizeInput}
              placeholder="ширина"
              defaultValue={product.dimensions.width}
            />
          </label>
          <label>
            {t('depth')}
            <input
              className={css.sizeInput}
              placeholder="глубина"
              defaultValue={product.dimensions.depth}
            />
          </label>
          <label>
            {t('angle direction')}
            <Select
              placeholder="угол поворота"
              options={[
                { value: '7', label: '7' },
                { value: 'Г', label: 'Г' },
              ]}
              defaultValue={{ value: '7', label: '7' }}
            />
          </label>
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
