import React from 'react'

// Containers
import {FeedbackMentor} from '../containers/Feedback'

// Components
import {IndexPage} from '../components/IndexPage'

export default function SignUp() {
  return (
    <React.Fragment>
      <IndexPage />
      <FeedbackMentor />
    </React.Fragment>
  )
}
