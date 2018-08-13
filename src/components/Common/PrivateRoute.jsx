import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        false
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )

export default PrivateRoute: