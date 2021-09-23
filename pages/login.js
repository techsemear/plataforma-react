import React from 'react'
import Head from 'next/head'

// Containers
import {Navbar} from '../containers/Navbar'
import { LoginPage } from '../containers/LoginPage'


// Components
import { IndexPage } from '../components/IndexPage'


export default function Login() {
  return (
    <React.Fragment>
      <IndexPage/>
      <Navbar />
      <LoginPage />
    </React.Fragment>
  )
}
