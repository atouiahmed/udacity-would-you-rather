import React, {Component} from 'react'
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";


const ProtectedRoute = ({component: Component, ...rest}) => {
    return (

        <Route
            {...rest}
            render={(props) => {
                const { authedUser} = rest;
                if (authedUser && authedUser.id) {
                    return <Component {...props}/>
                } else {
                    return <Redirect to={'/login'}/>
                }
            }}
        >

        </Route>
    )
}

export default ProtectedRoute;