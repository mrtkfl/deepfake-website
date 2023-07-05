import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import './App.css';

function FinalScorePage() {
  const location = useLocation()
  const score = location.state.score

  let message;
  if (score >= 1 && score <= 2) {
    message = "Du konntest audio Deepfakes schlecht erkennen.";
  } else if (score >= 3 && score <= 4) {
    message = "Du konntest audio Deepfakes mittelmäßig erkennen.";
  } else if (score >= 5 && score <= 6) {
    message = "Du konntest audio Deepfakes gut erkennen.";
  } else if (score >= 7 && score <= 8) {
    message = "Du konntest audio Deepfakes sehr gut erkennen.";
  }

  return (
    <div>
      <h5>Vielen Dank fürs Spielen!</h5>
      <h1>Endstand: {score} Punkte</h1>
      <h5>{message}</h5>
      <div className='buttombutton'>
        <Link to="/">
          <button className="start-button">Restart</button>
        </Link>
      </div>
    </div>
  )
}

export default FinalScorePage