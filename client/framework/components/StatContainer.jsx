import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { SpotBird } from "./SpotBird.jsx"
import { populateSpotting } from '../../features/apiSlice'

export function StatContainer() {
  const dispatch = useDispatch()
// Grabbing birding API
  useEffect(() => {
    fetch('https://api.ebird.org/v2/data/obs/US-NY/recent', {
      headers: {
        'X-eBirdApiToken': 'vgv41svubmsp'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(populateSpotting([data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], data[9]]))
      })
  }, [])
  const spots = useSelector((state) => state.birds.spots)
  const arrOfSpots = []
  for (let i = 0; i < spots.length; i++) {
    arrOfSpots.push(<SpotBird name={spots[i].comName} location={spots[i].locName}/>)
  }

  return (
    <div class="birdex">
      <h2>Regional Catch List</h2>
      <div id="catchList">
        {arrOfSpots}
      </div>
    </div>
  )
}