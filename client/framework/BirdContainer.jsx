import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Bird } from './components/Birds.jsx'
import { populateBirds, setNewLocation, setNewName } from '../features/apiSlice.js'

export function BirdContainer() {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('http://localhost:3000/bird')
      .then((response) => response.json())
      .then((data) => {
        dispatch(populateBirds(data))
      })
  }, [])
  const birds = useSelector((state) => state.birds.value)
  const arrOfBirds = []
  for (let i = 0; i < birds.length; i++) {
    arrOfBirds.push(<Bird name={birds[i].name} location={birds[i].location}/>)
  }

  return (
    <div class="birdex">
      <h3>Personal Birdex</h3>
      <input type='text' placeholder="Location" id='newLocation' onChange={(e) => dispatch(setNewLocation(e.target.value))} />
      <input type='text' placeholder="Bird Name" id='newName' onChange={(e) => dispatch(setNewName(e.target.value))} />
      <button onClick={() => {
        fetch('http://localhost:3000/',)
      }}>Add Bird</button>
      <br></br>
      <div id="mainbird">
        {arrOfBirds}
      </div>
    </div>
    )
}