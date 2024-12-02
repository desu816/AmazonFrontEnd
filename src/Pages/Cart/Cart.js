import React, { useContext } from 'react';
import LayOut from '../../Components/LayOut/LayOut';
import { DataContext } from '../../Components/DataProvider/DataProvider'; 
import ProductCard from '../../Components/Product/ProductCard';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';
import classes from './Cart.module.css'

function Cart() {
  const [{ basket, user }] = useContext(DataContext);
  const total = basket.reduce((amount,item)=>{
    return item.price + amount
  },0)

  return ( 
    <LayOut>
      <section className={classes.container}> 
        <div className={classes.cart_container}>
          <h1>Hello, {user?.name || 'Guest'}</h1>
          <h2>Your Shopping Basket</h2>
          <hr />
          {basket?.length ? (
            basket.map((item) => (
              <ProductCard
                key={item.id} 
                product={item}
                renderDesc={true} 
                flex={true}
              />
            ))
          ) : (
            <p>Oops! No items in your cart.</p>
          )}
        </div>
        {basket?.length !==0&&(
            <div className={classes.subtotal}>
                <div>
                    <p>Subtotal ({basket?.length} items</p>
                    <CurrencyFormat amount={total} />
                </div>
                <span>
                    <input type="checkbox" />
                    <small>This order contains a gift</small>
                </span>
                <Link to="/payments">Continue to Checkout</Link>
            </div>

         )}
        
      </section>
    </LayOut>
  );
}

export default Cart;
