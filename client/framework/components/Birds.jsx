import React from 'react'

export function Bird(props) {
  return (
    <div class="individual">
      <p>Name: {props.name}</p>
      <p>Location: {props.location}</p>
      <button>Delete</button>
      <p></p>
    </div>
  )
}