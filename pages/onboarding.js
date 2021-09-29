import React from 'react'

// Components


// Containers
import {IntroOnboarding} from '../containers/IntroOnboarding'
import {Challenges} from '../containers/Challenges'
import {MaslowPoints} from '../containers/MaslowPoints'
import {MaslowFeatures} from '../containers/MaslowFeatures'
import {GetStarted} from '../containers/GetStarted'
import {SixteenChallenges} from '../containers/SixteenChallenges'


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
