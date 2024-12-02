import React, { useContext } from 'react';
import LayOut from '../../Components/LayOut/LayOut';
import { DataContext } from '../../Components/DataProvider/DataProvider'; 
import ProductCard from '../../Components/Product/ProductCard';

function Cart() {
  const [{ basket, user }] = useContext(DataContext);

  return ( 
    <LayOut>
      <section> 
        <div>
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
        <div>{}</div>
      </section>
    </LayOut>
  );
}

export default Cart;
