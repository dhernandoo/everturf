import React, { Component } from 'react';
import Header from './includes/Header';
import Nav from './includes/Nav';
import Hero from './includes/Hero';
import Services from './includes/Services';
import Coupon from './includes/Coupon';
import Testimonials from './includes/Testimonials';
import Clients from './includes/Clients';
import ContactForm from './includes/ContactForm';
import { Helmet } from "react-helmet";

import { globals } from '../../../data/globals';
import { seo } from '../../../data/seo';
class Home extends Component {
    render() {
        return ( 
            <div>
                <Helmet>
                    <title>{ `${seo.HOME.title }`}</title>
                    <meta name="description" content={`${seo.HOME.description}` } />
                    <meta name="keywords" content={`${seo.HOME.keywords}`} />
                    <meta property="og:image" content={`${seo.HOME.og_img}`} />
                    <meta property="og:title" content={`${seo.HOME.title}`} />
                    <meta property="og:description" content={`${seo.HOME.og_description}`} />
                    <meta name="twitter:card" content={`${seo.HOME.twitter_card}`} />
                    <meta name="twitter:site" content={`${seo.HOME.twitter_site}`} />
                    <meta name="twitter:title" content={`${seo.HOME.twitter_title}`} />
                    <meta name="twitter:description" content={`${seo.HOME.twitter_description}`} />
                    <meta name="twitter:image" content={`${seo.HOME.twitter_image}`} />

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
                            }]
                        }`}
                    </script>
                </Helmet>

                <Header />
                <Nav active="home" />
                <Hero />
                
                <section className="call-toaction-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="inner-content clearfix">
                                    <ul className="clearfix">
                                        <li>
                                            <div className="content-box text-center">
                                                <div className="icon-holder">
                                                    <span className="icon-nature"></span> 
                                                    <div className="title">
                                                        <h3>Honest & Dependable</h3>
                                                    </div>   
                                                </div>
                                                <div className="overlay-box">
                                                    <h3>Honest & Dependable</h3>
                                                    <p>How all this mistaken idea work all pleasue got.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content-box text-center">
                                                <div className="icon-holder">
                                                    <span className="icon-people"></span> 
                                                    <div className="title">
                                                        <h3>Expert Landscapers</h3>
                                                    </div>   
                                                </div>
                                                <div className="overlay-box">
                                                    <h3>Expert Landscapers</h3>
                                                    <p>How all this mistaken idea work all pleasue got.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content-box text-center">
                                                <div className="icon-holder">
                                                    <span className="icon-diploma"></span> 
                                                    <div className="title">
                                                        <h3>Certified & Licensed</h3>
                                                    </div>   
                                                </div>
                                                <div className="overlay-box">
                                                    <h3>Certified & Licensed</h3>
                                                    <p>How all this mistaken idea work all pleasue got.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content-box text-center">
                                                <div className="icon-holder">
                                                    <span className="icon-cup"></span> 
                                                    <div className="title">
                                                        <h3>Award Winners</h3>
                                                    </div>   
                                                </div>
                                                <div className="overlay-box">
                                                    <h3>Award Winners</h3>
                                                    <p>How all this mistaken idea work all pleasue got.</p>
                                                </div>
                                            </div>
                                        </li> 
                                    </ul>
                                </div>
                            </div>
                        </div> 
                    </div>    
                </section>

                <Services />

                <Coupon text="EverTurf, Complete Solution for Your Landscaping Vision." discount="Get Upto 30% Off" />

                <section className="about-area">
                    <div className="container">
                        <div className="sec-title text-center">
                            <div className="title">About Our Company</div>
                            <div className="dector thm-bg-clr center"></div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                                <div className="about-text">
                                    <div className="img-holder">
                                        <img src="/assets/images/resources/about-image.jpg" alt="Awesome Image" />    
                                    </div>
                                    <div className="inner-content">
                                        <p>The Landscaper is a full-service landscaping company with a straightforward and unique design/build philosophy. We believe in having one
                                        landscape designer handle the job from its conception on paper.</p>
                                    </div>    
                                </div>
                            </div>    
                            <div className="col-xl-6 col-lg-9 col-md-12 col-sm-12">
                                <div className="about-right-box">
                                    <ul>
                                        <li>
                                            <div className="year">
                                                <h3>1976</h3>
                                            </div>
                                            <div className="text">
                                                <h3>Started at Newyork City</h3>
                                                <p>How all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.</p>
                                            </div>     
                                        </li>
                                        <li>
                                            <div className="year">
                                                <h3>1980</h3>
                                            </div>
                                            <div className="text">
                                                <h3>Best Lanscaper Award</h3>
                                                <p>Pleasure and praising pain was born and I will give you a complete account of denoncing prasue.</p>
                                            </div>     
                                        </li>
                                        <li>
                                            <div className="year">
                                                <h3>1981</h3>
                                            </div>
                                            <div className="text">
                                                <h3>18 New Branches Opened</h3>
                                                <p>Denouncing  pleasure and praising pain was born and I will give you a complete account syste expound.</p>
                                            </div>     
                                        </li>
                                    </ul>
                                </div>
                            </div>    
                        </div>
                    </div>
                </section>
                <ContactForm />
                <section className="land-scape-area">
                    <div className="container">
                        <div className="sec-title text-center">
                            <div className="title">3 Simple Steps for Your Landscape</div>
                            <div className="dector thm-bg-clr center"></div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="landscape-steps">
                                    <ul>
                                        <li>
                                            <div className="icon-holder"><span className="icon-interface thm-clr"></span></div>
                                            <span className="border-box thm-bg-clr"></span>
                                            <h3>Proposal</h3>
                                        </li>
                                        <li>
                                            <div className="icon-holder"><span className="icon-school thm-clr"></span></div>
                                            <span className="border-box thm-bg-clr vertical"></span>
                                            <h3>Construction</h3>
                                        </li>
                                        <li>
                                            <div className="icon-holder"><span className="icon-notebook thm-clr"></span></div>
                                            <span className="border-box thm-bg-clr"></span>
                                            <h3>Completion</h3>
                                        </li>
                                    </ul>
                                </div>
                            </div>    
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="landscape-content">
                                    <p>A huge number of services and works done by high-class experts using the latest technologies. We are here to meet your
                                    every demand so you could have no worries.</p>
                                    <a href="mailto:someone@example.com?Subject=Hello%20again" target="_top"><span className="icon-note-1"></span> getaquote@everturf.ca</a>
                                </div>
                            </div>    
                        </div>
                    </div>
                </section>

                <Testimonials />  
                <Clients />  
            </div>
        );
    }
}

export default Home;