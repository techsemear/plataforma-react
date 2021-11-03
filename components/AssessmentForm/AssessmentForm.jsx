import React, {Component} from 'react'

import StepWelcome from './StepWelcome'
import StepInfos from './StepInfos'
import StepAssessment from './StepAssessment'

const numberOfSteps = 8

class AssessmentForm extends Component {
  constructor(props) {
    super(props)

    this.myRef = React.createRef()

    // Set the intiial input values
    this.state = {
      currentStep: 1,
      schooling: '',
      college: '',
      course: '',
      area: '',
      subarea: '',
      personalSite: '',
      imageProfile: '',
      home: '',
      food: '',
      routine: '',
      belonging: '',
      rest: '',
      exercise: '',
    }

    this.constant = {
      steps: numberOfSteps,
    }

    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this)

    // Bind new functions for next and previous
    this._next = this._next.bind(this)
    this._prev = this._prev.bind(this)
  }

  // Use the submitted data to set the state
  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value,
    })
  }

  // Trigger an alert on form submission
  handleSubmit = (event) => {
    event.preventDefault()
    const {home, food, routine, belonging, rest, exercise} = this.state
  }

  // Test current step with ternary
  // _next and _previous functions will be called on button click
  _next() {
    let currentStep = this.state.currentStep

    // If the current step is 1 or 2, then add one on "next" button click
    if (currentStep >= 1) currentStep = currentStep + 1
    this.setState({
      currentStep: currentStep,
    })
  }

  _prev() {
    let currentStep = this.state.currentStep
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1
    this.setState({
      currentStep: currentStep,
    })
  }

  // The "next" and "previous" button functions
  get previousbutton() {
    let currentStep = this.state.currentStep

    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <button
          className="btn-signup"
          color="secondary float-left"
          onClick={this._prev}
        >
          Anterior
        </button>
      )
    }

    // ...else return nothing
    return null
  }

  get nextbutton() {
    let currentStep = this.state.currentStep
    // If the current step is not 3, then render the "next" button

    if (currentStep < this.constant.steps) {
      return (
        <button
          className="btn-signup"
          color="primary float-right"
          onClick={this._next}
        >
          Próximo
        </button>
      )
    }
    // ...else render nothing
    return null
  }

  get submitbutton() {
    let currentStep = this.state.currentStep

    // If the current step is the last step, then render the "submit" button
    if (currentStep == this.constant.steps) {
      return (
        <button className="btn-signup" color="primary float-right">
          Enviar
        </button>
      )
    }
    // ...else render nothing
    return null
  }

  componentDidMount = () => this.handleScroll()

  componentDidUpdate = () => this.handleScroll()

  handleScroll = () => {
    const {index, selected} = this.props
    if (index === selected) {
      setTimeout(() => {
        this.myRef.current.scrollIntoView({behavior: 'auto'})
      }, 10)
    }
  }

  render() {
    const contentInfo = [
      {
        title: 'Moradia',
        subtitle:
          'Com base no nível neutro, como você avalia o local em que você vive?',
        neutral:
          'Nível Neutro: Entendo a influência do lar sobre mim e considero que moro em  um ambiente com condições de higiene e privacidade onde posso descansar,  e me sinto seguro em relação às pessoas com quem convivo dentro de casa.',
        gif: 'https://media.giphy.com/media/3orifebk0oO42ZWN20/giphy.gif',
        rating: this.state.home,
      },
      {
        title: 'Alimentação',
        subtitle:
          'Com base no nível neutro, como você avalia a sua alimentação?',
        neutral:
          'Nível Neutro: Sei a importância de uma boa alimentação como fonte de  energia para o melhor funcionamento do meu corpo e mente. Com os recursos  que tenho, faço refeições de qualidade nutricional suficiente.',
        gif: 'https://media.giphy.com/media/jKaFXbKyZFja0/giphy.gif',
        rating: this.state.food,
      },
      {
        title: 'Gestão de Rotina',
        subtitle:
          'Com base no nível neutro, como você avalia sua gestão de rotina?',
        neutral:
          'Nível Neutro: Sei que existem mais oportunidades à minha disposição do que  tempo disponível, entendo o básico da minha hierarquia de necessidades e  tento aplicar o conceito de gestão de agenda semanal e rotina, e, assim,  tenho tempo para honrar minimamente os compromissos que assumi, sem  prejudicar minha saúde ou relacionamentos.',
        gif: 'https://media.giphy.com/media/xTiTnxCaP0qE2XYalO/giphy.gif',
        rating: this.state.routine,
      },
      {
        title: 'Pertencimento',
        subtitle:
          'Com base no nível neutro, como você avalia a sua sensação de pertencimento no núcleo familiar?',
        neutral:
          'Nível Neutro: Sei a importância de uma boa alimentação como fonte de  energia para o melhor funcionamento do meu corpo e mente. Com os recursos  que tenho, faço refeições de qualidade nutricional suficiente.',
        gif: 'https://media.giphy.com/media/xT5LMXR7iA0mSSxOBG/giphy.gif',
        rating: this.state.belonging,
      },
      {
        title: 'Atividade Física',
        subtitle:
          'Com base no nível neutro, como você avalia a sua prática de exercícios físicos?',
        neutral:
          'Nível Neutro: Sei a importância da prática de exercícios físicos como fonte de energia para o melhor funcionamento do meu corpo e mente e tento os praticar pelo menos 3 vezes na semana.',
        gif: 'https://media.giphy.com/media/3oriNZoNvn73MZaFYk/giphy.gif',
        rating: this.state.exercise,
      },
      {
        title: 'Descanso',
        subtitle:
          'Com base no nível neutro, como você avalia a qualidade do seu descanso?',
        neutral:
          'Nível Neutro: Sei que o sono e o descanso estão diretamente relacionados com minha  capacidade de aprendizado, meu nível de ansiedade e meu equilíbrio físico e mental. Dessa forma, reservo e priorizo momentos de descanso e sono suficientes para minha recuperação na maior parte do mês.',
        gif: 'https://media.giphy.com/media/Jap1tdjahS0rm/giphy.gif',
        rating: this.state.rest,
      },
    ]
    return (
      <main>
        <form id="msform2" onSubmit={this.handleSubmit} ref={this.myRef}>
          <StepWelcome
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            stepStatus={1}
          />
          <StepInfos
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            schooling={this.state.schooling}
            college={this.state.college}
            course={this.state.course}
            area={this.state.area}
            subarea={this.state.subarea}
            personalSite={this.state.personalSite}
            imageProfile={this.state.imageProfile}
            stepStatus={2}
          />
          {contentInfo.map((item, index) => (
            <StepAssessment
              content={item}
              rating={item.rating}
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              key={index}
              stepStatus={index + 3}
            />
          ))}
          <div className="btn-container">
            {this.previousbutton}
            {this.nextbutton}
            {this.submitbutton}
          </div>
        </form>
      </main>
    )
  }
}
export default AssessmentForm
