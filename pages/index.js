import React from 'react'

import Head from 'next/head'
import Image from 'next/image'

// Components
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { MentorArea } from '../components/MentorArea'


export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <MentorArea />
    </React.Fragment>
  )
}
