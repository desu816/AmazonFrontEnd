// import React from 'react'
// import { data } from 'react-router-dom'

// function CategoryCard ()  {
//   return (
//     <div>
//       <a href="">
//         <span>
//             <h2>{data.title} </h2>
//         </span>
//         <img src={data.imgLink} alt='' />
//         <p>shop now</p>
//       </a>
//     </div>
//   )
// }

// export default CategoryCard

import React from 'react';
import classes from './Category.module.css';
import {Link} from 'react-router-dom'

function CategoryCard({ data }) {
  return (
    <div className={classes.category}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data?.title}</h2>
        </span>
        <img src={data?.imgLink} alt="" />
        <p>Shop Now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;