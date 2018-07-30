import React, { Component } from 'react';

class LandingHeader extends Component {
    render() {
        return ( 
            <div>
                <div className="top-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-10">
                                {/*<i className="ion ion-ios-telephone"></i> <a href="tel:1-111-111-1111">1-111-111-1111</a> &nbsp;
                                <i className="ion ion-email"></i>
        <a href="mailto:info@everturf.com">info@EverTurf.com</a>*/}
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
                                <a href="/"><img src="/assets/img/logo.png" className="logo" alt="EverTurf Logo" title="EverTurf Logo" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingHeader;