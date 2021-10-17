import React from 'react'
import Image from 'next/image'

import {Heading} from '../../components/Heading'

import plataformaLogo from '../../assets/image/logo-semear.png'

import styles from './MultiStepSignUp.module.css'

const StepTemplate = ({children, title, subtitle}) => {
  return (
    <fieldset>
      <div className={styles.logo}>
        <Image src={plataformaLogo} alt="" />
      </div>

      <Heading
        level="h3"
        horizontalPosition="center"
        ftColor="quinary"
        className={styles.title}
      >
        {title}
      </Heading>

      <Heading
        level="h6"
        horizontalPosition="center"
        ftColor="quinary"
        className={styles.subtitle}
      >
        {subtitle}
      </Heading>

      {children}
    </fieldset>
  )
}

export default StepTemplate
