import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { selectActiveProduct } from '../../../redux/products/selectors';
import css from "./ProductDetails.module.css";
import { useState } from 'react';
import Select from 'react-select';
import { useAuth } from "hooks";
import { AdminMenu } from "../AdminMenu/AdminMenu";
import { ProductComponents } from "../ProductComponents/ProductComponents";

const bedSizes = [
  { value: '140', label: '140 x 200(190)' },
  { value: '160', label: '160 x 200(190)' },
  { value: '180', label: '180 x 200(190)' },
  { value: '200', label: '200 x 200(190)' },
];

export const ProductDetails = () => {

    const { user, isLoggedIn } = useAuth();
    const [selectedBedSize, setSelectedBedSize] = useState({ value: '160', label: '160 x 200(190)' });
    const { id } = useParams();
    const product = useSelector(selectActiveProduct);
    const differenceInWidth = product.dimensions.width - 160;
    const price = product.basePrice;

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
                    <p className={css.baseInfoTitle}>Sleeping area:</p>
                    <Select
                        defaultValue={selectedBedSize}
                        onChange={setSelectedBedSize}
                        options={bedSizes}
                    />
                    <p className={css.baseInfoTitle}>Overall size:</p>
                    <p>{Number(selectedBedSize.value) + Number(differenceInWidth)} x {product.dimensions.depth}({product.dimensions.depth-10})</p>
                    <p className={css.baseInfoTitle}>Price:</p>
                    <p className={css.price}>{price} ₴</p>
                </div> : 
                <div className={css.baseInfoWrapper}>
                    <p className={css.baseInfoTitle}>Overall size:</p>
                    <p>{product.dimensions.depth} x {product.dimensions.width} x {product.dimensions.height}</p>
                    <p className={css.baseInfoTitle}>Price:</p>
                    <p className={css.price}>{product.basePrice} ₴</p>
                </div>}
            <p className={css.baseInfoTitle}>Description:</p>
            <p>{product.subscription}</p>
            {isLoggedIn ? 
                (user.subscription === "administrator" && (
            <div>
                <ProductComponents components={product.components}/>
                <AdminMenu id={id}/>
            </div>
            )) : <></>}
        </div>
    )
}