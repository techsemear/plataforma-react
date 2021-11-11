import React from 'react'

// Containers
import {MatchingCalculate} from '../containers/MatchingCalculate'

// Components
import {IndexPage} from '../components/IndexPage'

export default function SignUp() {
  return (
    <React.Fragment>
      <IndexPage />
      <MatchingCalculate />
    </React.Fragment>
  )
}
