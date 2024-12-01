// import React from "react";
// import { Browser Router as Router, Routes, Route } from "react-router-dom"
// import Landing from './Pages/Landing/Landing'
// import SignIn from './Pages/Auth/Signup'
// import Payment from './Pages/Payment/Payment' 
// import Orders from './Pages/Orders/Orders' 
// import Cart from './Pages/Cart/Cart' 
// import Results from './Pages/Results/Results'
// import PrductDetail from './Pages/ProductDetail/ProductDetail'

// function Routing() {
// return ( 
// <Router>
//     <Routes>
//         <Route path="/" element {<Landing/>} />
//         <Route path="/auth" element={<Sign In />} />
//         <Route path="/payments" element={<Payment />} />
//         <Route path="/orders" element={<Orders />} />
//         <Route path="/category/:categoryName" element={<Results />} />
//         <Route path="/products/:productId" element={<Product Detail />} /> 
//         <Route path="/cart" element={<Cart />} />
//     </Routes>
// </Router>
//     );
//     }
// export default Routing;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './Pages/Landing/Landing';
import SignIn from './Pages/Auth/SignIn'; // Corrected file name and path
import Payment from './Pages/Payment/Payment'; 
import Orders from './Pages/Orders/Orders'; 
import Cart from './Pages/Cart/Cart'; 
import Results from './Pages/Results/Results';
import ProductDetail from './Pages/ProductDetail/ProductDetail'; // Corrected typo in import

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignIn />} /> {/* Fixed SignIn */}
        <Route path="/payments" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} /> {/* Fixed ProductDetail */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
