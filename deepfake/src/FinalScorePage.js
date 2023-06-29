import React from 'react'
import { useLocation, Link} from 'react-router-dom'
import './App.css';

function FinalScorePage() {
  const location = useLocation()
  const score = location.state.score

  return (
    <div>
      <h5>Vielen Dank fürs Spielen!</h5>
      <h1>Endstand: {score} Punkte</h1>
      <Link to="/">
        <button className="start-button">Restart</button>
      </Link>
    </div>
  )
}

export default FinalScorePage