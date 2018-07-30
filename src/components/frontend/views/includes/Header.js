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
                                            <a href="/">
                                                <img src="/assets/img/logo-small.png" className="img-fluid" alt="Awesome Logo"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="header-middle clearfix float-left">
                                        <ul className="info-box">
                                            <li>
                                                <div className="icon-holder">
                                                    <span className="icon-time thm-clr"></span>    
                                                </div>
                                                <div className="title-holder">
                                                    <span>Mon - Satday</span> 
                                                    <h4>09.00am to 06.00pm.</h4>   
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon-holder">
                                                    <span className="icon-technology thm-clr"></span>    
                                                </div>
                                                <div className="title-holder">
                                                    <h2 style={{ margin:"0px", lineHeight: "2.9rem" }}><a href="tel: 0432-720-6615">0432 720 6615</a></h2>
                                                </div>
                                            </li>     
                                        </ul>   
                                    </div>
                                    <div className="header-right float-right">
                                        <a href="/contact-us" className="btn-one thm-bg-clr">Get a Quote</a>      
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