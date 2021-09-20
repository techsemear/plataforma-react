import React from 'react'

// Containers
import {Navbar} from '../containers/Navbar'

// Components
import {IndexPage} from '../components/IndexPage'
import {LoginPage} from '../containers/LoginPage'

export default function Onboarding() {
  return (
    <React.Fragment>
      <IndexPage />
      <Navbar />
    </React.Fragment>
  )
}
