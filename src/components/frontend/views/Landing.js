import React, { Component } from 'react';
import ContactForm from './includes/ContactForm';
import Header from './includes/Header';
import Coupon from './includes/Coupon';
import YouTube from 'react-youtube';

import { Helmet } from "react-helmet";
import { seo } from '../../../data/seo';
import { globals } from '../../../data/globals';

class Landing extends Component {

    render() {

        this.array_key = this.props.array_key;

        return ( 
            <div>
                <Helmet>
                    <title>{`${seo[this.array_key].title}`}</title>
                    <meta name="description" content={`${seo[this.array_key].description}`} />
                    <meta name="keywords" content={ `${seo[this.array_key].keywords}`} />
                    <meta property="og:image" content={ `${seo[this.array_key].og_img}`} />
                    <meta property="og:title" content={ `${seo[this.array_key].title}`} />
                    <meta property="og:description" content={ `${seo[this.array_key].og_description}`} />
                    <meta name="twitter:card" content={ `${seo[this.array_key].twitter_card}`} />
                    <meta name="twitter:site" content={ `${seo[this.array_key].twitter_site}`} />
                    <meta name="twitter:title" content={ `${seo[this.array_key].twitter_title}`} />
                    <meta name="twitter:description" content={ `${seo[this.array_key].twitter_description}`} />
                    <meta name="twitter:image" content={ `${seo[this.array_key].twitter_image}`} />

                    <script type="application/ld+json">
                        {`{
                            "@context": "http://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [{
                                "@type": "ListItem",
                                "position": 1,
                                "item": {
                                "@id": ${globals.url},
                                "name": ${seo[this.array_key].title}
                                }
                            },{
                                "@type": "ListItem",
                                "position": 2,
                                "item": {
                                "@id": ${globals.url +"/"+ seo[this.array_key].slug},
                                "name": ${seo[this.array_key].title}
                                }
                            }]
                        }`}
                    </script>
                </Helmet>

                <Header />

                <section className="testimonial-area parallax-bg-one" style={{backgroundImage: "url(/assets/images/parallax-background/testimonial-bg.jpg)"}}>
                    <div className="container">
                        <div className="sec-title text-center">
                            <div className="title clr-white">{ seo[this.array_key].landing_keyword}</div>
                            <div className="dector thm-bg-clr center"></div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-12">
                                <div className="video-content-box">
                                    <div className="video-holder">
                                        <YouTube className="embed-responsive-item" containerClassName="embed-responsive embed-responsive-16by9" videoId={'sZCzg1-d67Q'} />
                                    </div>    
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12">
                                    <div className="testimonial-block-one">
                                        <div className="inner-box">
                                            <div className="text">
                                                <p>Lorem ipsum</p>
                                            </div>
                                        </div>
                                        <div className="author-content">
                                            <h3>Lorem Ipsum <span className="thm-clr">- Lorem Ipsum</span></h3>
                                        </div>
                                    </div>
                            </div>
                        </div>    
                    </div>
                </section>
                
                <section className="who-weare-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-5 col-md-12 col-sm-12">
                                <div className="who-weare-image">
                                    <div className="inner">
                                        <img src="assets/images/resources/who-weare.jpg" alt="Awesome Image" />
                                    </div>    
                                </div> 
                            </div>
                            <div className="col-xl-6 col-lg-7 col-md-12 col-sm-12">
                                <div className="who-weare-content">
                                    <div className="sec-title">
                                        <div className="title left">Lorem Ipsum</div>
                                        <div className="dector thm-bg-clr"></div>
                                    </div>
                                    <div className="text-holder">
                                        <h3>30+ years of experience our staff keep your property looking and functioning beautifully, Our landscapers are fully licensed.</h3>
                                        <p>The Landscaper is a full-service landscaping company with a straightforward and unique design/build philosophy. We believe in having one landscape designer handle the job from its conception on paper.</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>

                <Coupon text="EverTurf, Complete Solution for Your Landscaping Vision." discount="Get Upto 30% Off" />

                <ContactForm />

                <section>
                    <div className="container">

                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div className="content-box">

                                    <div className="key-benefits-service">
                                        <div className="sec-title">
                                            <div className="title left">Key Benefits of Service</div>
                                            <div className="dector thm-bg-clr"></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-12 col-lg-12">
                                                <div className="key-benefits-content">
                                                    <div className="single-box">
                                                        <div className="icon-holder">
                                                            <div className="hexagon-content">
                                                                <div className="hexagon">   
                                                                    <div className="icon">
                                                                        <span className="icon-shield-1 thm-clr"></span>    
                                                                    </div>
                                                                </div> 
                                                            </div> 
                                                        </div>
                                                        <div className="text-holder">
                                                            <h3><a href="#">Full Guarantees for All Works</a></h3>
                                                            <p>Denouncing pleasure and praising pain was born and we will give you a complete of the system expound the actual teachings of the great explorer.</p>    
                                                        </div>    
                                                    </div>
                                                    <div className="single-box">
                                                        <div className="icon-holder">
                                                            <div className="hexagon-content">
                                                                <div className="hexagon">   
                                                                    <div className="icon">
                                                                        <span className="icon-nature-7 thm-clr"></span>    
                                                                    </div>
                                                                </div> 
                                                            </div> 
                                                        </div>
                                                        <div className="text-holder">
                                                            <h3><a href="#">Naturally Sourced Materials</a></h3>
                                                            <p>Give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder.</p>    
                                                        </div>    
                                                    </div>
                                                    <div className="single-box">
                                                        <div className="icon-holder">
                                                            <div className="hexagon-content">
                                                                <div className="hexagon">   
                                                                    <div className="icon">
                                                                        <span className="icon-fence thm-clr"></span>    
                                                                    </div>
                                                                </div> 
                                                            </div> 
                                                        </div>
                                                        <div className="text-holder">
                                                            <h3><a href="#">Safety and Secure Service</a></h3>
                                                            <p>Praising pain was born and I will give you a complete account of the systemexpound actual teachings of the great explorer of the truth of human happiness.</p>    
                                                        </div>    
                                                    </div>
                                                </div>        
                                            </div>
                                        </div>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Landing;