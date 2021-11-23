import React from 'react'

// Containers
import {ProfilePageYoung} from '../containers/ProfilePageYoung'
import {NavbarProfile} from '../containers/Navbar'

// Components
import {IndexPage} from '../components/IndexPage'

export default function Login() {
  return (
    <React.Fragment>
      <IndexPage />
      <ProfilePageYoung />
    </React.Fragment>
  )
}
