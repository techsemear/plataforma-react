import React from 'react'

// Containers
import { LoginPage } from '../containers/LoginPage'
import {NavbarLoginSignUp} from '../containers/Navbar'


// Components
import { IndexPage } from '../components/IndexPage'


export default function Login() {
  return (
    <React.Fragment>
      <IndexPage />
      <NavbarLoginSignUp />
      <LoginPage />
    </React.Fragment>
  )
}
