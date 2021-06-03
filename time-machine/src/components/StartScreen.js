import React from 'react';

class StartScreen extends React.Component{

    continue = event =>{
        event.preventDefault();
        this.props.nextStep();
    }

    about = event =>{
        event.preventDefault();
        this.props.displayAbout();
    }
  
    render() {
    return (
        <div className="TTM-container">
            <div className="TTM-Title">Twitter Time Machine</div>
            <div className="TTM-header" onClick={this.continue}>
                <div className="startButton">Start</div>
            </div>
            <div className='About-link' onClick={this.about}>About</div>
        </div>
        );
    }
}

export default StartScreen;