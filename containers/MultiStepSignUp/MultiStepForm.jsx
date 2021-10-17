import React, {createElement, useReducer} from 'react'
import styles from './MultiStepSignUp.module.css'

import {StepProgressBar} from '../../components/StepProgressBar'
import StepTemplate from './StepTemplate'
import Step1Form from './Step1Form'
import Step2Form from './Step2Form'

console.log(styles)

const initialState = {
  currentStep: 1,
  steps: [
    {
      fields: {
        email: '',
        password: '',
        passwordConfirmation: '',
        name: '',
        username: '',
      },
      title: 'Crie sua Conta🌱',
      subtitle: 'Passo 1',
      view: Step1Form,
      completed: false,
      disabled: true,
    },
    {
      fields: {
        birthday: '',
        classes: '',
        cpf: '',
        schooling: '',
        phone: '',
      },
      title: 'Identificação e Contato',
      subtitle: 'Passo 2',
      view: Step2Form,
      completed: false,
      disabled: true,
    },
  ],
}

const multistepSate = (state, action) => {
  switch (action.type) {
    case 'NEXT_STEP': {
      return {
        ...state,
        currentStep: action.payload,
      }
    }

    case 'PRVEIOUS_STEP': {
      return {
        ...state,
        currentStep: action.payload,
      }
    }

    case 'UPDATE_FIELD': {
      const {name, value, stepIndex} = action.payload
      const steps = state.steps.map((step, index) => {
        const fields = {
          ...step.fields,
          [name]: value,
        }

        const isEmpty = Object.keys(fields).some((key) => fields[key] === '')

        if (index === stepIndex) {
          return {
            ...step,
            fields,
            completed: !isEmpty,
            disabled: isEmpty,
          }
        }

        return step
      })

      return {
        ...state,
        steps,
      }
    }

    case 'SUBMIT_FORM': {
      console.log('SUBMIT_FORM')
      return state
    }

    default:
      state
  }
}

const MultiStepForm = () => {
  const [state, dispatch] = useReducer(multistepSate, initialState)
  const {currentStep, steps} = state
  const stepIndex = currentStep - 1
  const fields = steps[stepIndex].fields
  const stepView = steps[stepIndex].view
  const currentStepData = steps[stepIndex]

  const handleSubmit = (event) => {
    event.preventDefault()

    return
  }

  const onClickNextStep = (event) => {
    event.preventDefault()

    dispatch({type: 'NEXT_STEP', payload: currentStep + 1})
  }

  const onClickPreviousStep = (event) => {
    event.preventDefault()

    dispatch({type: 'PRVEIOUS_STEP', payload: currentStep - 1})
  }

  const handleSelectChange = (selectValue, action) => {
    const {value} = selectValue
    const {name} = action

    dispatch({
      type: 'UPDATE_FIELD',
      payload: {
        value,
        name,
        stepIndex,
      },
    })
  }

  const handleChange = (event) => {
    const {value, name} = event.currentTarget

    dispatch({
      type: 'UPDATE_FIELD',
      payload: {
        value,
        name,
        stepIndex,
      },
    })
  }

  console.log({currentStepData})

  return (
    <div className={styles.signUpPage}>
      <form className={styles.signUpForm} onSubmit={handleSubmit}>
        <StepProgressBar steps={steps.length} currentStep={currentStep} />

        <StepTemplate
          title={currentStepData.title}
          subtitle={currentStepData.subtitle}
        >
          {createElement(stepView, {
            fields,
            handleChange,
            handleSelectChange,
          })}
        </StepTemplate>

        <div className={styles.btnContainer}>
          {stepIndex > 0 && (
            <button className={styles.btnSignup} onClick={onClickPreviousStep}>
              Anterior
            </button>
          )}

          {stepIndex < steps.length - 1 && (
            <button
              disabled={currentStepData.disabled}
              className={styles.btnSignup}
              onClick={onClickNextStep}
            >
              Próximo
            </button>
          )}

          {stepIndex === steps.length - 1 && (
            <button className={styles.btnSignup}>Enviar</button>
          )}
        </div>
      </form>
    </div>
  )
}

export default MultiStepForm
