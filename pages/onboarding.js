import React from 'react'

// Components


// Containers
import {IntroOnboarding} from '../containers/IntroOnboarding'
import {Challenges} from '../containers/Challenges'
import {MaslowPoints} from '../containers/MaslowPoints'
import {MaslowFeatures} from '../containers/MaslowFeatures'
import {GetStarted} from '../containers/GetStarted'
import { ChallengeVideos } from '../containers/ChallengeVideos'




export default function Onboarding() {
  return (
    <React.Fragment>
      <IntroOnboarding />
      <Challenges />
      <MaslowPoints />
      <MaslowFeatures />
      <ChallengeVideos />
      <GetStarted />
    </React.Fragment>
  )
}
