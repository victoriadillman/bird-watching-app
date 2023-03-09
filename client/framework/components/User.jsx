import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { setNickname, populateUser, clearName } from '../../features/apiSlice.js'

export function User(props) {
  const dispatch = useDispatch()

  const count = useSelector((state) => state.birds.count)
  const newName = useSelector((state) => state.birds.nickname)
  console.log(count);
  return (
    <div>
      <p>User:</p>
      <img src={props.photo}></img>
      <p>Name: {props.name}</p>
      <p>Birds Caught: {count}</p>
      <input type='text' placeholder="New Nickname" id='newNickname' onChange={(e) => dispatch(setNickname(e.target.value))} />
      <button id="addNickname" onClick={() => {
        fetch(`http://localhost:3000/user/${props.name}`, {
          method: "PATCH",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({newName: newName})
        })
          .then(() => {
            fetch('http://localhost:3000/user')
              .then((response) => response.json())
              .then((data) => {
                dispatch(populateUser(data))
                dispatch(clearName())
              })
          })
      }}>Change Name</button>
    </div>
  )
}