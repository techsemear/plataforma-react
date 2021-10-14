import React, {Fragment, useState} from 'react'
import Image from 'next/image'

import {Heading} from '../Heading'

import {loadGetInitialProps} from 'next/dist/shared/lib/utils'

let StepAssessment = (props) => {
  if (props.currentStep !== props.stepStatus) {
    return null
  }

  return (
    <fieldset>
      <div className="assessment-area position-relative z-index-1 overflow-hidden mt-5">
        <div className="container">
          <Heading level="h1" ftColor="quinary" className="fs-title">
            {props.content.title}
          </Heading>
          <div className="row justify-content-center">
            <div
              className="col-xl-7 col-lg-8 col-md-11 col-sm-12 order-0"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content position-text">
                <Heading level="h5" ftColor="secondary">
                  {props.content.subtitle}
                </Heading>
                <Heading level="h6" ftColor="quinary">
                  {props.content.neutral}
                </Heading>
              </div>
            </div>
            <div
              className="col-xl-5 col-lg-4 col-md-7 col-sm-8 order-1"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="assessment-gif position-relative">
                <Image
                  src={props.content.gif}
                  alt="gif"
                  width={400}
                  height={300}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
          <NumberInput />
        </div>
      </div>
    </fieldset>
  )
}

export default StepAssessment

const assessmentStatus = {
  1: {
    label: 'Nada Satisfeito',
    class: 'rangeStatus--danger',
  },
  2: {
    label: 'Nada Satisfeito',
    class: 'rangeStatus--danger',
  },
  3: {
    label: 'Pouco Satisfeito',
    class: 'rangeStatus--warning',
  },
  4: {
    label: 'Pouco Satisfeito',
    class: 'rangeStatus--warning',
  },
  5: {
    label: 'Minimamente Satisfeito',
    class: 'rangeStatus--attention',
  },
  6: {
    label: 'Minimamente Satisfeito',
    class: 'rangeStatus--attention',
  },
  7: {
    label: 'Satisfeito',
    class: 'rangeStatus--neutral',
  },
  8: {
    label: 'Muito Satisfeito',
    class: 'rangeStatus--success',
  },
  9: {
    label: 'Muito Satisfeito',
    class: 'rangeStatus--success',
  },
  10: {
    label: 'Muito Satisfeito',
    class: 'rangeStatus--success',
  },
}

function NumberInput() {
  const [inputAssessment, setInputAssessment] = useState(7)

  const handleChange = (event) => {
    const value = event.currentTarget.value
    setInputAssessment(value)
  }

  return (
    <Fragment>
      <div className="row justify-content-center mt-3">
        {Object.keys(assessmentStatus).map((item) =>
          parseInt(item) <= inputAssessment ? (
            <button
              type="button"
              className={`btn-assessment d-flex justify-content-center rangeChoosen`}
              key={`btn-${parseInt(item) + 1}`}
              onClick={handleChange}
              value={parseInt(item)}
            >
              <span>{item}</span>
            </button>
          ) : (
            <button
              type="submit"
              className={`btn-assessment d-flex justify-content-center ${
                assessmentStatus[parseInt(item)].class
              }`}
              key={`btn-${parseInt(item) + 1}`}
              onClick={handleChange}
              value={parseInt(item)}
            >
              <span>{item}</span>
            </button>
          ),
        )}
        <input type="hidden" value={inputAssessment}/>
      </div>
    </Fragment>
  )
}

function Range() {
  const [inputAssessment, setInputAssessment] = useState(7)

  const handleChange = (event) => {
    const value = event.currentTarget.value
    setInputAssessment(value)
  }

  const getStatusClassName = () => {
    if (inputAssessment >= 1 && inputAssessment < 3) {
      return 'rangeStatus--danger'
    }
    if (inputAssessment >= 3 && inputAssessment < 5) {
      return 'rangeStatus--warning'
    }
    if (inputAssessment >= 5 && inputAssessment < 7) {
      return 'rangeStatus--atention'
    }
    if (inputAssessment == 7) {
      return 'rangeStatus--neutral'
    }
    if (inputAssessment > 7) {
      return 'rangeStatus--success'
    }
  }
  return (
    <Fragment>
      <div
        className="order-lg-1 order-1"
        data-aos="fade-right"
        data-aos-duration={800}
        data-aos-once="true"
      >
        <div className="container mt-3">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-xl-10 col-lg-10 col-md-10 col-sm-12 order-lg-0">
              <div className="order-1 rangeAssessment">
                <input
                  className={`rangeAssessmentInput ${getStatusClassName()}`}
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  id="rangeId"
                  value={inputAssessment}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="rangeAssessmentStatus col-xl-10 col-lg-10 col-md-10 col-sm-10 order-1 order-lg-1 mt-1">
              <div className={`rangeAssessmentTextBox ${getStatusClassName()}`}>
                <span className={`rangeAssessmentText ${getStatusClassName()}`}>
                  {`${inputAssessment}: ${assessmentStatus[inputAssessment].label}`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
