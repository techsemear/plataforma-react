import React from 'react'

import Head from 'next/head'
import Image from 'next/image'

// Components
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'


export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
    </React.Fragment>
  )
}
