import React from 'react'

// Components
import {IndexPage} from '../components/IndexPage'

// Containers
import {IntroOnboarding} from '../containers/IntroOnboarding'
import {Challenges} from '../containers/Challenges'
import {MaslowPoints} from '../containers/MaslowPoints'
import {NavbarOnboarding} from '../containers/Navbar'
import {StepsMentoring} from '../containers/StepsMentoring'
import {GetStarted} from '../containers/GetStarted'


export default function Onboarding() {
  return (
    <React.Fragment>
      <IndexPage />
      <NavbarOnboarding />
      <IntroOnboarding />
      <Challenges />
      <MaslowPoints />
      <StepsMentoring />
      <GetStarted />
    </React.Fragment>
  )
}
