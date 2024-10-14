import { useSelector, useDispatch } from 'react-redux';
import PulseLoader from 'react-spinners/PulseLoader';
import { Link, useLocation } from 'react-router-dom';
import { Order } from '../Order/Order';
import { PopUp } from '../PopUp/PopUp';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { selectLoading, selectArchivedOrders } from '../../redux/orders/selectors';
import { setActiveOrder, changeArchiveFilter, changeArchiveSearch } from '../../redux/orders/operations';
import css from './ArchiveList.module.css';
import { useState } from 'react';
import Select from 'react-select';
import { useMediaQuery } from 'react-responsive';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

export const ArchiveList = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: '(max-width: 833px)' });

  // const [filter, setFilter] = useState([]);
  // const [search, setSearch] = useState('');
  const filter = useSelector(state => state.orders.archiveFilter)
  const search = useSelector(state => state.orders.archiveSearch)
  const [isModalOpen, setIsModalOrderOpen] = useState(false);

  const location = useLocation();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const orders = useSelector(selectArchivedOrders);
  let dealerNames = [];
  let prefilteredOrders = orders.allOrdersArray;
  let dateArray = [];
  const filters = [{ value: '', label: 'Не указано' }];

  if (orders.allOrdersArray) {
    orders.allOrdersArray.forEach((order, index) => {
      dealerNames.push({ value: `${order.dealer}`, label: `${order.dealer}` });
    });
    dealerNames.forEach(item => {
      if (
        !filters.some(
          obj => obj.value.toLowerCase() === item.value.toLowerCase()
        )
      ) {
        filters.push(item);
      }
    });
  }

  const filteredOrders =
  prefilteredOrders && prefilteredOrders.length !== 0
    ? prefilteredOrders.filter(order =>
        (filter.length === 0 || filter.some(f => f.value.toLowerCase() === order.dealer.toLowerCase())) &&
        (search === "" || order.name.toLowerCase().includes(search.toLowerCase()))
      )
    : [];

  const closeModal = () => {
    setIsModalOrderOpen(false);
    document.body.classList.remove('modal-open');
  };

  function dateToString(date) {
    const d = new Date(date);
    const month = d.getMonth() + 1;
    const dateString = `${d.getDate().toString().padStart(2, '0')}.${month
      .toString()
      .padStart(2, '0')}.${d.getFullYear()}`;
    return dateString;
  }

  if (!isMobile) {
    filteredOrders.forEach((order, index) => {
      let date = dateToString(order.plannedDeadline);
      !dateArray.includes(date) && dateArray.push(date)
    });
  }

  const PreFormList = () => {
    if (!isMobile) {
      return (
        <ul className={css.list}>
          {dateArray.map((day) => (
            <li key={day} className={css.dateItem}>
              <p className={css.dayTitle}>{day}</p>
              <ul className={`${css.list} ${css.dateWrapper}`}>
              {filteredOrders.map(({ _id, plannedDeadline }) => (
                dateToString(plannedDeadline) === day &&
                <li key={_id} className={css.item}>
                  <Link
                    to={`${_id}`}
                    state={{ from: location }}
                    className={css.orderLink}
                    onClick={() =>
                      dispatch(
                        setActiveOrder(
                          orders.allOrdersArray.find(el => {
                            return el._id === _id;
                          })
                        )
                      )
                    }
                  >
                    <Order id={_id} order={orders.allOrdersArray.find((el) => {return(el._id === _id)})}/>
                  </Link>
                </li>
              ))}
              </ul>
            </li>
          ))}
        </ul>
    )}
    return (
      <ul className={css.list}>
        {filteredOrders.map(({ _id }) => (
          <li key={_id} className={css.item}>
            <Link
              to={`${_id}`}
              state={{ from: location }}
              className={css.orderLink}
              onClick={() =>
                dispatch(
                  setActiveOrder(
                    orders.allOrdersArray.find(el => {
                      return el._id === _id;
                    })
                  )
                )
              }
            >
              <Order id={_id} order={orders.allOrdersArray.find((el) => {return(el._id === _id)})}/>
            </Link>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className={css.container}>
      <div className={css.navigation}>
        <Select
          className={css.filter}
          isMulti
          name="filter"
          id="filter"
          onChange={e => dispatch(changeArchiveFilter(e))}
          options={filters.sort((a, b) => a.label.localeCompare(b.label))}
          defaultValue={filter}
          placeholder={t('dealers filter')}
        ></Select>
        <input
          className={css.searchInput}
          defaultValue={search}
          placeholder={t('search')}
          onChange={e => dispatch(changeArchiveSearch(e.target.value))}
        />
      </div>
      {isLoading ? (
        <PulseLoader
          color="#c8c19b"
          cssOverride={{
            marginTop: '15px',
            display: 'flex',
            justifyContent: 'center',
          }}
        />
      ) : (
        <></>
      )}
      {filteredOrders.length !== 0 ? (
        <PreFormList />
      ) : (
        <></>
      )}
      <PopUp
        isOpen={isModalOpen}
        close={closeModal}
        body={
          <>
            <div className={css.modalWrapper}>
              {/* modal content */}
            </div>
          </>
        }
      />
    </div>
  );
};
