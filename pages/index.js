import React from 'react'
import Head from 'next/head'

// Containers
import {About} from '../containers/About'
import {Hero} from '../containers/Hero'
import {MentorArea} from '../containers/MentorArea'
import {Navbar} from '../containers/Navbar'
import {Partners} from '../containers/Partners'
import {Presentation} from '../containers/Presentation'
import {StudentArea} from '../containers/StudentArea'
import {Subscribe} from '../containers/Subscribe'


// Components
import { IndexPage } from '../components/IndexPage'

export default function Home() {
  return (
    <React.Fragment>
      <IndexPage/>
      <Navbar />
      <Hero />
      <Presentation />
      <About />
      <Partners />
      <StudentArea />
      <MentorArea />
      <Subscribe />
    </React.Fragment>
  )
}
