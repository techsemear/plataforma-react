import React from 'react'

// Containers
import {IntroOnboarding} from '../containers/IntroOnboarding'
import {Challenges} from '../containers/Challenges'
import {MaslowTheory} from '../containers/MaslowTheory'
import {StepsMentoring} from '../containers/StepsMentoring'

// Components

export default function Login() {
  return (
    <React.Fragment>
      <IntroOnboarding />
      <Challenges />
      <MaslowTheory />
      <StepsMentoring />
    </React.Fragment>
  )
}
