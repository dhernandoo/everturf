import React, { Component } from 'react';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom'

import FrontPage from './components/FrontPage'
import Landing from './components/Landing'
import Policy from './components/Policy'
import Terms from './components/Terms'
import Footer from './components/Landing'

//import requireAuthentication from './utils/requireAuth'
//import SignInWith from './components/SignInWith'

class App extends Component {

    render() {
        const pathname = window.location.pathname
        return ( 
            <div>
                <div className="wrapper">
                { /*!pathname.includes('editor') ? <Header /> : ''*/ }
                { /*<SignInWith />*/}
                    <Switch>
                        <Route exact path="/" component={FrontPage} />
                        <Route path="/landing-turf" component={Landing} />
                        <Route path="/privacy-policy" component={Policy} />
                        <Route path="/terms-of-agreement" component={Terms} />
                        {/*<Route path="/profile/:id" component={Profile} />
                        <Route path="/leadview/:id" component={LeadView} />
                        <Route path="/editor" component={requireAuthentication(Editor)} />
            <Route path="**" component={Feed} />*/ }
                    </Switch>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;