import axios from 'axios'

const UPDATE_USERNAME = 'redux/users/UPDATE_USERNAME'
const UPDATE_USERS = 'redux/users/UPDATE_USERS'

const initialState = {
  name: 'Ivan',
  list: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERNAME:
      return {
        ...state,
        name: action.name
      }
    case UPDATE_USERS:
      return {
        ...state,
        list: action.list
      }
    default:
      return state
  }
}

export function updateUsername(name) {
  return { type: UPDATE_USERNAME, name }
}

export function updateUsers() {
  return (dispatch, getState) => {
    const store = getState()
    const { name } = store.users
    axios(`https://api.github.com/users/${name}/repos`)
      .then(({ data }) => {
        dispatch({ type: UPDATE_USERS, list: data })
      })
      .catch(() => {})
  }
}
