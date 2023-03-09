import React from "react"
import { useSelector } from "react-redux"

export function User(props) {
  const count = useSelector((state) => state.birds.count)
  console.log(count);
  return (
    <div>
      <p>User:</p>
      <img src={props.photo}></img>
      <p>Name: {props.name}</p>
      <p>Birds Caught: {count}</p>
    </div>
  )
}