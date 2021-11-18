import React from 'react'
import ReactDOM from 'react-dom'
import Head from 'next/head'

// Containers
import {AssessmentPageStudent} from '../containers/AssessmentPageStudent'

// Components
import {IndexPage} from '../components/IndexPage'

export default function SignUp() {
  return (
    <React.Fragment>
      <IndexPage />
      <AssessmentPageStudent />
    </React.Fragment>
  )
}
