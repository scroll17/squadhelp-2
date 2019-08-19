import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";



import { URL } from '../../api/baseURL'

import { getUser } from "../../actions/actionCreator";
import connect from "react-redux/es/connect/connect";

import { isEmpty } from 'lodash';

class PrivateRoute extends Component{
    renderPage(){
        const { user, isFetching, requireRole, path, component} = this.props;
        if ((user.role !== requireRole) && isFetching === false){
            return <Redirect to={URL.NOT_FOUND} />;
        }
        return( <Route path={path}  component={component}/> )
    }


    render(){
        const { user } = this.props;
        return(
            <>
                { user && this.renderPage() }
                { isEmpty(localStorage) && <Redirect to={URL.NOT_FOUND} /> }
            </>
        )
    }
}


const mapStateToProps = (state) => ({
    user: state.userReducers.user,
    isFetching: state.userReducers.isFetching
});
const mapDispatchToProps = (dispatch) => ({
    getUser: () => dispatch(getUser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);



//Object.keys(requireProperty)[0]

