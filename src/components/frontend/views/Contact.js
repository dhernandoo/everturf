import React, { Component } from 'react';
import Header from './includes/Header';
import Nav from './includes/Nav';
import Coupon from './includes/Coupon';
import ContactForm from './includes/ContactForm';

import { Helmet } from "react-helmet";
import { seo } from '../../../data/seo';
import { globals } from '../../../data/globals';

class Contact extends Component {
    render() {
        return ( 
            <div>
                <Helmet>
                    <title>{ `${seo.CONTACT_US.title}` }</title>
                    <meta name="description" content={ `${seo.CONTACT_US.description}` } />
                    <meta name="keywords" content={`${seo.CONTACT_US.keywords}`} />
                    <meta property="og:image" content={`${seo.CONTACT_US.og_img}`} />
                    <meta property="og:title" content={`${seo.CONTACT_US.title}`} />
                    <meta property="og:description" content={`${seo.CONTACT_US.og_description}`} />
                    <meta name="twitter:card" content={`${seo.CONTACT_US.twitter_card}`} />
                    <meta name="twitter:site" content={`${seo.CONTACT_US.twitter_site}`} />
                    <meta name="twitter:title" content={`${seo.CONTACT_US.twitter_title}`} />
                    <meta name="twitter:description" content={`${seo.CONTACT_US.twitter_description}`} />
                    <meta name="twitter:image" content={`${seo.CONTACT_US.twitter_image}`} />

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
                                "@id": ${globals.url +"/"+ seo.CONTACT_US.slug},
                                "name": ${seo.CONTACT_US.title}
                                }
                            }]
                        }`}
                    </script>
                </Helmet>

                <Header />
                
                <Nav active="contact" />
                
                <section className="breadcrumb-area" style={{backgroundImage: "url(/assets/images/resources/breadcrumb-bg.jpg)"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="breadcrumb-menu">
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><i className="fa fa-angle-right" aria-hidden="true"></i></li>
                                        <li className="active">Contact Us</li>
                                    </ul>    
                                </div>
                                <div className="title text-center">
                                <h1>Contact Us</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <ContactForm />

                <Coupon text="EverTurf, Complete Solution for Your Landscaping Vision." discount="Get Upto 30% Off" />
            </div>
        );
    }
}

export default Contact;