import axios from 'axios';
import svgIcons from '../../images/icons.svg';
import css from './MaterialsPlanner.module.css';
import { useState } from 'react';
import Select from 'react-select';
import { selectAllComponents } from "../../redux/components/selectors";
import { selectAllOrders } from '../../redux/orders/selectors';
import { selectAllProducts } from '../../redux/products/selectors';
import { useSelector } from 'react-redux';
// import toast from 'react-hot-toast';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

const terms = [
    { value: '7', label: '7 days' },
    { value: '14', label: '14 days' },
    { value: '21', label: '21 days' },
  ];

export const MaterialsPlanner = () => {

    const [selectedTerm, setSelectedTerm] = useState({ value: '14', label: '14 days' });
    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const handleEditorOpen = (e) => {
        isEditorOpen ? setIsEditorOpen(false) : setIsEditorOpen(true)
        !isEditorOpen ? e.target.classList = css.active : e.target.classList = css.notActive;
    };
    const components = useSelector(selectAllComponents).array || [];
    const orders = useSelector(selectAllOrders).allOrdersArray || [];
    const products = useSelector(selectAllProducts).array || [];
    let date = new Date();
    let targetDate = new Date(date);
    targetDate.setDate(date.getDate() + Number(selectedTerm.value));
    const unsorted = [];

    const getOrderList = () => {
        const filteredOrders = orders.filter(order => Date.parse(order.plannedDeadline) <= Date.parse(targetDate))
        return (filteredOrders)
    }
    const getComponentsList = () => {
        let findedComponentsList = [];
        getOrderList().forEach(order => {
            const product = products.find(p => p.name.toLowerCase() === order.name.toLowerCase());
            if (product) {
                product.components.forEach((component) => {
                    const target = components.find(c => c._id === component.id);
                    if (target) {
                        let targetComponent = { ...target, quantity: component.quantity };
                        if (targetComponent._id !== '6602e794832f5a9bf2a2850a') {
                            findedComponentsList.push(targetComponent);
                        } else if (order.fabricStatus !== "received" && order.fabricStatus !== "ordered") {
                            targetComponent.name = order.fabric;
                            findedComponentsList.push(targetComponent);
                        }
                    }
                });
            } else {
                unsorted.push(order);
            }
        });
    
        return findedComponentsList;
    };

  return (
    <div className={css.wrapper}>
        <div className={css.titleArea} key='titleArea'>
            <p className={css.title}>Materials planner</p>
            <button className={css.openBtn} id="isOpen" onClick={handleEditorOpen}>
                <svg>
                    <use className={css.openBtnIcon} href={`${svgIcons}#icon-arrow-down`} width={'32px'}/>
                </svg>
            </button>
        </div>
        {isEditorOpen ? 
        <div className={css.formWrapper} key='listArea'>
            <Select 
                name='term' 
                onChange={(e) => (setSelectedTerm(e))}
                defaultValue={selectedTerm}
                options={terms}
            />
            <p>Orders:</p>
            <ul key='orders'>
                {orders && orders.length !== 0 && getOrderList().map(order => (
                    <li key={order._id}>
                        <p>{order.number}, {order.name}</p>
                    </li>
                ))}
            </ul>
            <p>Components:</p>
            <ul key='components'>
                {orders && orders.length !== 0 && getComponentsList().map(component => (
                    <li key={`${component._id}${component.name}-${component.quantity}`}>
                        <p>{component.name}: {component.quantity} {component.units}</p>
                    </li>
                ))}
            </ul>
            <p>Unsorted:</p>
            <ul key='unsorted'>
                {unsorted && unsorted.length !== 0 && unsorted.map(order => (
                    <li key={`${order.number}-${order.fabric}`}>
                        <p>{order.name}</p>
                    </li>
                ))}
            </ul>
        </div>
        : <></>}
    </div>
  );
};