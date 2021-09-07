import React from 'react'
import Head from 'next/head'

// Containers
import {Navbar} from '../containers/Navbar'
import {Hero} from '../containers/Hero'
import {MentorArea} from '../containers/MentorArea'
import {Institutional} from '../containers/Institutional'
import {StudentArea} from '../containers/StudentArea'
import {SignUp} from '../containers/SignUp'

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Institutional />
      <StudentArea />
      <MentorArea />
      <SignUp />
    </React.Fragment>
  )
}
