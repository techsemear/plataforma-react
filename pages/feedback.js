import React from 'react'

// Containers
import {Feedback} from '../containers/Feedback'

// Components
import {IndexPage} from '../components/IndexPage'

export default function SignUp() {
  return (
    <React.Fragment>
      <IndexPage />
      <Feedback />
    </React.Fragment>
  )
}
