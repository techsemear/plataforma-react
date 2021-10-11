import React from 'react'
import Head from 'next/head'


// Containers
import {NavbarGeneral} from '../containers/NavbarMain'
import {SignUpPage} from '../containers/SignUpPage'


// Components
import { IndexPage } from '../components/IndexPage'


export default function SignUp() {
  return (
    <React.Fragment>
      <IndexPage/>
      <NavbarGeneral/>
      <SignUpPage />
    </React.Fragment>
  )
}
