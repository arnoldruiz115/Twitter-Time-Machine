import React from 'react';

class UserForm extends React.Component{

    continue = event =>{
        event.preventDefault();
        this.props.nextStep();
    }

    return = event =>{
        event.preventDefault();
        this.props.previousStep();
    }

    render() {
    const {values, changeHandler} = this.props;
    return (
        <div className='TTM-container'>
            <div className='TTM-Title'>
                <div><img className="back-button" onClick={this.return} src="back-button-white.svg"/></div>
                <div>Select User</div>
            </div>
            <div className='User-select'>
                <div className="User-Input-Container">
                    <input className="fixed-username" type="text" name="fixedusername" value='@' disabled={true}/>
                    <input className='input-username' placeholder="Username" type="text" name="username" value={values.username} onChange={changeHandler}/>
                </div>
                {values.username === '' ? 
                    <button className="continue-button disabled">Continue</button> :
                    <button className="continue-button" onClick={this.continue}>Continue</button>
                }
            </div>
        </div>
        );
    }
}

export default UserForm;