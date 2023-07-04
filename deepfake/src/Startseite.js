import React from "react";
import { Link } from 'react-router-dom';
import myImage from './logo.png';
import './App.css';

function Startseite() {
  return (
    <div>
      <div className="App-header">
        <h2 className="welcome-text">
          Welcome to
        </h2>
        <h2 className="celebrity-talk">
          Celebrity Talk!
        </h2>
        <img src={myImage} alt="Bildbeschreibung" />
      </div>
      <div className="buttombutton">
        <Link to="/Erklärung">
          <button className="start-button">Weiter</button>
        </Link>
      </div>
    </div>
  );
}

export default Startseite;
