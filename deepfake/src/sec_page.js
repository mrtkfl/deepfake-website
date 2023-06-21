import React from "react";
import { Link } from 'react-router-dom';
import './App.css';

function Sec_page() {
    return (
        <div>
            <div className="App-header">
                <br />
                <br />
                <h2 className="welcome-text">
                    Willkommen zu Celebritytalk.
                    <br></br>
                    <br></br>
                    Kannst du Echt von Fake unterscheiden? 
                    <br></br>
                    <br></br>
                    Wische nach rechts, wenn du denkst es ist ein echtes Zitat.
                    <br></br>
                    <br></br>
                    Und wische nach links, wenn du denkst es ist ein Fake Zitat.
                </h2>
                </div>
                <div className="button-container">
        <Link to="/Introductionpage">
          <button className="start-button">Start</button>
        </Link>
      </div>
                </div>
  );
}

export default Sec_page;
