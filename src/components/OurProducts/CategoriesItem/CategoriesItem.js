import { Link } from "react-router-dom"
import css from './CategoriesItem.module.css'

export const CategoriesItem = ({ image, title }) => {

    const backgroundStyle = { 
        background: `linear-gradient(1deg, rgba(5, 5, 5, 0.60) 4.82%, rgba(5, 5, 5, 0.00) 108.72%), url(${image}), lightgray -25px -10px / 116.716% 114.018% no-repeat`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    return (
        <Link to={`/products/${title}`}>
            <div className={css.wrapper} style={backgroundStyle}>
                <p className={css.title}>{`${title.charAt(0).toUpperCase()}${title.slice(1)}s`}</p>
            </div>
        </Link>
    )
}