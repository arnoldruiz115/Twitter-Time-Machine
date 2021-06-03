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
            <div className='TTM-Title'>Select User</div>
            <div className='User-select'>
                <div className="User-Input-Container">
                    <input className="fixed-username" type="text" name="fixedusername" value='@' disabled={true}/>
                    <input className='input-username' placeholder="Username" type="text" name="username" value={values.username} onChange={changeHandler}/>
                </div>
                <div className='button-container'>
                    <button onClick={this.return}>Back</button>
                    {values.username === '' ? 
                        <button className="disabled-continue">Continue</button> :
                        <button onClick={this.continue}>Continue</button>
                    }
                </div>
            </div>
        </div>
        );
    }
}

export default UserForm;