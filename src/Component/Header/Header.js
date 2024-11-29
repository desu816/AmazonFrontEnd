// import React from "react";
// import classes from "./Header.module.css"; // Import your CSS module
// import { Link } from "react-router-dom"; // Make sure to import Link

// import { SlLocationPin } from "react-icons/sl"; // Location icon
// import { BsSearch } from "react-icons/bs"; // Search icon
// import LowerHeader from "./LowerHeader";
// import { BiCart } from "react-icons/bi"; // Cart icon

// const Header = () => {
//   return (
//     <>
//       <section>
//         <div className= {classes.header_container}>
//           {/* Logo Section */}
//           <div className= {classes.logo_container}>
//             <a href="#"> 
//               <img
//                 src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//                 alt="Amazon Logo"/>
//             </a>
//             <div className={classes.delivery}>
//               <span>
//                 <SlLocationPin size={20} />
//               </span>
//               <div>
//                 <p>Delivered to</p>
//                 <span>Ethiopia</span>
//               </div>
//             </div>
//           </div>

//           {/* Search Section */}
//           <div className={classes.search}>
//             <select name="" id="">
//               <option value="">All</option>
//             </select>
//             <input type="text" />
//             <BsSearch size={25} />
//           </div>

//           {/* Other Section */}
//           <div className={classes.order_container}>
//             <a href="" className={classes.language}>
//               {/* <img
//                 src="https://en.wikipedia.org/wiki/File:Flag_of_the_United_States_(DoS_ECA_Color_Standard).svg"
//                 alt="Flag"
//               /> */}
//               <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="Flag" />

//               <select name="" id="">
//                 <option value="">EN</option>
//               </select>
//             </a>
//             <a href="#">
//               <p>Sign In</p>
//               <span>Account & Lists</span>
//             </a>
//             <a href="#">
//               <p>Returns</p>
//               <span>& Orders</span>
//             </a>
//             <a href="" className={classes.cart}>
//               <BiCart size={35} />
//               <span>0</span>
//             </a>
//           </div>
//         </div>
//       </section>
// <LowerHeader/>
//     </>
//   );
// };

// export default Header;


import React from "react";
import classes from "./Header.module.css"; // Import your CSS module
import { Link } from "react-router-dom"; // Ensure Link is used correctly
import { SlLocationPin } from "react-icons/sl"; // Location icon
import { BsSearch } from "react-icons/bs"; // Search icon
import LowerHeader from "./LowerHeader"; // Ensure LowerHeader is error-free
import { BiCart } from "react-icons/bi"; // Cart icon

const Header = () => {
  return (
    <>
      <section>
        <div className={classes.header_container}>
          {/* Logo Section */}
          <div className={classes.logo_container}>
            <a href="#">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon Logo"
              />
            </a>
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

          {/* Search Section */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <BsSearch size={25} />
          </div>

          {/* Other Section */}
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
              <span>0</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};

export default Header;
