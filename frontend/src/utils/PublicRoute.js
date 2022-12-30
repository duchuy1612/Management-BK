import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = localStorage.getItem('userCred')
  // const isLoggedIn = true;

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  )
}

export default PublicRoute