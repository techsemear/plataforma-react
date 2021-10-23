import React, {Fragment} from 'react'

import styles from './Challenges.module.css'
import 'react-slideshow-image/dist/styles.css'

import {VideoSide} from '../../components/Video'
import {Section} from '../../components/Section'

import cover from '../../assets/image/l6/l6-hero-img.png'
import cover2 from '../../assets/image/l8/background-semear-corner.png'

const content = [
  {
    title:
      'É comum encontrar obstáculos pelo caminho percorrido até ingressar na faculdade.',
    text: [
      'Como se isso não fosse o suficiente, ainda existem 16 desafios principais que estão na base para o seu sucesso durante este novo período.',
      'Create custom landing pages with Shades that convert more visitors than any website—no coding required.Create custom landing pages with Shades that convert more visitors than any website—no coding required.Create custom landing pages with Shades that convert more visitors than any website—no coding required.',
    ],
    coverImage: cover,
    positionVideo: 'right',
    youtubeID: 'HR1BaFO0R1I',
    bgColor: 'primary',
    textColor: 'primary',
    underColor: 'secondary',
  },
  {
    text: [
      'Como se isso não fosse o suficiente, ainda existem 16 desafios principais que estão na base para o seu sucesso durante este novo período.',
      'Alcançamos esse objetivo por meio de Networking, oferecendo uma ampla rede de contatos e da Mentoria Social, onde estes jovens podem trocam experiências com profissionais renomados nas áreas que atuam. Por acreditarmos na potência do aprendizado social através do nosso Programa de Mentoria, queremos convidar você a ',
      'Create custom landing pages with Shades that convert more visitors than any website—no coding required.Create custom landing pages with Shades that convert more visitors than any website—no coding required.Create custom landing pages with Shades that convert more visitors than any website—no coding required.',
    ],
    coverImage: cover2,
    positionVideo: 'left',
    youtubeID: 'HR1BaFO0R1I',
    bgColor: 'primary',
    textColor: 'primary',
    underColor: 'default',
  },
]

export default function Challenges() {
  return (
    <Fragment>
      {content.map((item, index) => (
        <Section bgColor={item.bgColor} key={index}>
          <div className={`${styles.challengeArea} position-relative z-index-1 overflow-hidden`}>
            <div className="container">
              {item.positionVideo === 'right' ? (
                <div className="row justify-content-center">
                  <TextConfig contentInfo={item} />
                  <VideoSide contentInfo={item} />
                </div>
              ) : (
                <div className="row justify-content-center">
                  <VideoSide contentInfo={item} />
                  <TextConfig contentInfo={item} />
                </div>
              )}
            </div>
          </div>
        </Section>
      ))}
    </Fragment>
  )
}

function TextConfig({contentInfo}) {
  return (
    <Fragment>
      <div
        className={`${styles.challengeSection} col-xl-6 col-lg-7 col-md-8 col-sm-12 order-lg-1 order-1`}
        data-aos="fade-right"
        data-aos-duration={800}
        data-aos-once="true"
      >
        <div className="content">
          {contentInfo.title && (
            <Heading
              level="h3"
              ftColor="primary"
              color={contentInfo.underColor}
              underline="green"
              horizontalPosition="start"
            >
              {contentInfo.title}
            </Heading>
          )}
          <div className={styles.textChallengeSection}>
            {contentInfo.text.map((item, index) => (
              <p className="ft-primary" key={index}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  )
}
