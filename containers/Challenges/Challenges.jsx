import React from 'react'
import {Fragment} from 'react'
import Image from 'next/image'

import {Wave} from '../../components/Wave'
import {Heading} from '../../components/Heading'
import {VideoSide} from '../../components/Video'
import {Section} from '../../components/Section'
import {Underline} from '../../components/Underline'

import cloudCharacter from '../../assets/image/challenges-image.png'
import upImage from '../../assets/image/boia.png'
import Cover from '../../assets/image/l6/l6-hero-img.png'

const content = {
  title: 'Join us!',
  text: [
    'É circunstâncial que você, estudante, encontre obstáculos pelo caminho percorrido  até o momento de ingressar na faculdade.',
    'Como se isso não fosse o suficiente, ainda existem 16 desafios principais que estão na base para o seu sucesso durante este novo período.',
    'Create custom landing pages with Shades that convert more visitors than any website—no coding required.Create custom landing pages with Shades that convert more visitors than any website—no coding required.Create custom landing pages with Shades that convert more visitors than any website—no coding required.',
  ],
  coverImage: Cover,
  positionVideo: 'right',
  youtubeID: 'HR1BaFO0R1I',
  bgColor: 'primary',
  textColor: 'primary',
}

export default function Challenges() {
  return (
    <Fragment>
      <Section bgColor={content.bgColor}>
        <div className="hero-area-l-12 position-relative z-index-1 overflow-hidden">
          <div className="container">
            {content.positionVideo === 'right' ? (
              <div className="row justify-content-center">
                <TextConfig contentInfo={content} />
                <VideoSide contentInfo={content} />
              </div>
            ) : (
              <div className="row justify-content-center">
                <VideoSide contentInfo={content} />
                <TextConfig contentInfo={content} />
              </div>
            )}
          </div>
        </div>
      </Section>
    </Fragment>
  )
}

function TextConfig({contentInfo}) {
  return (
    <Fragment>
    <div
      className="col-xl-6 col-lg-7 col-md-8 col-sm-12 order-lg-1 order-1"
      data-aos="fade-right"
      data-aos-duration={800}
      data-aos-once="true"
    >
      <div className="content">
        <Underline level="h1" ftColor="primary" color="secondary">
          {contentInfo.title}
        </Underline>
        <div className="mt-5">
          {contentInfo.text.map((item, index) => (
            <Heading level="h6" ftColor={contentInfo.textColor} key={index}>
              {item}
            </Heading>
          ))}
        </div>
      </div>
    </div>
    </Fragment>
  )
}
