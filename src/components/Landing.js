import React, { Component } from 'react';
import ContactForm from './ContactForm';

class Landing extends Component {
    render() {
        return ( 
            <div>
                <div className="intro">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="intro-video">
                                    <a href="//fast.wistia.net/embed/iframe/noikeyb1c4?popover=true" className="wistia-popover[height=540,playerColor=2a2a2a,width=960]">
                                        <img src="https://embedwistia-a.akamaihd.net/deliveries/d5ba127bcac273855d5ed1d459ed3b2d783d728f.jpg?image_play_button=true&amp;image_play_button_color=2a2a2ae0&amp;image_crop_resized=640x360" alt="Golf Tournament Websites" className="img-responsive" />
                                    </a>
                                    <script charSet="ISO-8859-1" src="//fast.wistia.com/assets/external/popover-v1.js"></script>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h1>EverTurf</h1>
                                <h2>EverTurf makes organizing, managing and promoting your turf easy.</h2><br />
                                <p>Watch the video or scroll down to learn more</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <div className="row no-gutter benefits">

                            <h2>Lorem Ipsum</h2>

                            <div className="col-md-7">

                                <div className="padding30">
                                    <h3>Lorem Ipsum</h3><br/>

                                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget leo condimentum, feugiat eros a, faucibus augue.</h4>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget leo condimentum, feugiat eros a, faucibus augue. Donec auctor porta arcu, sit amet laoreet erat faucibus tincidunt. Vestibulum a blandit ex. Praesent faucibus suscipit lacus sit amet semper. Curabitur vitae suscipit lectus. Quisque at erat arcu. Ut vitae lectus orci. Nam efficitur mauris quis nibh laoreet pretium. Etiam et sapien ipsum. Ut vel accumsan dolor, a sodales enim. Nunc sit amet purus dolor.</p><br />

                                    <a href="#" className="green" rel="nofollow" target="_blank">Get Started</a>

                                </div>

                            </div>

                            <div className="col-md-5"> &nbsp; </div>

                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <div className="row no-gutter benefits">

                            <h2>Lorem Ipsum</h2>

                            <div className="col-md-5"> &nbsp; </div>

                            <div className="col-md-7">

                                <div className="padding30">
                                    <h3>Lorem Ipsum</h3><br/>

                                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget leo condimentum, feugiat eros a, faucibus augue.</h4>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget leo condimentum, feugiat eros a, faucibus augue. Donec auctor porta arcu, sit amet laoreet erat faucibus tincidunt. Vestibulum a blandit ex. Praesent faucibus suscipit lacus sit amet semper. Curabitur vitae suscipit lectus. Quisque at erat arcu. Ut vitae lectus orci. Nam efficitur mauris quis nibh laoreet pretium. Etiam et sapien ipsum. Ut vel accumsan dolor, a sodales enim. Nunc sit amet purus dolor.</p><br />

                                    <a href="#" className="green" rel="nofollow" target="_blank">Get Started</a>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <ContactForm />
            </div>
        );
    }
}

export default Landing;