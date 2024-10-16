import { useTranslation } from 'react-i18next';
import css from './ManagerOptions.module.css';
import Select from 'react-select';
import { fetchAllFabrics } from '../../../redux/fabrics/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export const ManagerOptions = ({ product }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const fabricItems = useSelector(state => state.fabrics.items);
  const [fabricOptions, setFabricOptions] = useState([]);
  const [fabricDealer, setFabricDealer] = useState({ value: 'не выбрано', label: 'Не выбрано' });
  const [fabricNames, setFabricNames] = useState([]);

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
      setFabricOptions([{ value: 'не выбрано', label: 'Не выбрано' }, ...titles]);
    }
  }, [fabricItems]);

  useEffect(() => {
    if (fabricDealer.value !== 'не выбрано') {
        const target = fabricItems.find(item => item.title === fabricDealer.value)
        const namesOptions = [];
        for (const fabric of target.array) {
            namesOptions.push({value: `${fabric.name} -$${fabric.price}`, label: `${fabric.name} -$${fabric.price}`})
        }
        setFabricNames([{ value: 'не выбрано', label: 'Не выбрано' }, ...namesOptions]);
    }
  }, [fabricDealer]);

  
  // console.log(product)
  return (
    <>
      <h3 className={css.calcHeader}>{t('cost calculation')}</h3>
      <div className={css.calcArea}>
        <div className={css.schemaArea}>model shema</div>
        <div className={css.inputsArea}>
          <input
            className={css.sizeInput}
            placeholder="ширина"
            defaultValue={product.dimensions.width}
          />
          <input
            className={css.sizeInput}
            placeholder="глубина"
            defaultValue={product.dimensions.depth}
          />
          <Select
            placeholder="угол поворота"
            options={[
              { value: '7', label: '7' },
              { value: 'Г', label: 'Г' },
            ]}
          />
          <Select
            placeholder="утяжки"
            options={[
              { value: 'с утяжками', label: 'С утяжками' },
              { value: 'без утяжек', label: 'Без утяжек' },
            ]}
          />
          {}
          <Select
            name='fabricDealer'
            placeholder="поставщик ткани"
            defaultValue={fabricDealer}
            options={fabricOptions}
            onChange={e => setFabricDealer(e)}
          />
          {fabricDealer.value !== 'не выбрано' &&
            <Select 
                placeholder="название ткани" 
                options={fabricNames}
                />
          }
        </div>
      </div>
    </>
  );
};
