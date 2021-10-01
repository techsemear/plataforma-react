import React, { Component } from "react";
import Image from 'next/image'

import {Button} from '../Button'
import Step4 from "../StepProgressBar/Step4";
import StepAssessment from "./StepAssessment";


import image from "../../assets/image/landing-1/mentor3.png"



import {StepProgressBar} from "../StepProgressBar";
const numberOfSteps = 7;

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
    currentStep = currentStep >= 2 ? currentStep + 1 : currentStep + 1
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
    if (currentStep < 7) {
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
    if (currentStep == 7 ) {
      return <button className="btn-signup" color="primary float-right">
          Enviar
        </button>;
    }
    // ...else render nothing
    return null;
  }
  
  render() {
        const numberOfSteps = 7;
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
        gif: 'https://media.giphy.com/media/xT5LMXR7iA0mSSxOBG/giphy.gif',
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
        <Step4
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                fname={this.state.fname}
                lname={this.state.lname}
        />
          {contentInfo.map((item, index) => (
          <StepAssessment
            title={item.title}
            subtitle={item.subtitle}
            neutral={item.neutral}
            gif={item.gif}
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            key={index}
            stepStatus={index+2}
          />
        ))}
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