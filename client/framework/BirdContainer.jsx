import React from 'react'
import { Bird } from './components/Birds.jsx'

export function BirdContainer() {
  return (
    <div class="birdex">
      <h3>Personal Birdex</h3>
      <button>Add Bird</button>
      <br></br>
      <div id="mainbird">
        <Bird />
        <Bird />
      </div>
    </div>
    )
}