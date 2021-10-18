import React from 'react'

// Containers
import { LoginPage } from '../containers/LoginPage'
import {NavbarGeneral} from '../containers/Navbar'


// Components
import { IndexPage } from '../components/IndexPage'


export default function Login() {
  return (
    <React.Fragment>
      <IndexPage />
      <NavbarGeneral />
      <LoginPage />
    </React.Fragment>
  )
}
