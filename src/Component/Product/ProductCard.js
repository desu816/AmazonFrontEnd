import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom'; // Fix: Correct import for Link
import Rating from '@mui/material/Rating'; // Import the Rating component (assuming MUI is being used)
import classes from './Product.module.css';

function ProductCard({ product }) {
  const { image, title, id, rating, price } = product;

  return (
    <div className={classes.card__container}>
      <Link to={`/products/${id}`}> {/* Fix: Use backticks for string interpolation */}
        <img src={image} alt={title} className={classes.img_container} />
      </Link>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}> {/* Fix: Correct class name */}
          <Rating value={rating.rate} precision={0.1} readOnly /> {/* Add readOnly for display */}
          <small>{rating.count}</small>
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
