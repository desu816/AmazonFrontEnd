import React, { useContext } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl"; 
import { BsSearch } from "react-icons/bs";
import LowerHeader from "./LowerHeader"; 
import { BiCart } from "react-icons/bi"; 
import { DataContext } from "../DataProvider/DataProvider";

const Header = () => {
  const [{ basket }] = useContext(DataContext);

  console.log(basket); // Debug log to see what `basket` contains

  const basketLength = Array.isArray(basket) ? basket.length : 0;

  return (
    <>
      <section>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon Logo"
              />
            </Link>
            <div className={classes.delivery}>
              <span>
                <SlLocationPin size={20} />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <BsSearch size={25} />
          </div>

          <div className={classes.order_container}>
            <div className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                alt="Flag"
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </div>
            <Link to="/signin">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </Link>
            <Link to="/returns">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{basketLength}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};

export default Header;
