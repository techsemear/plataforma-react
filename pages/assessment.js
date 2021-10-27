import React from 'react'
import Head from 'next/head'

// Containers
import {NavbarGeneral} from '../containers/Navbar'
import {AssessmentPage} from '../containers/AssessmentPage'

// Components
import {IndexPage} from '../components/IndexPage'

export default function SignUp() {
  return (
    <React.Fragment>
      <IndexPage />
      <NavbarGeneral />
      <AssessmentPage />
    </React.Fragment>
  )
}
