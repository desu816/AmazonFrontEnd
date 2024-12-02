// import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
// import { Link } from 'react-router-dom'; 
// import Rating from '@mui/material/Rating'; 
// import classes from './Product.module.css';

// function ProductCard({ product, flex, renderDesc }) {
//   const { image, title, id, rating, price, description} = product;
//   console.log(product);

 
//   const productRating = rating ? rating.rate : 0; 
//   return (
//     <div className={`${classes.card_container} ${flex?classes.product_flexed : ''}`}>
//       <Link to={`/products/${id}`}> 
//         <img src={image} alt="" className={classes.img_container} />
//       </Link>
//       <div>
//         <h3>{title}</h3>
//         {renderDesc && <div style={{maxWidth:"750px"}}>{description}</div>}
//         <div className={classes.rating}>
//           <Rating value={rating?.rate} precision={0.1} /> 
//           <small>{rating?.count}</small> 
//         </div>
//         <div>
//           {/* Price */}
//           <CurrencyFormat amount={price} />
//         </div>
//         <button className={classes.button}>Add to Cart</button>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;

import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom'; 
import Rating from '@mui/material/Rating'; 
import classes from './Product.module.css';
import { useContext } from 'react';
import { DataContext } from '../DataProvider/DataProvider';
import { Type } from '../../Utility/actiontype';

function ProductCard({ product, flex, renderDesc }) {
  const { image, title, id, rating, price, description } = product;
  const{state, dispatch}=useContext(DataContext)
  console.log(state)
  const addToCart =()=>{
    dispatch({
      type:Type.ADD_TO_BaASKET,
      item:{
        image, title, id, rating, price, description 
      }
    })
  }
 
  const productRating = rating?.rate || 0;
  const productCount = rating?.count || 0;
  const productImage = image || 'default-image-url.jpg'; // Fallback image URL
  const productDescription = description || 'No description available.'; // Fallback description

  return (
    <div className={`${classes.card_container} ${flex ? classes.product_flexed : ''}`}>
      <Link to={`/products/${id}`}> 
        <img src={productImage} alt={title} className={classes.img_container} />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{productDescription}</div>}
        <div className={classes.rating}>
          <Rating value={productRating} precision={0.1} /> 
          <small>{productCount}</small>
        </div>
        <div>
          {/* Price */}
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button} onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;



