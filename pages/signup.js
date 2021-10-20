import React from 'react'
import Head from 'next/head'

// Containers
import {NavbarLoginSignUp} from '../containers/Navbar'
import {MultiStepSignUp} from '../containers/MultiStepSignUp'

// Components
import {IndexPage} from '../components/IndexPage'

export default function SignUp() {
  return (
    <React.Fragment>
      <IndexPage />
      <NavbarLoginSignUp />
      <MultiStepSignUp />
    </React.Fragment>
  )
}
