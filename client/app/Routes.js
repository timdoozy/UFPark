import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import App from './components/App/App';
import NotFound from './components/App/NotFound';
import Home from './components/Home/Home';
import List from './components/ListView/ListView';
import Map from './components/Map/MapView';

class Routes extends Component {

    constructor(props) {
        super(props);
        this.state={
            avail:100,
            decals:"All"
        }
    }

    render() {
        return (
            <Router>
                <App>
                    <Switch>
                        <Route exact path="/" component={Map}/>
                        <Route path="/list" 
                        render={(props) => <List {...props} full={this.state.avail} decals={this.state.decals}/>}/>
                        <Route component={NotFound}/>
                    </Switch>
                </App>
            </Router>
            )
        }
    }
export default Routes;