import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { selectAllProducts } from '../../../redux/products/selectors';
import css from "./ProductDetails.module.css";
import React, { useState } from 'react';
import Select from 'react-select';

const bedSizes = [
  { value: '140', label: '140 x 200(190)' },
  { value: '160', label: '160 x 200(190)' },
  { value: '180', label: '180 x 200(190)' },
  { value: '200', label: '200 x 200(190)' },
];

export const ProductDetails = () => {

    const [selectedBedSize, setSelectedBedSize] = useState('160');

    const { id } = useParams();
    const products = useSelector(selectAllProducts);
    const product = products.array.find((el) => (el._id === id));
    const price = product.basePrice;

    return(
        <div className={css.section}>
            <h1 className={css.title}>{product.name}</h1>
            <Carousel>
                {product.images.map((link) => (
                    <div key={link}>
                        <img src={link} alt={product.name}/>
                    </div>
                ))}
            </Carousel>
            {product.group === 'bed' ? 
                <div>
                    <p>Sleeping area:</p>
                    <Select
                        defaultValue={selectedBedSize}
                        onChange={setSelectedBedSize}
                        options={bedSizes}
                    />
                    <p>Overall size:</p>
                    <p>HZ</p>
                    <p>Price:</p>
                    <p>{price}</p>
                </div> : <></>}
            <p>Description:</p>
            <p>{product.subscription}</p>
        </div>
    )
}