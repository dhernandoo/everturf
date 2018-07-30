import React, { Component } from 'react';
import Slider from "react-slick";

class Hero extends Component {

    render() {
        return ( 
            <Slider {...settings}>
                <div>
                    <img src="assets/images/slides/1.jpg" alt="" width="1920" height="800" data-bgposition="top center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="1" />
                </div>
                <div>
                    <img src="assets/images/slides/2.jpg" alt="" width="1920" height="800" data-bgposition="top center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="1" />
                </div>
                <div>
                    <img src="assets/images/slides/3.jpg" alt="" width="1920" height="800" data-bgposition="top center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="1" />
                </div>
            </Slider>
        );
    }
}

export default Hero;

var settings = {
    arrows: false,
    draggable: true,
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
};