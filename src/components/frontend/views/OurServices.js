import React, { Component } from 'react';
import Header from './includes/Header';
import Nav from './includes/Nav';
import Services from './includes/Services';
import Coupon from './includes/Coupon';
import { Helmet } from "react-helmet";

import {services} from '../../../data/services';
import { seo } from '../../../data/seo';
import { globals } from '../../../data/globals';

class Home extends Component {
    render() {
        return ( 
            <div>
                <Helmet>
                    <title>{ `${seo.OUR_SERVICES.title}` }</title>
                    <meta name="description" content={ `${seo.OUR_SERVICES.description}` } />
                    <meta name="keywords" content={`${seo.OUR_SERVICES.keywords}`} />
                    <meta property="og:image" content={`${seo.OUR_SERVICES.og_img}`} />
                    <meta property="og:title" content={`${seo.OUR_SERVICES.title}`} />
                    <meta property="og:description" content={`${seo.OUR_SERVICES.og_description}`} />
                    <meta name="twitter:card" content={`${seo.OUR_SERVICES.twitter_card}`} />
                    <meta name="twitter:site" content={`${seo.OUR_SERVICES.twitter_site}`} />
                    <meta name="twitter:title" content={`${seo.OUR_SERVICES.twitter_title}`} />
                    <meta name="twitter:description" content={`${seo.OUR_SERVICES.twitter_description}`} />
                    <meta name="twitter:image" content={`${seo.OUR_SERVICES.twitter_image}`} />

                    <script type="application/ld+json">
                        {`{
                            "@context": "http://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [{
                                "@type": "ListItem",
                                "position": 1,
                                "item": {
                                "@id": ${globals.url},
                                "name": ${seo.HOME.title}
                                }
                            },{
                                "@type": "ListItem",
                                "position": 2,
                                "item": {
                                "@id": ${globals.url + '/' + seo.OUR_SERVICES.slug},
                                "name": ${seo.OUR_SERVICES.title}
                                }
                            }]
                        }`}
                    </script>
                </Helmet>

                <Header />
                
                <Nav active="services" />
                
                <section className="breadcrumb-area" style={{backgroundImage: "url(/assets/images/resources/breadcrumb-bg.jpg)"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="breadcrumb-menu">
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><i className="fa fa-angle-right" aria-hidden="true"></i></li>
                                        <li className="active">Our Services</li>
                                    </ul>    
                                </div>
                                <div className="title text-center">
                                <h1>Our Services</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="services-area">
                    <div className="container">
                        <div className="sec-title text-center">
                            <div className="title">Services We Offer</div>
                            <div className="dector thm-bg-clr center"></div>
                        </div>
                        <div className="row">
                            {
                                services.map((service, i) => {
                                    return (
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
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
                        </div>
                    </div>
                </section>

                <Coupon text="EverTurf, Complete Solution for Your Landscaping Vision." discount="Get Upto 30% Off" />
            </div>
        );
    }
}

export default Home;