import React, { useEffect, useReducer } from 'react'

const initialState = {
  user1: {},
  user2: {}
}

const reducerFunc = (acc, rec) => {
  switch (rec.type) {
    case 'UPDATE_USER': {
      // console.log({ ...acc, [`user${rec.userIndex}`]: rec.user })
      return { ...acc, [`user${rec.userIndex}`]: rec.user }
    }
    case 'DOWNGRADE': {
      // console.log({ ...acc, [`user${rec.userIndex}`]: rec.user })
      return { ...acc, user1: { ...rec.user, age: '21' } }
    }
    case 'NEW': {
      // console.log({ ...acc, [`user${rec.userIndex}`]: rec.user })
      return { ...acc, user1: { ...rec.user, sex: 'male'}}
    }
    default:
      return acc
  }
}

const Reducer = () => {
  const [store, dispatch] = useReducer(reducerFunc, initialState)
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'UPDATE_USER', userIndex: 1, user: { name: 'vasya' } })
    }, 1000)

    setTimeout(() => {
      dispatch({ type: 'DOWNGRADE', userIndex: 1, user: { name: 'vasya' } })
    }, 1500)

    setTimeout(() => {
      dispatch({ type: 'UPDATE_USER', userIndex: 2, user: { name: 'petr' } })
    }, 2000)

    setTimeout(() => {
      dispatch({ type: 'NEW', userIndex: 1, user: { name: 'vasya', age: '34'} })
    }, 2500)
  }, [])
  console.log(store)
  return (
    <div>
      <div>{store.user1.name}</div>
      <div>{store.user1.age}</div>
      <div>{store.user2.name}</div>
      <div>{store.user1.sex}</div>
    </div>
  )
}

export default Reducer
