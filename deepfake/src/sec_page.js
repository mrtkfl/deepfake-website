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
                    Swipe left if you think its a real quoat 
                    <br></br>
                    and right if you think its fake
                    <br></br>
                    <br></br>
                    your points will be shown at the end of the game
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
