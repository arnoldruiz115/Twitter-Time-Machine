import React, {Component} from 'react'
import StartScreen from './StartScreen'
import DateForm from './DateForm'
import UserForm from './UserForm'
import Result from './Result'
import AboutScreen from './About'


class TimeMachine extends Component{
    constructor(props){
        super(props)
        this.state = {
            step: 1,
            timeSelected: null,
            username: '',
            tweetList: [],
            APICalled: false,
            listIterator: 0
        }
    }

    nextStep = () => {
        const {step} = this.state;
        this.setState({ step: step + 1});
    }

    previousStep = () => {
        const {step} = this.state;
        this.setState({ step: step - 1});
    }

    changeHandler = input => event => {
        this.setState({[input]: event.target.value});
    }

    dateHandler = (date) => {
        this.setState({timeSelected: date})
    }

    callAPI = () => {
        fetch("http://localhost:4000/test", {
            method: "post",
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify({
                username: this.state.username,
                date: this.state.timeSelected.toISOString()
            })
        })
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
                tweetList: result,
                APICalled: true
            });
          }
        )
      }

    iteratorHandler = (event) => {
        if (event.target.value === 'increase'){
            this.setState({
                listIterator: this.state.listIterator + 1
            });   
        }
        else {
            this.setState({
                listIterator: this.state.listIterator - 1
            });  
        }

    }

    displayAbout = () => {
        this.setState({ step: 5});
    }

    returnHome = () => {
        this.setState({ step: 1});
    }


    render() {
        const {step} = this.state
        const {timeSelected, username, tweetList, APICalled, listIterator} = this.state;
        const values = {timeSelected, username, tweetList, APICalled, listIterator};

        switch(step){
            case 1:
                return(
                    <StartScreen 
                    nextStep={this.nextStep}
                    displayAbout={this.displayAbout}
                    />
                )
            case 2:
                return(
                    <DateForm
                    nextStep={this.nextStep}
                    previousStep={this.previousStep}
                    dateHandler={this.dateHandler}
                    values={values}
                    />
                )
            case 3:
                return(
                    <UserForm
                    nextStep={this.nextStep}
                    previousStep={this.previousStep}
                    changeHandler={this.changeHandler('username')}
                    values={values}
                    />
                )
            case 4:
                return(
                    <Result
                    values={values}
                    callAPI={this.callAPI}
                    iteratorHandler={this.iteratorHandler}
                    />
                )
            case 5:
                return(
                    <AboutScreen
                    returnHome={this.returnHome}
                    />
                )
            default:
                return(
                    <StartScreen 
                    nextStep={this.nextStep}
                    />
                )
        }
    }
}

export default TimeMachine;