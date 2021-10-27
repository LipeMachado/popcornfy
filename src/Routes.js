import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import isAuthenticated from './Auth';
import Homepage from './pages/Homepage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';

const PrivateRoute = ({ component: Component, ... rest }) => (
    <Route {... rest} render={props=>(
        isAuthenticated() ? (
            <Component {... props} />
        ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
    )} />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/login" component={LoginPage} />
            <PrivateRoute exact path="/home" component={Homepage} />
        </Switch>
    </BrowserRouter>
);

export default Routes;