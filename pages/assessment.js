import React from 'react'
import Head from 'next/head'

// Containers
import {Navbar} from '../containers/Navbar'
import {SignUpPage} from '../containers/SignUpPage'

// Components
import {IndexPage} from '../components/IndexPage'

export default function SignUp() {
  return (
    <React.Fragment>
      <IndexPage />
      <Navbar />
      <SignUpPage />
    </React.Fragment>
  )
}
