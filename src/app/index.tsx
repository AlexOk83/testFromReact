import React from 'react';
import {Route, Switch} from "react-router-dom";

import Header from "../components/header";
import Footer from '../components/footer';
import LoginPage from "../pages/loginPage";
import RegistrationPage from "../pages/registrationPage";
import RestorePage from "../pages/restorePage";

import HomePage from "../pages/homePage";
import '../common/styles/settings.sass'

export default class App extends React.Component<{}> {

    render() {

        return (
            <div className="container">
                <Header />
                <Switch>
                    <Route exact path='/' component={LoginPage} />
                    <Route path='/reg' component={RegistrationPage} />
                    <Route path='/restore' component={RestorePage} />
                    <Route path='/home' component={HomePage} />
                </Switch>
                <Footer />
            </div>
        );
    }
}
