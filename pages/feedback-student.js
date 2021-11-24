import React from 'react'

// Containers
import {FeedbackStudent} from '../containers/Feedback'

// Components
import {IndexPage} from '../components/IndexPage'

export default function SignUp() {
  return (
    <React.Fragment>
      <IndexPage />
      <FeedbackStudent />
    </React.Fragment>
  )
}
