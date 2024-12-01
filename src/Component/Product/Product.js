// import React, { useEffect } from 'react'
// import axios from 'axios'

// function Product ()  {
//     const [first, setfirst] = useState {}

//     useEffect(() => {
//      axios.get('https://fakestoreapi.com/products')
//      .then((res)=>{
//         console.log(res)
//      })
//     }, [])
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Product

import React, { useEffect, useState } from 'react'; // Fix: Added useState
import axios from 'axios';
import ProductCard from './ProductCard';
import classes from './Product.module.css';

function Product() {
  const [products, setProducts] = useState([]); // Fixed state initialization

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data); // Save data to state
      })
      .catch((err) => {
        console.error('Error fetching products:', err); // Handle error
      });
  }, []); // Dependency array to run effect only once

  return (
    <section className={classes.products_container }>
     {
        products.map((singleProduct) => {
           return <ProductCard product={singleProduct} key={singleProduct.id}/>
        })
    }
     
    </section>
  );
}

export default Product;
