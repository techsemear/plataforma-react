import React from 'react'

// Containers
import {NavbarGeneral} from '../containers/NavbarMain'
import { LoginPage } from '../containers/LoginPage'


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
