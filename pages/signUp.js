import React from 'react'
import Head from 'next/head'

// Containers
<<<<<<< HEAD
import {NavbarGeneral} from '../containers/NavbarMain'
import {MultiStepSignUp} from '../containers/MultiStepSignUp'
||||||| parent of a613e23 (♻️ Refactor MultistepForm)
import {Navbar} from '../containers/Navbar'
import {SignUpPage} from '../containers/SignUpPage'

=======
import {Navbar} from '../containers/Navbar'
import {MultiStepSignUp} from '../containers/MultiStepSignUp'
>>>>>>> a613e23 (♻️ Refactor MultistepForm)

// Components
import {IndexPage} from '../components/IndexPage'

export default function SignUp() {
  return (
    <React.Fragment>
<<<<<<< HEAD
      <IndexPage />
      <NavbarGeneral />
      <MultiStepSignUp />
||||||| parent of a613e23 (♻️ Refactor MultistepForm)
      <IndexPage/>
      <Navbar/>
      <SignUpPage />
=======
      <IndexPage />
      <Navbar />

      <MultiStepSignUp />
>>>>>>> a613e23 (♻️ Refactor MultistepForm)
    </React.Fragment>
  )
}