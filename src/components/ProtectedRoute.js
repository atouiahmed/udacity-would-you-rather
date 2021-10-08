import React, {Component} from 'react'
import {Redirect, Route} from "react-router-dom";


const ProtectedRoute = ({component: Component, ...rest}) => {
    return (

        <Route
            {...rest}
            render={(props) => {
                const { authedUser} = rest;
                if (authedUser && authedUser.id) {
                    return <Component {...props}/>
                } else {
                    return  <Redirect to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }}
                    />
                }
            }}
        >

        </Route>
    )
}

export default ProtectedRoute;