import React, { Component } from "react";

import Step1 from "../StepProgressBar/Step1";
import Step2 from "../StepProgressBar/Step2";
import Step3 from "../StepProgressBar/Step3";
import Step4 from "../StepProgressBar/Step4";


import {StepProgressBar} from "../StepProgressBar";

class MultiStepForm extends Component {
  constructor(props) {
    super(props);

    // Set the intiial input values
    this.state = {
      currentStep: 1,
      email:"",
      username:"",
      password:"",
      cpassword:"", 
      phone:"",
      date:"",
      cpf:"",
      fname:"",
      lname:"",
    };

    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this);

    // Bind new functions for next and previous
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }

  // Use the submitted data to set the state
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  // Trigger an alert on form submission
  handleSubmit = event => {
    event.preventDefault();
    const { email, username, password, cpassword, phone, date, cpf, fname, lname } = this.state;
    };

  // Test current step with ternary
  // _next and _previous functions will be called on button click
  _next() {
    let currentStep = this.state.currentStep;

    // If the current step is 1 or 2  then add one on "next" button click
    currentStep = currentStep > 2 ? 2 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  }
  _prev() {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  }

  // The "next" and "previous" button functions
  get previousbutton() {
    let currentStep = this.state.currentStep;

    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <button className="btn-signup" color="secondary float-left" onClick={this._prev}>
          Anterior
        </button>
      );
    }

    // ...else return nothing
    return null;
  }

  get nextbutton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 4, then render the "next" button
    if (currentStep < 2) {
      return (
        <button className="btn-signup"color="primary float-right" onClick={this._next}>
          Próximo
        </button>
      );
    }
    // ...else render nothing
    return null;
  }

  get submitbutton() {
    let currentStep = this.state.currentStep;

    // If the current step is the last step, then render the "submit" button
    if (currentStep == 2) {
      return <button className="btn-signup" color="primary float-right">
          Enviar
        </button>;
    }
    // ...else render nothing
    return null;
  }

  render() {
    return (
        <form id="msform" onSubmit={this.handleSubmit}>
            <StepProgressBar currentStep={this.state.currentStep} />
            <Step1
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                email={this.state.email}
                username={this.state.username}
                password={this.state.password}
                cpassword={this.state.cpassword}
            />
            <Step2
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                phone={this.state.phone}
                birthday={this.state.date}
                cpf={this.state.cpf}
            />
            <div className="btn-container">
              {this.previousbutton}
              {this.nextbutton}
              {this.submitbutton}
            </div>
        </form>
    );
  }
}
export default MultiStepForm;