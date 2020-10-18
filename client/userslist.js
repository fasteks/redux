import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateUsername, updateUsers } from './redux/reducers/users'

const Userslist = () => {
  const userName = useSelector((store) => {
    return store.users.name
  })
  const repoList = useSelector((store) => {
    return store.users.list
  })

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(updateUsers())
  }, [])

  return (
    <div className="m-1">
      List of user repo:
      <div>
        <input
          type="text"
          className="border-black border-2"
          onChange={(event) => {
            dispatch(updateUsername(event.target.value))
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              dispatch(updateUsers())
            }
          }}
          value={userName}
        />
      </div>
      {repoList.map((it) => {
        return <div key={it.name}>{it.name}</div>
      })}
    </div>
  )
}

export default Userslist
