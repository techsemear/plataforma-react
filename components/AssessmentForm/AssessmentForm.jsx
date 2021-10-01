import React, { Component } from "react";
import Image from 'next/image'

import {Button} from '../Button'
import Step1 from "../StepProgressBar/Step1";
import Step2 from "../StepProgressBar/Step2";
import Step3 from "../StepProgressBar/Step3";
import StepAssessment from "./StepAssessment";

import image from "../../assets/image/landing-1/mentor3.png"



import {StepProgressBar} from "../StepProgressBar";

class AssessmentForm extends Component {
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

    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
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
    // If the current step is not 3, then render the "next" button
    if (currentStep < 3) {
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
    if (currentStep > 2) {
      return <button className="btn-signup" color="primary float-right">
          Enviar
        </button>;
    }
    // ...else render nothing
    return null;
  }

  render() {
    const numberOfSteps = 7
    const contentInfo = [
      {
        title: 'Moradia',
        subtitle: 'Como você avalia o local em que você vive?',
        neutral:
          'Nível Neutro: Sei a importância de uma boa alimentação como fonte de  energia para o melhor funcionamento do meu corpo e mente. Com os recursos  que tenho, faço refeições de qualidade nutricional suficiente.',
        gif: 'https://media.giphy.com/media/3o6MbnfLBGvNY6HwGc/giphy.gif',
      },
      {
        title: 'Alimentação',
        subtitle: 'Como você avalia a sua alimentação?',
        neutral:
          'Nível Neutro: Sei a importância de uma boa alimentação como fonte de  energia para o melhor funcionamento do meu corpo e mente. Com os recursos  que tenho, faço refeições de qualidade nutricional suficiente.',
        gif: 'https://media.giphy.com/media/jKaFXbKyZFja0/giphy.gif',
      },
      {
        title: 'Gestão de Rotina',
        subtitle: 'Como você avalia a sua alimentação?',
        neutral:
          'Nível Neutro: Sei a importância de uma boa alimentação como fonte de  energia para o melhor funcionamento do meu corpo e mente. Com os recursos  que tenho, faço refeições de qualidade nutricional suficiente.',
        gif: 'https://media.giphy.com/media/xTiTnxCaP0qE2XYalO/giphy.gif',
      },
      {
        title: 'Pertencimento',
        subtitle: 'Como você avalia a sua alimentação?',
        neutral:
          'Nível Neutro: Sei a importância de uma boa alimentação como fonte de  energia para o melhor funcionamento do meu corpo e mente. Com os recursos  que tenho, faço refeições de qualidade nutricional suficiente.',
        gif: 'https://media.giphy.com/media/xT5LMIvGZNaWBldvYQ/giphy.gif',
      },
      {
        title: 'Atividade Física',
        subtitle: 'Como você avalia a sua alimentação?',
        neutral:
          'Nível Neutro: Sei a importância de uma boa alimentação como fonte de  energia para o melhor funcionamento do meu corpo e mente. Com os recursos  que tenho, faço refeições de qualidade nutricional suficiente.',
        gif: 'https://media.giphy.com/media/hNkaMEn1KVhcs/giphy.gif',
      },
      {
        title: 'Descanso',
        subtitle: 'Como você avalia a sua alimentação?',
        neutral:
          'Nível Neutro: Sei a importância de uma boa alimentação como fonte de  energia para o melhor funcionamento do meu corpo e mente. Com os recursos  que tenho, faço refeições de qualidade nutricional suficiente.',
        gif: 'https://media.giphy.com/media/Avwm4ZRDV0c9O/giphy.gif',
      },
    ]
    return (
      <form id="msform2" onSubmit={this.handleSubmit}>
        <StepProgressBar
          currentStep={this.state.currentStep}
          numberOfSteps={numberOfSteps}
        />
        <StepAssessment
          title={contentInfo[0].title}
          subtitle={contentInfo[0].subtitle}
          neutral={contentInfo[0].neutral}
          gif={contentInfo[0].gif}
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
        />
        <StepAssessment
          title={contentInfo[1].title}
          subtitle={contentInfo[1].subtitle}
          neutral={contentInfo[1].neutral}
          gif={contentInfo[1].gif}
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
        />
        <div className="btn-container">
          {this.previousbutton}
          {this.nextbutton}
          {this.submitbutton}
        </div>
      </form>
    )
  }
}
export default AssessmentForm;