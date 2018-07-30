import React, { Component } from 'react';
import Slider from "react-slick";
import { testimonials } from '../../../../data/testimonials';

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

class Testimonials extends Component {

    render() {
        return ( 
            <section className="testimonial-area parallax-bg-one" style={{backgroundImage: "url(/assets/images/parallax-background/testimonial-bg.jpg)"}}>
                <div className="container">
                    <div className="sec-title text-center">
                        <div className="title clr-white">Customer Feedback</div>
                        <div className="dector thm-bg-clr center"></div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">

                            <Slider {...settings}>
                                {
                                    testimonials.map((testimonial, i) => {
                                        return (
                                            <div className="testimonial-block-one" key={i}>
                                                <div className="inner-box">
                                                    <div className="icon-holder">
                                                        <span className="icon-two thm-clr"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>{ testimonial.text }</p>
                                                    </div>
                                                </div>
                                                <div className="author-content">
                                                    <h3>{ testimonial.author } <span className="thm-clr">- {testimonial.location}</span></h3>
                                                    <div className="review-box">
                                                        <ul>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                            <li><i className="fa fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Slider>     
                        </div>
                    </div>    
                </div>
            </section>
        );
    }
}

export default Testimonials;