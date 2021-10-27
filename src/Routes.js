import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Homepage from './pages/Homepage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/home" component={Homepage} />
        </Switch>
    </BrowserRouter>
);

export default Routes;