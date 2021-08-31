import React from 'react'

import Head from 'next/head'
import Image from 'next/image'

// Components
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { MentorArea } from '../components/MentorArea'
import { Institutional } from '../components/Institutional'
//import { Presentation } from '../components/Presentation'


export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Institutional />
    </React.Fragment>
  )
}
