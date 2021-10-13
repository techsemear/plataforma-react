<<<<<<< HEAD
import React, {createElement, useReducer} from 'react'

import {StepProgressBar} from '../../components/StepProgressBar'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

const views = {
  step1: Step1,
  step2: Step2,
}

const initialState = {
  currentStep: 1,
  steps: [
    {
      email: '',
      password: '',
      passwordConfirmation: '',
      name: '',
      username: '',
      view: 'step1',
      completed: false,
    },
    {
      birthday: '',
      classes: '',
      cpf: '',
      schooling: '',
      phone: '',
      view: 'step2',
      completed: false,
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
        if (index === stepIndex) {
          return {
            ...step,
            [name]: value,
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
  const fields = steps[stepIndex]
  const stepView = views[steps[stepIndex].view]

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

  return (
    <form id="msform" onSubmit={handleSubmit}>
      <StepProgressBar steps={steps.length} currentStep={currentStep} />

      {createElement(stepView, {
        fields,
        handleChange,
        handleSelectChange,
      })}

      <div className="btn-container">
        {stepIndex > 0 && (
          <button
            className="btn-signup"
            color="primary float-right"
            onClick={onClickPreviousStep}
          >
            Anterior
          </button>
        )}

        {stepIndex < steps.length - 1 && (
          <button
            className="btn-signup"
            color="primary float-right"
            onClick={onClickNextStep}
          >
            Próximo
          </button>
        )}

        {stepIndex === steps.length - 1 && (
          <button className="btn-signup" color="primary float-right">
            Enviar
          </button>
        )}
      </div>
    </form>
  )
}

export default MultiStepForm
||||||| parent of a613e23 (♻️ Refactor MultistepForm)
=======
import React, {createElement, useReducer} from 'react'

import {StepProgressBar} from '../../components/StepProgressBar'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

const views = {
  step1: Step1,
  step2: Step2,
}

const initialState = {
  currentStep: 1,
  steps: [
    {
      email: '',
      password: '',
      passwordConfirmation: '',
      name: '',
      username: '',
      view: 'step1',
      completed: false,
    },
    {
      birthday: '',
      classes: '',
      cpf: '',
      schooling: '',
      phone: '',
      view: 'step2',
      completed: false,
    },
    {
      birthday: '',
      classes: '',
      cpf: '',
      schooling: '',
      phone: '',
      view: 'step2',
      completed: false,
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
        if (index === stepIndex) {
          return {
            ...step,
            [name]: value,
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
  const fields = steps[stepIndex]
  const stepView = views[steps[stepIndex].view]

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

  return (
    <form id="msform" onSubmit={handleSubmit}>
      <StepProgressBar steps={steps.length} currentStep={currentStep} />

      {createElement(stepView, {
        fields,
        handleChange,
        handleSelectChange,
      })}

      <div className="btn-container">
        {stepIndex > 0 && (
          <button
            className="btn-signup"
            color="primary float-right"
            onClick={onClickPreviousStep}
          >
            Anterior
          </button>
        )}

        {stepIndex < steps.length - 1 && (
          <button
            className="btn-signup"
            color="primary float-right"
            onClick={onClickNextStep}
          >
            Próximo
          </button>
        )}

        {stepIndex === steps.length - 1 && (
          <button className="btn-signup" color="primary float-right">
            Enviar
          </button>
        )}
      </div>
    </form>
  )
}

export default MultiStepForm
>>>>>>> a613e23 (♻️ Refactor MultistepForm)
