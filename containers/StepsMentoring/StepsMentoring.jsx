<<<<<<< HEAD
import React, {Fragment} from 'react'

import {Heading} from '../../components/Heading'
import {Section} from '../../components/Section'
import {CardSequence} from '../../components/Card'
import {Wave} from '../../components/Wave'

import waveImage from '../../assets/image/wave-color.png'

const content = {
  title:
    'Como funciona para fazer parte de tudo isso?',
  subtitle:
    'Pode ficar tranquilo(a) que nós te explicamos o passo a passo de como vai funcionar esse processo.',
}
const contentCards = [
  {
    title: 'ENTENDA',
    text: 'como descobrir seus desafios',
  },
  {
    title: 'ENCONTRE',
    text: 'o(a) seu mentor(a) ideal',
  },
  {
    title: 'AGENDE',
    text: 'para o dia e horário ideal',
  },
  {
    title: 'REALIZE',
    text: 'a sua sessão de mentoria!',
=======
import Image from 'next/image'

import {ItemsSection} from '../../components/ItemsSection'
import {Section} from '../../components/Section'

import studentsImage from '../../assets/image/loginImage2.png'

const content = {
  title: 'Como realizar a mentoria?',
  journey: 'Passo a Passo',
}

const itemsText = [
  {
    text: 'Descubra quais são os seus maiores desafios',
  },
  {
    text: 'Encontre seu mentor ideal com um clique',
  },
  {
    text: 'Agende um horário e realize a mentoria!',
>>>>>>> parent of 9f5fc54 (update get started)
  },
]

export default function StepsMentoring() {
  return (
<<<<<<< HEAD
    <Fragment>
      <Wave 
        direction="down"
        color="#fff"
        bgColor="#11115d"
      />
      <Section>
        <div className="service-area-l4-1">
          <div className="container">
            <div className="row">
              <div
      className="col-xl-6 col-lg-7 col-md-8 col-sm-12 order-lg-1 order-1"
      data-aos="fade-right"
      data-aos-duration={800}
      data-aos-once="true"
    >
      <div className="content">
                  <Heading level="h2"> {content.title}</Heading>
                  <Heading level="h6" ftColor="secondary">
                    {content.subtitle}
                  </Heading>
                </div>
              </div>
            </div>
            <CardSequence contentInfo={contentCards} />
          </div>
        </div>
      </Section>
    </Fragment>
=======
      <div className="mentor-area" id="jornada-mentor">
        <div className="content-area-2-l1">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <ItemsSection itemsText={itemsText} title={content.title}>
                {content.journey}
              </ItemsSection>
              <div className="offset-xxl-1 col-xxl-5 col-xl-6 col-lg-6 col-md-10">
                <div
                  className="content-2-l1-image-group"
                  data-aos="fade-up"
                  data-aos-delay={800}
                  data-aos-duration={1000}
                >
                  <div className="image-1">
                    <Image src={studentsImage} alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

>>>>>>> parent of 9f5fc54 (update get started)
  )
}
