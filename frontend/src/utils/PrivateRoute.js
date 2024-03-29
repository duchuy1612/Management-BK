import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = localStorage.getItem('userCred')
  // const isLoggedIn = true;
  return (
    <Route
      {...rest}
      render={(props) =>
        JSON.parse(isLoggedIn).isAdmin === true ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  )
}

export default PrivateRoute
