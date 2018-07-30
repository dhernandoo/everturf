import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import DefaultHeadHelmet from './components/frontend/DefaultHeadHelmet'
import Home from './components/frontend/views/Home'
import OurServices from './components/frontend/views/OurServices'
import Contact from './components/frontend/views/Contact'
import Landing from './components/frontend/views/Landing'
import Policy from './components/frontend/views/Policy'
import Terms from './components/frontend/views/Terms'
import Footer from './components/frontend/views/includes/Footer'

class App extends Component {

    render() {
        return ( 
            <div>
                <DefaultHeadHelmet />
                <div className="wrapper">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/our-services" component={OurServices} />
                        <Route exact path="/contact-us" component={Contact} />
                        <Route exact path="/privacy-policy" component={Policy} />
                        <Route exact path="/terms-of-use" component={Terms} />

                        { /*DEFINE LANDINGS*/ }
                        <Route exact path="/landing-turf" component={() => <Landing array_key="LANDING_TURF" />} />
                        <Route exact path="/landing-turf2" component={() => <Landing array_key="LANDING_TURF_2" />} />
                    </Switch>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;