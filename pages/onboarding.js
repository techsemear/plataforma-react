import React from 'react'

// Components


// Containers
import {IntroOnboarding} from '../containers/IntroOnboarding'
import {Challenges} from '../containers/Challenges'
import {MaslowTheory} from '../containers/MaslowTheory'
import {MaslowPoints} from '../containers/MaslowPoints'
import {MaslowFeatures} from '../containers/MaslowFeatures'
import {GetStarted} from '../containers/GetStarted'




export default function Onboarding() {
  return (
    <React.Fragment>
      <IntroOnboarding />
      <Challenges />
      <MaslowPoints />
      <MaslowFeatures />
      <GetStarted />
    </React.Fragment>
  )
}
