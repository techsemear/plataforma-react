import React from 'react'
import Head from 'next/head'

// Containers
import {About} from '../containers/About'
import {Hero} from '../containers/Hero'
import {MentorArea} from '../containers/MentorArea'
import {Navbar} from '../containers/Navbar'
import {Partners} from '../containers/Partners'
import {Presentation} from '../containers/Presentation'
import {SignUp} from '../containers/SignUp'
import {StudentArea} from '../containers/StudentArea'

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Presentation />
      <About />
      <Partners />

      <StudentArea />
      <MentorArea />
      <SignUp />
    </React.Fragment>
  )
}
