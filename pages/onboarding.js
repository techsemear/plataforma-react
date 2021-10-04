import React from 'react'

// Components


// Containers
import {IntroOnboarding} from '../containers/IntroOnboarding'
import {Challenges} from '../containers/Challenges'
import {MaslowPoints} from '../containers/MaslowPoints'
import {StepsMentoring} from '../containers/StepsMentoring'
import {GetStarted} from '../containers/GetStarted'


export default function Onboarding() {
  return (
    <React.Fragment>
      <IntroOnboarding />
      <Challenges />
      <MaslowPoints />
      <StepsMentoring />
      <GetStarted />
    </React.Fragment>
  )
}
