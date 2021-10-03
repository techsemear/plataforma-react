import React from 'react'
import {render} from 'react-dom'
import Image from 'next/image'
import { Fragment } from 'react'

import {Heading} from '..//Heading'

import { loadGetInitialProps } from 'next/dist/shared/lib/utils'

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
                <Heading
                  level="h1"
                  ftColor="quinary"
                  className="fs-title"
                >
                  {props.content.title}
                </Heading>
                <Heading level="h5">{props.content.subtitle}</Heading>
                <br />
                <Heading level="h6"> {props.content.neutral} </Heading>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-5 col-md-8 order-lg-1 order-0"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="hero-video-l12 position-relative">
                <Image src={props.content.gif} alt="gif" width={400} height={300} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Range props={props}/>
      <RangeApp />
    </fieldset>
  )
}

export default StepAssessment

function Range(props) {
  return (
    <Fragment>
      <input
        type="range"
        min="0"
        max="10"
        onInput="this.nextElementSibling.value = this.value"
        list="tickmarks"
        className="range"
        placeholder="Qual seu nível de escolaridade"
        value={props.rating}
        onChange={props.handleChange}
        required
      />
      <datalist id="tickmarks">
        <option value={0} label="0%"></option>
        <option value={10}></option>
        <option value={20}></option>
        <option value={30}></option>
        <option value={40}></option>
        <option value={50} label="50%"></option>
        <option value={60}></option>
        <option value={70}></option>
        <option value={80}></option>
        <option value={90}></option>
        <option value={100} label="100%"></option>
      </datalist>
      <output></output>
    </Fragment>
  )
}

class RangeApp extends React.Component {
  values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  constructor(props) {
    super(props)
    this.state = {
      currentStepIndex: 0,
    }
  }

  handleInputChange = (e) => {
    this.setState({currentStepIndex: e.currentTarget.value})
  }

  render() {
    return (
      <div className="col-xl-8 col-lg-9 col-md-10 col-sm-12 order-lg-1 order-1 block">
        <input
          onInput={this.handleInputChange}
          type="range"
          min="0"
          value={this.state.currentStepIndex}
          max="10"
          step="1"
          list="tick-list"
        />
        <datalist id="tick-list">
          <option value={0} label="0%" />
          <option value={10}></option>
          <option value={20}></option>
          <option value={30}></option>
          <option value={40}></option>
          <option value={50} label="50%" />
          <option value={50}></option>
          <option value={60}></option>
          <option value={70}></option>
          <option value={80}></option>
          <option value={90}></option>
          <option value={100}></option>
        </datalist>
        <span id="output">{this.values[this.state.currentStepIndex]}</span>
      </div>
    )
  }
}



