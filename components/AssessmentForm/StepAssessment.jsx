import React, {Fragment, useState} from 'react'
import Image from 'next/image'

import {Heading} from '../Heading'
import {Underline} from '../Underline'

import sad from '../../assets/image/1.png'
import halfSad from '../../assets/image/2.png'
import half from '../../assets/image/3.png'
import halfHappy from '../../assets/image/4.png'
import happy from '../../assets/image/5.png'

import {loadGetInitialProps} from 'next/dist/shared/lib/utils'

let StepAssessment = (props) => {
  if (props.currentStep !== props.stepStatus) {
    return null
  }

  return (
    <fieldset>
      <div className="hero-area-l-12 position-relative z-index-1 overflow-hidden mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-6 col-lg-7 col-md-8 col-sm-12 order-lg-1 order-1"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content position-text">
                <Heading level="h1" ftColor="quinary" className="fs-title">
                  {props.content.title}
                </Heading>
                <Underline level="h5" ftColor="secondary">
                  {props.content.subtitle}
                </Underline>
                <Heading level="h6" ftColor="quinary">
                  {' '}
                  {props.content.neutral}{' '}
                </Heading>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-5 col-md-8 order-lg-1 order-0"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="hero-video-l12 position-relative">
                <Image
                  src={props.content.gif}
                  alt="gif"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-xl-7 col-lg-8 col-md-9 col-sm-12 order-lg-1">
          <Range />
        </div>
      </div>
    </fieldset>
  )
}

export default StepAssessment

const assessmentStatus = {
  0: {
    icon: <Image src={sad} />,
    label: 'Nada Satisfeito',
  },
  1: {
    icon: <Image src={sad} />,
    label: 'Nada Satisfeito',
  },
  2: {
    icon: <Image src={halfSad} />,
    label: 'Nada Satisfeito',
  },
  3: {
    icon: <Image src={halfSad} />,
    label: 'Pouco Satisfeito',
  },
  4: {
    icon: <Image src={halfSad} />,
    label: 'Minimamente Satisfeito',
  },
  5: {
    icon: <Image src={half} />,
    label: 'Minimamente Satisfeito',
  },
  6: {
    icon: <Image src={half} />,
    label: 'Minimamente Satisfeito',
  },
  7: {
    icon: <Image src={halfHappy} />,
    label: 'Satisfeito',
  },
  8: {
    icon: <Image src={happy} />,
    label: 'Muito Satisfeito',
  },
  9: {
    icon: <Image src={happy} />,
    label: 'Muito Satisfeito',
  },
  10: {
    icon: <Image src={happy} />,
    label: 'Muito Satisfeito',
  },
}

function Range() {
  const [inputAssessment, setInputAssessment] = useState(7)

  const handleChange = (event) => {
    const value = event.currentTarget.value
    setInputAssessment(value)
  }
  const getStatusClassName = () => {
    if (inputAssessment >= 0 && inputAssessment < 2) {
      return 'rangeStatus--danger'
    }
    if (inputAssessment >= 2 && inputAssessment < 4) {
      return 'rangeStatus--warning'
    }
    if (inputAssessment >= 4 && inputAssessment < 7) {
      return 'rangeStatus--atention'
    }
    if (inputAssessment == 7) {
      return 'rangeStatus--neutro'
    }
    if (inputAssessment > 7) {
      return 'rangeStatus--success'
    }
  }
  return (
    <Fragment>
      <div className="rangeAssessmentStatus">
        <div
          className={`rangeAssessmentTextBox mt-4 mb-2 ${getStatusClassName()}`}
        >
          <span className={`rangeAssessmentText ${getStatusClassName()}`}>
            {`${assessmentStatus[inputAssessment].label}: ${inputAssessment}`}
          </span>
        </div>
        <span>{assessmentStatus[inputAssessment].icon}</span>
      </div>
      <div className="container">
        <div className="order-1 rangeAssessment">
          <input
            className={`rangeAssessmentInput ${getStatusClassName()}`}
            type="range"
            min="0"
            max="10"
            step="1"
            value={inputAssessment}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </Fragment>
  )
}
