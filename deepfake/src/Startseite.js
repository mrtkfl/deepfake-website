import React from "react";
import { Link } from 'react-router-dom';
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
            </div>
            <Link to="/Introductionpage">
                <button className="start-button">Start</button>
            </Link>
        </div>
    );
}

export default Startseite;
