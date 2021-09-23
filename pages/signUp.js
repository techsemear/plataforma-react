import React from 'react'
import Head from 'next/head'

// Containers
import {Navbar} from '../containers/Navbar'


// Components
import { IndexPage } from '../components/IndexPage'
import { SignUpPage } from '../containers/SignUpPage'

export default function Login() {
  return (
    <React.Fragment>
      <IndexPage/>
      <Navbar/>
      <SignUpPage />
    </React.Fragment>
  )
}
