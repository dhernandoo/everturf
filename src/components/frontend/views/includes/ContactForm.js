import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';
import { globals } from '../../../../data/globals'

// site key
const sitekey = globals.recaptcha_key;
// specifying your onload callback function
const callback = () => {
  console.log('Done!!!!');
};
const verifyCallback = (response) => {
  console.log(response);
};
const expiredCallback = () => {
  console.log(`Recaptcha expired`);
};
// define a variable to store the recaptcha instance
let recaptchaInstance;

class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            message: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(event) {

        event.preventDefault();

        console.log('HANDLESUBMITLOL');

        fetch('/api/contactus', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        }).then((response) => response.json())
        .then((responseJson) => {
            return responseJson.success;
        })
        .catch((error) => {
            console.error(error);
        });
    }

    render() {
        return ( 

            <section className="contact-info-area" id="contactForm">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="sec-title float-left">
                                <div className="title left">Quick Contact</div>
                                <div className="dector thm-bg-clr"></div>
                            </div>
                            <div className="top-text float-left">
                                <p>Any questions? Don't hesitate to contact us. <br />Our support team here to help you by 24*7.</p>
                            </div>    
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-7 col-md-7 col-sm-12">
                            <div className="contact-box-content">
                                <div className="contact-info-box-one">
                                    <div className="single-item">
                                        <ul>
                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-technology thm-clr"></span>
                                                </div>
                                                <div className="text-box">
                                                    <p><span>Call Us:</span><br/>+321 4567 89 012 & 345</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-note thm-clr"></span>
                                                </div>
                                                <div className="text-box">
                                                    <p><span>Mail Us:</span><br/>hello@everturf.ca</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-time thm-clr"></span>
                                                </div>
                                                <div className="text-box">
                                                    <p><span>Working Hours:</span><br/> Monday - Satday: 9.00am to 6.00pm</p>
                                                </div>
                                            </li>
                                        </ul>
                                        
                                    </div>

                                </div>    
                            </div>    
                        </div>
                        <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12">
                            <div className="contact-form">
                                <form onSubmit={ this.handleSubmit }>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input type="text" placeholder="First Name" className="form-control" name="first_name" value={this.state.first_name} onChange={this.handleChange} />
                                            <input type="email" placeholder="Email" name="email" className="form-control" value={this.state.email} onChange={this.handleChange} />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" placeholder="Last Name" className="form-control" name="last_name" value={this.state.last_name} onChange={this.handleChange} />
                                            <input type="text" placeholder="Phone" name="phone" className="form-control" value={this.state.phone} onChange={this.handleChange} />
                                            
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <textarea placeholder="Message" className="form-control" name="message" rows="5" value={this.state.message} onChange={this.handleChange} ></textarea>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <Recaptcha
                                                ref={e => recaptchaInstance = e}
                                                sitekey={sitekey}
                                                verifyCallback={verifyCallback}
                                                onloadCallback={callback}
                                                expiredCallback={expiredCallback}
                                            /> <br/>
                                            <input className="btn-one thm-bg-clr" type="submit" value="Submit Now" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactForm;