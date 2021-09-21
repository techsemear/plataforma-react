import React from 'react'
import {Fragment} from 'react'
import Image from 'next/image'

import {Button} from '../../components/Button'
import {Wave} from '../../components/Wave'
import {Heading} from '../../components/Heading'

import cloudCharacter from '../../assets/image/challenges-image.png'
import upImage from '../../assets/image/boia.png'


export default function Challenges(){
    return(
      <Fragment>
      <div className="content-are-l2-1">
        <Heading level = "h3"horizontalPosition="center" ftColor = "primary">É circunstâncial que você, estudante, <br/>encontre obstáculos pelo caminho percorrido <br/> até o momento de ingressar na faculdade. </Heading>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-9" data-aos="fade-right" data-aos-delay={300} data-aos-duration={1000}>
            <div className="content text-center text-xl-start">
              <Heading level ="h5" ftColor="primary"> Como se isso não fosse o suficiente, ainda existem 6 desafios principais que estão na base para o seu sucesso durante este novo período.</Heading>
            </div>
          </div>
          <div className="offset-xxl-1 col-xxl-6 col-xl-6">
            <div className="row justify-content-center align-items-center">
              <div data-aos="fade-up" data-aos-delay={300} data-aos-duration={1000}>
                <div className="content-l2-2-image-1 image-hover-style-01 overflow-hidden">
                  <Image className="" src={cloudCharacter} alt="image" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Wave color = "#fff" bgColor = "#11115d"/>
    </Fragment>
    
    )
}
