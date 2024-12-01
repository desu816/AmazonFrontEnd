
// import { BrowserRouter as Router } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import './App.css'; // Import your CSS file
import Header from './Component/Header/Header';
import CustomCarousel from './Component/Carousel/CustomCarousel';
import { BrowserRouter as Router } from "react-router-dom";
import Category from './Component/Category/Category';
import Product from './Component/Product/Product';


const App = () => (
  <Router>
    <Header />
    <CustomCarousel />
    <Category />
    <Product />
  </Router>
);
export default App;
