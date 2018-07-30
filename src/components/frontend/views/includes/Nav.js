import React, { Component } from 'react';

class Nav extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return ( 
            <section className="mainmenu-area stricky">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="inner-content clearfix">
                                <div className="mainmenu-left float-left clearfix">
                                    <nav className="main-menu clearfix">
                                        <div className="navbar-header clearfix">   	
                                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                            </button>
                                        </div>
                                        <div className="navbar-collapse collapse clearfix">
                                            <ul className="navigation clearfix">
                                                <li className={ this.props.active == 'home' ? 'dropdown current' : 'dropdown' }><a href="/">Home</a></li>
                                                <li className={ this.props.active == 'services' ? 'dropdown current' : 'dropdown' }><a href="/our-services">Services</a></li>
                                                <li className={ this.props.active == 'contact' ? 'dropdown current' : 'dropdown' }><a href="/contact-us">Contact Us</a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <div className="mainmenu-middle float-right">
                                    {/*<h2><a href="tel: 0432-720-6615"><span className="icon-technology thm-clr"></span> 0432 720 6615</a></h2>*/}
                                </div>        
                            </div>
                        </div>
                    </div>
                </div>    
            </section>

        );
    }
}

export default Nav;