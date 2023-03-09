import React from 'react'
import { useDispatch } from 'react-redux'
import { populateBirds } from '../../features/apiSlice'

export function Bird(props) {
  const dispatch = useDispatch()
  return (
    <div class="individual">
      <p>Name: {props.name}</p>
      <p>Location: {props.location}</p>
      <button onClick={() => {
        fetch(`http://localhost:3000/${props.name}`, {method: 'DELETE'})
          .then(() => {
            fetch('http://localhost:3000/bird')
              .then((response) => response.json())
              .then((data) => {
                dispatch(populateBirds(data))
              })
          })
      }}>Delete</button>
      <p></p>
    </div>
  )
}