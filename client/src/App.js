import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Router } from 'react-router'

import connect from "react-redux/es/connect/connect";
import history from "./boot/browserHistory";


import MainHomePage from './pages/MainHomePage/MainHomePage';
import LoginPages from './pages/LoginPages/LoginPages';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import AdminListPage from './pages/AdminListPage/AdminListPage';
import ContestPage from './pages/ContestPage/ContestPage';
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import UserLoader from './components/Route/UserLoader';
import PrivateRoute from './components/Route/PrivateRoute'

import { URL } from './api/baseURL'
import { ROLE } from './utils/consts'


class App extends Component{
    IfUserIsLoggedIn(component){
        if(this.props.user){
            return () => <Redirect to='/'/>
        }
        return component
    }

    render(){
        return(
            <UserLoader>
                <Router history={history}>
                    <Switch>
                        <Route exact path={"/"}  component={MainHomePage}/>
                        <Route path={URL.LOGIN} component={LoginPages}/>
                        <Route path={URL.SIGN_UP} component={SignUpPage}/>
                        <Route path={URL.CONTEST_TYPE} component={ContestPage}/>
                        <PrivateRoute requireRole={ROLE.ADMIN} path={URL.ADMIN_PANEL} component={AdminListPage} />
                        <Route component={ NotFoundPage } />
                    </Switch>
                </Router>
            </UserLoader>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.userReducers.user,
});
export default connect(mapStateToProps)(App);
