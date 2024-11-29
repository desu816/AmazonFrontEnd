import React from 'react';
import { Carousel } from 'react-responsive-carousel'; // Import with its original name
import { img } from './img/data';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the necessary CSS
import classes from './Carousel.module.css';

function CustomCarousel() {
    return (
        <div>
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showIndicators={true}
                showThumbs={true}
            >
                {img.map((imageItemLink, index) => (
                    <img key={index} src={imageItemLink} alt={`carousel-${index}`} />
                ))}
            </Carousel>
            <div className={classes.hero_img}> </div>
        </div>
    );
}

export default CustomCarousel;
