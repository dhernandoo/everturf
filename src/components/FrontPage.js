import React, { Component } from 'react';
import Header from './Header';
import Hero from './Hero';

class FrontPage extends Component {
    render() {
        return ( 
            <div>
                <Header />
                <Hero />

            </div>
        );
    }
}

export default FrontPage;