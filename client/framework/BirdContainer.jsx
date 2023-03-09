import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Bird } from './components/Birds.jsx'
import { populateBirds } from '../features/apiSlice.js'

export function BirdContainer() {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('http://localhost:3000/bird')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(populateBirds(data))
      })
  }, [])
  const birds = useSelector((state) => state.birds.value)
  console.log(birds)
  const arrOfBirds = []
  for (let i = 0; i < birds.length; i++) {
    arrOfBirds.push(<Bird name={birds[i].name} location={birds[i].location}/>)
  }

  return (
    <div class="birdex">
      <h3>Personal Birdex</h3>
      <button>Add Bird</button>
      <br></br>
      <div id="mainbird">
        {arrOfBirds}
      </div>
    </div>
    )
}