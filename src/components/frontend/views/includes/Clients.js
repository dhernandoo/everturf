import React, { Component } from 'react';
import Slider from "react-slick";
import { clients } from '../../../../data/clients';

var settings = {
    arrows: false,
    draggable: true,
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1
};

class Clients extends Component {

    render() {
        return ( 
            <section className="client-area">
                <div className="container">
                    <div className="sec-title text-center">
                        <div className="title">Corporate Clients</div>
                        <div className="dector thm-bg-clr center"></div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <Slider {...settings}>
                                {
                                    clients.map((client, i) => {
                                        return (
                                            <div key={i}>
                                                <div className="single-client-box">
                                                    <div className="logo-holder"><img className="mx-auto d-block" src={client.image} alt="Awesome Logo" /></div>
                                                    <div className="text-holder"><p>{ client.description }</p></div>
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

export default Clients;