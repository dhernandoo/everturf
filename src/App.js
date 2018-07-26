import React, { Component } from 'react';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom'

//import Feed from './components/Feed'
import LandingHeader from './components/LandingHeader'
import Landing from './components/Landing'
import LandingFooter from './components/LandingFooter'
//import Profile from './components/Profile'
//import LeadView from './components/LeadView'
//import Editor from './components/Editor'
//import requireAuthentication from './utils/requireAuth'
//import SignInWith from './components/SignInWith'
//import  from './components'

class App extends Component {
    render() {
        const pathname = window.location.pathname
        return ( 
            <div>
                <div className="wrapper">
                { /*!pathname.includes('editor') ? <Header /> : ''*/ }
                { /*<SignInWith />*/}
                    <LandingHeader />
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        {/*<Route path="/profile/:id" component={Profile} />
                        <Route path="/leadview/:id" component={LeadView} />
                        <Route path="/editor" component={requireAuthentication(Editor)} />
            <Route path="**" component={Feed} />*/ }
                    </Switch>
                </div>
                <LandingFooter />
            </div>
        );
    }
}

export default App;