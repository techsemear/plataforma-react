import React from 'react'
import Image from 'next/image'

import styles from './IntroOnboarding.module.css'

import {Wave} from '../../components/Wave'
import {Heading} from '../../components/Heading'

import waveImage from '../../assets/image/wave-color.png'
import headerImage from '../../assets/image/onboarding-header.png'


export default function IntroOnboarding(){
    return (
      <div className={styles.onboardingArea}>
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xxl-7 col-xl-8 col-lg-9 col-md-8 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay={500}
              data-aos-duration={1000}
            >
              <div className={`${styles.onboardingContent} text-center`}>
                <Heading
                  level="h2"
                  ftColor="default"
                  horizontalPosition="center"
                >
                  MIRE NO SEU BRILHANTE FUTURO!
                </Heading>
                <Heading
                  level="h5"
                  ftColor="default"
                  horizontalPosition="center"
                  className={styles.textParagraph}
                >
                  <br />O caminho para a independência e conforto financeiro é
                  árduo e o vestibular foi só o primeiro passo. Vamos percorrer
                  este novo caminho juntos transformando você no protagonista da
                  sua carreira!
                </Heading>
              </div>
            </div>
            <div
              className="col-md-10 order-1 order-lg-2"
              data-aos="fade-up"
              data-aos-delay={700}
              data-aos-duration={1000}
            >
              <div className={styles.onboardingContentImage}>
                <Image className="w-100" src={headerImage} alt="image" />
              </div>
            </div>
          </div>
        </div>
        <Image src={waveImage} className={styles.waveImage} alt="waveImage" />
        <Wave
          className={`wave ${styles.introWave}`}
          direction="up"
          color="#f4fcfb"
          bgColor="#11115d"
        />
      </div>
    )
}
