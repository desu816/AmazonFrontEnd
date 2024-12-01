import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom'; 
import Rating from '@mui/material/Rating'; 
import classes from './Product.module.css';

function ProductCard({ product }) {
  const { image, title, id, rating, price } = product;

  // Check if rating exists and has the 'rate' property
  const productRating = rating ? rating.rate : 0; // Default to 0 if rating is undefined

  return (
    <div className={classes.card_container}>
      <Link to={`/products/${id}`}> 
        <img src={image} alt="" className={classes.img_container} />
      </Link>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          <Rating value={productRating} precision={0.1} /> {/* Use the productRating variable */}
          <small>{rating ? rating.count : 0}</small> {/* Default to 0 if rating is undefined */}
        </div>
        <div>
          {/* Price */}
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
