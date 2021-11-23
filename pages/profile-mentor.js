import React from 'react'

// Containers
import {ProfilePageMentor} from '../containers/ProfilePageMentor'
import {NavbarProfile} from '../containers/Navbar'

// Components
import {IndexPage} from '../components/IndexPage'

export default function Login() {
  return (
    <React.Fragment>
      <IndexPage />
      <ProfilePageMentor />
    </React.Fragment>
  )
}
