import React, { Component } from 'react';

class Header extends Component {
    render() {
        return ( 
            <div>
                <header className="header-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="inner-content clearfix">
                                    <div className="header-left float-left">
                                        <div className="logo">
                                            <a href="index.html">
                                                <img src="/assets/images/resources/logo.png" alt="Awesome Logo"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="header-middle clearfix float-left">
                                        <ul className="info-box">
                                            <li>
                                                <div className="icon-holder">
                                                    <span className="icon-gps thm-clr"></span>    
                                                </div>
                                                <div className="title-holder">
                                                    <span>Big Smart Street</span> 
                                                    <h4>2nd Cross, Newyork, USA.</h4>   
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon-holder">
                                                    <span className="icon-time thm-clr"></span>    
                                                </div>
                                                <div className="title-holder">
                                                    <span>Mon - Satday</span> 
                                                    <h4>09.00am to 06.00pm.</h4>   
                                                </div>
                                            </li>     
                                        </ul>   
                                    </div>
                                    <div className="header-right float-right">
                                        <a href="#" className="btn-one thm-bg-clr">Get a Quote</a>      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;