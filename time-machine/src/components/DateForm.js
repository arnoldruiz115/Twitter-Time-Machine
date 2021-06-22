import React from 'react';
import DatePicker from 'react-date-picker';

class DateForm extends React.Component{
    continue = event =>{
        event.preventDefault();
        this.props.nextStep();
    }

    return = event =>{
        event.preventDefault();
        this.props.previousStep();
    }

    render() {
    const {values, dateHandler} = this.props;
    const minDate = new Date('11/07/2010')
    return (
        <div className='TTM-container'>
            <div className='TTM-Title'>
                <div><img className="back-button" onClick={this.return} src="back-button-white.svg"/></div>
                <div>Select Date</div>
            </div>
            <div className='TTM-Date'>
                <DatePicker
                onChange={dateHandler}
                value={values.timeSelected}
                format='MM/dd/y'
                className='date-text'
                maxDate={new Date()}
                minDate={minDate}
                />
                <div className='button-container'>
                    {values.timeSelected === null ? 
                        <button className="continue-button disabled">Continue</button> :
                        <button className="continue-button" onClick={this.continue}>Continue</button>
                    }
                </div>
            </div>
        </div>
        );
    }
}

export default DateForm;