import React from 'react'
import { BirdContainer } from '../framework/BirdContainer.jsx'
import { StatContainer } from './components/StatContainer.jsx'
// import MainContainer from './containers/MainContainer.jsx';

export default function App() {
  return (
    <div>
      <div class="topPart">
        <span id="dot"></span>
        <h1>Gotta birdwatch'em all!</h1> 
        <div class="dotPart">
          <span id="redDot"></span>
          <span id="yellowDot"></span>
          <span id="greenDot"></span>
        </div>
      </div>
      <div class="mainCombo">
        <BirdContainer />
        <StatContainer />
      </div>
    </div>
  )
}
