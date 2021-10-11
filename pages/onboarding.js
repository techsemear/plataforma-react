import React from 'react'

// Components
import {IndexPage} from '../components/IndexPage'

// Containers
import {IntroOnboarding} from '../containers/IntroOnboarding'
import {Challenges} from '../containers/Challenges'
import {MaslowPoints} from '../containers/MaslowPoints'
import {NavbarGeneral} from '../containers/NavbarMain'
import {StepsMentoring} from '../containers/StepsMentoring'
import {GetStarted} from '../containers/GetStarted'


export default function Onboarding() {
  return (
    <React.Fragment>
      <IndexPage />
      <NavbarGeneral />
      <IntroOnboarding />
      <Challenges />
      <MaslowPoints />
      <StepsMentoring />
      <GetStarted />
    </React.Fragment>
  )
}
