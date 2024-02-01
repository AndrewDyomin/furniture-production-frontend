import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import { selectAllProducts } from '../../../redux/products/selectors';
import css from "./ProductDetails.module.css"

export const ProductDetails = () => {

    const { id } = useParams();
    const products = useSelector(selectAllProducts);
    const product = products.array.find((el) => (el._id === id));

    return(
        <div className={css.section}>
            <h1 className={css.title}>{product.name}</h1>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                {product.images.map((image) => (<SwiperSlide><img src={image} key={image} className={css.image}/></SwiperSlide>))}
                {/* <SwiperSlide key='1'>Slide 1</SwiperSlide>
                <SwiperSlide key='2'>Slide 2</SwiperSlide>
                <SwiperSlide key='3'>Slide 3</SwiperSlide>
                <SwiperSlide key='4'>Slide 4</SwiperSlide> */}
            </Swiper>
        </div>
    )
}