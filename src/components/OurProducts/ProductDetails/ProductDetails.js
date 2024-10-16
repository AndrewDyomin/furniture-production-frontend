import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { selectActiveProduct } from '../../../redux/products/selectors';
import  { selectAllComponents } from '../../../redux/components/selectors';
import { getProduct } from '../../../redux/products/operations';
import css from "./ProductDetails.module.css";
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';
import { useAuth } from "hooks";
import { AdminMenu } from "../AdminMenu/AdminMenu";
import { ManagerOptions } from "../ManagerOptions/ManagerOptions";
import { ProductComponents } from "../ProductComponents/ProductComponents";
import { fetchAllComponents } from "../../../redux/components/operations";

const bedSizes = [
  { value: '140', label: '140 x 200(190)' },
  { value: '160', label: '160 x 200(190)' },
  { value: '180', label: '180 x 200(190)' },
  { value: '200', label: '200 x 200(190)' },
];

export const ProductDetails = () => {

    const dispatch = useDispatch();
    const { user, isLoggedIn } = useAuth();
    const [selectedBedSize, setSelectedBedSize] = useState({ value: '160', label: '160 x 200(190)' });
    const { id } = useParams();
    const product = useSelector(selectActiveProduct);
    const components = useSelector(selectAllComponents);
    const { t } = useTranslation();
    const differenceInWidth = product.dimensions.width - 160;
    // const price = product.basePrice;

    useEffect(() => {
        dispatch(getProduct(id))
        if (isLoggedIn && components.length === 0) {
            dispatch(fetchAllComponents())
        }
    }, [dispatch, components.length, isLoggedIn, id])

    return(
        <div className={css.section}>
            <h1 className={css.title}>{product.name}</h1>
            <Carousel showIndicators={false}>
                {product.images.map((link) => (
                    <div key={link}>
                        <img src={link} alt={product.name}/>
                    </div>
                ))}
            </Carousel>
            {product.group === 'bed' ? 
                <div className={css.baseInfoWrapper}>
                    <p className={css.baseInfoTitle}>{t('sleeping area')}:</p>
                    <Select
                        defaultValue={selectedBedSize}
                        onChange={setSelectedBedSize}
                        options={bedSizes}
                    />
                    <p className={css.baseInfoTitle}>{t('overall size')}:</p>
                    <p>{Number(selectedBedSize.value) + Number(differenceInWidth)} x {product.dimensions.depth}({product.dimensions.depth-10})</p>
                    {/* <p className={css.baseInfoTitle}>{t('price')}:</p>
                    <p className={css.price}>{price} ₴</p> */}
                </div> : 
                <div className={css.baseInfoWrapper}>
                    <p className={css.baseInfoTitle}>{t('overall size')}:</p>
                    <p>{product.dimensions.depth} x {product.dimensions.width} x {product.dimensions.height}</p>
                    {/* <p className={css.baseInfoTitle}>{t('price')}:</p>
                    <p className={css.price}>{product.basePrice} ₴</p> */}
                </div>}
            <p className={css.baseInfoTitle}>{t('description')}:</p>
            <p>{product.description}</p>
            {isLoggedIn ? 
                (user.description === "administrator" && (
            <div className={css.adminBlock}>
                <ProductComponents components={product.components}/>
                <AdminMenu id={id}/>
            </div>
            )) : <></>}
            {isLoggedIn ? 
            <div className={css.adminBlock}>
                <ManagerOptions product={product}/>
            </div>
            : <></>}
        </div>
    )
}