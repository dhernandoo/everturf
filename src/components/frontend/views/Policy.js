import React, { Component } from 'react';
import Header from './includes/Header';

class Policy extends Component {
    render() {
        return ( 
            <div>
                <Header />

                <section className="breadcrumb-area" style={{backgroundImage: "url(/assets/images/resources/breadcrumb-bg.jpg)"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="breadcrumb-menu">
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><i className="fa fa-angle-right" aria-hidden="true"></i></li>
                                        <li className="active">Privacy Policy</li>
                                    </ul>    
                                </div>
                                <div className="title text-center">
                                <h1>Privacy Policy</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="work-single-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie commodo ullamcorper. Duis quis pulvinar mi. Nam quis orci id sapien tempor ultricies in sit amet libero. Aliquam elementum, massa quis suscipit molestie, risus sapien venenatis justo, id sollicitudin ipsum nisl ut diam. Sed congue lorem at arcu ornare posuere. Donec sed est nec nisl feugiat varius. Sed ac turpis nec metus fringilla pellentesque in vel neque. Cras tristique congue nibh ac sodales. Fusce euismod varius urna et fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas fringilla convallis lectus ut ornare. Sed lorem enim, tincidunt vitae enim nec, pretium varius nulla. Quisque et leo nibh. Mauris vehicula mi sed quam elementum scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                                <p>Nam luctus neque vitae elit vulputate, nec vulputate ligula pulvinar. Cras sit amet varius justo. Vivamus pulvinar vel quam sed eleifend. Nulla hendrerit aliquam metus sit amet auctor. Aliquam in cursus odio. Phasellus pretium lectus ac ex suscipit dignissim. Morbi sed hendrerit urna.</p>
                                
                                <p>Sed nisi nisl, gravida nec dolor sed, cursus efficitur orci. Proin nec posuere purus, quis aliquam nisl. Proin ex magna, eleifend a blandit eget, tempus in metus. Mauris interdum iaculis massa vitae dictum. Donec et porta eros, id mollis turpis. In porta fringilla metus ut vulputate. Ut vehicula id mi accumsan varius. Nulla porttitor nibh consequat tempor rhoncus. Ut fringilla lectus eget tincidunt mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in velit dictum, aliquam magna non, sodales velit. Etiam urna est, bibendum id diam a, dignissim scelerisque nibh. Proin molestie tincidunt sapien quis euismod.</p>
                                
                                <p>Nam in semper urna, at viverra orci. Etiam iaculis dolor quis justo viverra, ut tempor augue pulvinar. Ut vitae volutpat lorem. Ut suscipit rhoncus nisi, vitae porta nunc porttitor id. Phasellus vel orci massa. Vivamus mattis eu ipsum vel aliquam. Sed ultrices neque lorem, et sodales massa placerat a. Morbi quis massa at felis dictum imperdiet. Pellentesque finibus arcu ut est venenatis, in blandit sapien tristique. Nunc dignissim orci vitae ex dignissim, ut interdum massa dignissim.</p>
                                
                                <p>Aliquam at felis tempor, rhoncus turpis at, posuere tortor. Sed molestie pretium convallis. Donec ullamcorper ipsum vitae sapien interdum tincidunt. Nulla eu dolor vitae lorem sodales vehicula vulputate sed velit. Donec justo augue, mattis in nisi a, mattis ultrices erat. Donec pretium semper augue at varius. Nam porttitor dapibus hendrerit. Curabitur pretium ante ac pellentesque tempus.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Policy;