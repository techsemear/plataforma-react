import React from 'react'

// Containers
import {MatchingCalculated} from '../containers/MatchingCalculated'

// Components
import {IndexPage} from '../components/IndexPage'

export default function SignUp() {
  return (
    <React.Fragment>
      <IndexPage />
      <MatchingCalculated />
    </React.Fragment>
  )
}
