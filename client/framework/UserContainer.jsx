import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { populateUser } from '../features/apiSlice'
import { User } from './components/User.jsx'

export function UserContainer() {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('http://localhost:3000/user')
      .then((response) => response.json())
      .then((data) => {
        dispatch(populateUser(data))
      })
  }, [])
  const { userName, userPhoto } = useSelector((state) => state.birds)
  console.log(userName, userPhoto)

  return(
    <div class="userDiv">
      <User name={userName} photo={userPhoto}/>
    </div>
  )
}