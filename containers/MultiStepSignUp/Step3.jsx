import React from 'react'
import Image from 'next/image'

import {Heading} from '../../components/Heading'

import plataformaLogo from '../../assets/image/logo-semear.png'

const Step3 = () => {
  return (
    <fieldset>
      <div className="plataforma-logo2">
        <Image src={plataformaLogo} alt="" />
      </div>

      <Heading
        level="h2"
        horizontalPosition="center"
        ftColor="quinary"
        className="fs-title"
      >
        Suas Infos 🧡
      </Heading>

      <Heading
        level="h5"
        horizontalPosition="center"
        ftColor="quinary"
        className="fs-subtitle"
      >
        Passo 3
      </Heading>

      <input
        type="text"
        name="fname"
        placeholder="First Name"
        value=""
        onChange={() => {}}
      />

      <input
        type="text"
        name="lname"
        placeholder="Last Name"
        value=""
        onChange={() => {}}
      />
    </fieldset>
  )
}

export default Step3
