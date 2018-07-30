import React, { Component } from 'react';
import { globals } from '../../../../data/globals'

class Footer extends Component {
    render() {
        return ( 
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                            <div className="single-footer-widget">
                                <div className="our-info">
                                    <div className="footer-logo">
                                        <a href="index.html">
                                            <img src="/assets/img/logo-small.png" alt="Awesome Logo" />
                                        </a>
                                    </div>
                                    <ul className="footer-contact-info">
                                        <li>
                                            <div className="icon-holder">
                                                <span className="icon-technology thm-clr"></span>    
                                            </div>
                                            <div className="text-holder">
                                                <p><span>Phone:</span> { globals.phone }</p>
                                            </div>   
                                        </li>
                                        <li>
                                            <div className="icon-holder">
                                                <span className="icon-note thm-clr"></span>    
                                            </div>
                                            <div className="text-holder">
                                                <p><span>Email:</span> {globals.email}</p>
                                            </div>   
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div className="single-footer-widget pdtop-50">
                                <div className="title">
                                    <h3>Usefull Links</h3>
                                    <div className="decor thm-bg-clr"></div>
                                </div>
                                <ul className="usefull-links left">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/contact-us">Contact Us</a></li>
                                </ul>
                                <ul className="usefull-links">
                                    <li><a href="/our-services">Our Services</a></li>
                                </ul> 
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-10 col-md-6 col-sm-12">
                            <div className="single-footer-widget pdtop-50 mar-top50">
                                <div className="title">
                                    <h3>Get latest updates</h3>
                                    <div className="decor thm-bg-clr"></div>
                                </div>
                                <div className="subscribe-form-area" style={{ paddingTop: '0px', paddingBottom: '15px'}}>
                                    <div className="subscribe-form">
                                        <form action="#">
                                            <input type="email" name="email" placeholder="Your E-mail Address" />
                                            <button className="thm-bg-clr" type="submit">Subscribe</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="fmenu-social-links-box">
                                <ul className="footer-menu float-left">
                                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                                    <li><a href="/terms-of-use">Terms of Use</a></li>
                                </ul>
                                <ul className="footer-social-links float-right">
                                    <li><a href={ globals.facebook_url }><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href={ globals.twitter_url }><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href={ globals.linkedin_url }><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    <li><a href={ globals.rss_url }><i className="fa fa-rss" aria-hidden="true"></i></a></li>
                                </ul>    
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;