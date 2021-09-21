import React from 'react'

// Components


// Containers
import {IntroOnboarding} from '../containers/IntroOnboarding'
import {Challenges} from '../containers/Challenges'
import {MaslowTheory} from '../containers/MaslowTheory'
import {MaslowPoints} from '../containers/MaslowPoints'
import {MaslowFeatures} from '../containers/MaslowFeatures'
import {ChallengeVideos} from '../containers/ChallengeVideos'
import {GetStarted} from '../containers/GetStarted'
import {TrainingVideos} from '../containers/TrainingVideos'




export default function Onboarding() {
  return (
    <React.Fragment>
      <IntroOnboarding />
      <Challenges />
      <MaslowTheory />
      <MaslowPoints />
      <MaslowFeatures />
      <GetStarted />
    </React.Fragment>
  )
}
