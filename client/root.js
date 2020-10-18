import React from 'react'
import { Provider } from 'react-redux'
import Users from './userslist'
import store from './redux'

const Root = () => {
  return (
    <Provider store={store}>
      <Users />
    </Provider>
  )
}

export default Root
