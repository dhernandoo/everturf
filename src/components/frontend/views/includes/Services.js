import React, { Component } from 'react';
import Slider from "react-slick";
import { services } from '../../../../data/services';

class Services extends Component {

    render() {

        var settings = {
            arrows: false,
            draggable: true,
            dots: false,
            infinite: true,
            centerPadding: '15px',
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1
        };

        return ( 
            <section className="services-area">
                <div className="container">
                    <div className="sec-title text-center">
                        <div className="title">Services We Offer</div>
                        <div className="dector thm-bg-clr center"></div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <Slider {...settings}>
                                
                                {
                                    services.map((service, i) => {
                                        return (
                                            <div key={i}>
                                                <div className="single-service-item">
                                                    <div className="inner-content">
                                                        <div className="title-holder text-center">
                                                            <div className="hexagon-content">
                                                                <div className="hexagon">   
                                                                    <div className="icon">
                                                                        <span className="icon-nature-2 thm-clr"></span>    
                                                                    </div>
                                                                </div> 
                                                            </div>
                                                            <div className="title">
                                                                <h3><a href="ser-spring.html">{ service.title }</a></h3>
                                                            </div>   
                                                        </div>
                                                        <div className="img-holder">
                                                            <img src={ service.image } alt="Awesome Image" />
                                                            <div className="overlay-style-one">
                                                                <div className="box">
                                                                    <div className="content">
                                                                        <a href={service.link}>Read More <span className="icon-arrows-2"></span></a>       
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="text-holder">
                                                            <p>{service.description}</p>
                                                        </div>
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

export default Services;