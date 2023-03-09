import React from "react"

export function SpotBird(props) {
  let string = props.location;
  let arr = string.split(' ');
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'US-NY') {
      arr = arr.slice(0, i)
    }
  }
  string = arr.join(' ');
  return (
    <div class="listOfSpots">
      <p>Name: {props.name}</p>
      <p>Location: {string}</p>
      <hr></hr>
    </div>
  )
}