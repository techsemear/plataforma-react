import React from 'react'
import {Fragment} from 'react'
import Image from 'next/image'

import {Button} from '../../components/Button'
import {Wave} from '../../components/Wave'
import {Heading} from '../../components/Heading'

import waveImage from '../../assets/image/wave-color.png'
import headerImage from '../../assets/image/onboarding-header.png'


export default function IntroOnboarding(){
    return(
        <div className="hero-area-l6 ">
        <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-7 col-xl-8 col-lg-9 col-md-8 order-2 order-lg-1" data-aos="fade-up" data-aos-delay={500} data-aos-duration={1000}>
            <div className="hero-l6-content text-center">
              <Heading level = "h2" ftColor="default" horizontalPosition = "center">MIRE NO SEU BRILHANTE FUTURO !</Heading>
              <Heading level = "h5" ftColor="default" horizontalPosition = "center"><br/>O caminho para a independência e conforto financeiro é árduo e o vestibular foi só o primeiro passo. Vamos percorrer este novo caminho juntos transformando você no protagonista da sua carreira!</Heading>
            </div>
          </div>
          <div className="col-md-10 order-1 order-lg-2" data-aos="fade-up" data-aos-delay={700} data-aos-duration={1000}>
            <div className="hero-l6-content-image">
              <Image className="w-100" src={headerImage} alt="image" />
            </div>
          </div>
        </div>
      </div>
      <Image src={waveImage} className="wave-image"/>
      <Wave className="wave" direction= "up" color = "#f4fcfb" bgColor = "#11115d"/>    
    </div>
    )
}
