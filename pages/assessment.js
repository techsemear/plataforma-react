import React from 'react'
import ReactDOM from 'react-dom'
import Head from 'next/head'

// Containers
import {AssessmentPage} from '../containers/AssessmentPage'

// Components
import {IndexPage} from '../components/IndexPage'

export default function SignUp() {
  return (
    <React.Fragment>
      <IndexPage />
      <AssessmentPage />
    </React.Fragment>
  )
}
