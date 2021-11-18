import React from 'react'

// Containers
import {AssessmentPageMentor} from '../containers/AssessmentPageMentor'

// Components
import {IndexPage} from '../components/IndexPage'

export default function SignUp() {
  return (
    <React.Fragment>
      <IndexPage />
      <AssessmentPageMentor />
    </React.Fragment>
  )
}
