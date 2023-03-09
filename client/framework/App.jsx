import React from 'react'
import { BirdContainer } from '../framework/BirdContainer.jsx'
import { StatContainer } from './components/StatContainer.jsx'
import { UserContainer } from './UserContainer.jsx'
// import MainContainer from './containers/MainContainer.jsx';

export default function App() {
  return (
    <div>
      <div class="dotPart">
        <span id="dot"></span>
        <span id="redDot"></span>
        <span id="yellowDot"></span>
        <span id="greenDot"></span>
      </div>
      <div id="userHeader">
        <h1>Gotta birdwatch'em all!</h1> 
        <UserContainer />
      </div>
      <div class="mainCombo">
        <BirdContainer />
        <StatContainer />
      </div>
    </div>
  )
}
