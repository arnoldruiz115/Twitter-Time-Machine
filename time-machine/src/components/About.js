import React from 'react';

class AboutScreen extends React.Component{

    return = event =>{
        event.preventDefault();
        this.props.returnHome();
    }
  
    render() {
    return (
        <div className="TTM-container">
            <div onClick={this.return}>TTM</div>
            <div>Twitter Time machine lets you go back and see tweets from a date in the past.</div>
        </div>
        );
    }
}

export default AboutScreen;