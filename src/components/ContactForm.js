import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha'

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
            <div>
                <div className="container">
                    <div className="row block no-gutter">
                        <div className="col-md-6">
                            <div className="padding40">
                                <h2>Lorem Ipsum</h2>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5><br />

                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt ipsum nec auctor fermentum. Duis lacinia mauris quis leo egestas, vel feugiat lorem faucibus. Vestibulum bibendum iaculis risus, lacinia pharetra metus dapibus non. Phasellus consequat faucibus cursus. Ut rutrum vestibulum mauris, id bibendum ante cursus vitae.</p><br/>

                                <a href="#" className="green" rel="nofollow" target="_blank">Lorem ipsum</a>

                            </div>
                        </div>
                        <div className="col-md-6">                            
                            <form onSubmit={ this.handleSubmit }>
                                <p>Need more information regarding EverTurf? <br />Contact Us:</p>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label>First Name</label><br/>
                                        <input type="text" className="form-control" name="first_name" value={this.state.first_name} onChange={this.handleChange} />
                                    </div>
                                    <div className="col-sm-6">
                                        <label>Last Name</label><br/>
                                        <input type="text" className="form-control" name="last_name" value={this.state.last_name} onChange={this.handleChange} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-6">
                                        <label>Email Address</label><br/>
                                        <input type="email" name="email" className="form-control" value={this.state.email} onChange={this.handleChange} />
                                    </div>
                                    <div className="col-sm-6">
                                        <label>Phone Number</label><br/>
                                        <input type="text" name="phone" className="form-control" value={this.state.phone} onChange={this.handleChange} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xs-12">
                                        <label>Message</label><br/>
                                        <textarea className="form-control" name="message" rows="5" value={this.state.message} onChange={this.handleChange} ></textarea>
                                        
                                        <Recaptcha sitekey="6LdJdGYUAAAAAEW1xKqhAqbsGSmHVQi2pg8z0y-4" /> <br/>

                                        <input className="btn btn-main" type="submit" value="Submit Message" />
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                    { /*/<div className="row cta padding20 text-center">
                        <a href="" target="_blank" rel="nofollow">
                        CTA <i className="ion ion-android-arrow-forward"></i>
                        </a> 
        </div> */}
                </div>
            </div>
        );
    }
}

export default ContactForm;