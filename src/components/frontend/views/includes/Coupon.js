import React, { Component } from 'react';

class Coupon extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return ( 
            <section className="slogan-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="inner-content">
                                <div className="slogan-left-content" style={{backgroundImage: 'url(/assets/images/resources/slogan-bg.jpg)'}}>
                                    <h3>{ this.props.text }</h3>
                                </div>
                                <div className="right-content">
                                    <h3>{ this.props.discount }</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Coupon;
