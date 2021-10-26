import React from 'react'

// Containers
import {ProfilePage} from '../containers/ProfilePage'
import {NavbarProfile} from '../containers/Navbar'

// Components
import {IndexPage} from '../components/IndexPage'

export default function Login() {
  return (
    <React.Fragment>
      <IndexPage />
      <NavbarProfile />
      <ProfilePage />
    </React.Fragment>
  )
}
