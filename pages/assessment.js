import React from 'react'
import Head from 'next/head'

// Containers
import {NavbarLoginSignUp} from '../containers/Navbar'
import {AssessmentPage} from '../containers/AssessmentPage'

// Components
import {IndexPage} from '../components/IndexPage'

export default function SignUp() {
  return (
    <React.Fragment>
      <IndexPage />
      <NavbarLoginSignUp/>
      <AssessmentPage />
    </React.Fragment>
  )
}
