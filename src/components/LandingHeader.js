import React, { Component } from 'react';

class LandingHeader extends Component {
    render() {
        return ( 
            <div>
                <div className="top-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-10">
                                {/*<i className="ion ion-ios-telephone"></i> <a href="tel:1-855-615-8200">1-855-615-8200</a> &nbsp;
                                <i className="ion ion-email"></i>
        <a href="mailto:info@eventcaddy.com">info@EventCaddy.com</a>*/}
                            </div>
                            <div className="col-sm-2 text-right">

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <img src="/assets/img/logo.png" className="logo" alt="Event Caddy's Golf Tournament Websites" title="Event Caddy Logo for Golf Tournament Websites" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingHeader;