import React from 'react';
import {
    Link
  } from "react-router-dom";

import './App.css';

class Start extends React.Component{
    constructor(props){
      super(props);
      this.state={apiResponse: []};
    }
  
    render() {
    return (
        <div className="App">
            <header className="App-header">
                <p>TTM</p>
                <Link to="/select">
                    <div className="startButton">Start</div>
                </Link>
            </header>
        </div>
        );
    }
}

export default Start;