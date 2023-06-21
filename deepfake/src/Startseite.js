import React from "react";
import { Link } from 'react-router-dom';
import myImage from './logo2.png';
import './App.css';

function Startseite() {
    return (
        <div>
            <div className="App-header">
                <br />
                <br />
                <h2 className="welcome-text">
                    Welcome to
                </h2>
                <h2 className="celebrity-talk">
                    Celebrity Talk!
                </h2>
                <img src={myImage} alt="Bildbeschreibung" />
            </div>
            <div className="button-container">
        <Link to="/sec_page">
          <button className="start-button">Weiter</button>
        </Link>
      </div>
    </div>
  );
}

export default Startseite;
