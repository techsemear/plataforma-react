import React from 'react'

import {Section} from '../../components/Section'
import {Heading} from '../../components/Heading'
import {VideoSide} from '../../components/Video'

import Cover from '../../assets/image/l6/l6-hero-img.png'
import CoverE from '../../assets/image/l8/background-semear.jpg'

const challengeContent = [
  {
    title: 'Alimentação',
    text: 'Create custom landing pages with Shades that convert more visitors than any website—no coding required.Create custom landing pages with Shades that convert more visitors than any website—no coding required.Create custom landing pages with Shades that convert more visitors than any website—no coding required.',
    coverImage: Cover,
    positionVideo: 'right',
    youtubeID: 'HR1BaFO0R1I',
  },
  {
    title: 'Moradia',
    text: 'Create custom landing pages with Shades that convert more visitors than any website—no coding required.Create custom landing pages with Shades that convert more visitors than any website—no coding required.Create custom landing pages with Shades that convert more visitors than any website—no coding required.',
    coverImage: CoverE,
    positionVideo: 'left',
    youtubeID: 'HR1BaFO0R1I',
  },
]

function VideoRight({challengeInfo}) {
  return (
    <div className="hero-area-l-12 position-relative z-index-1 overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-xl-6 col-lg-7 col-md-8 col-sm-12 order-lg-1 order-1"
            data-aos="fade-right"
            data-aos-duration={800}
            data-aos-once="true"
          >
            <div className="content">
              <Heading level="h1">{challengeInfo.title}</Heading>
              <Heading level="h6">{challengeInfo.text}</Heading>
            </div>
          </div>
          <VideoSide contentInfo={challengeInfo} />
        </div>
      </div>
    </div>
  )
}

function VideoLeft({challengeInfo}) {
  return (
    <div className="hero-area-l-12 position-relative z-index-1 overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <VideoSide contentInfo={challengeInfo} />
          <div
            className="col-xl-6 col-lg-7 col-md-8 col-sm-12 order-lg-1 order-1"
            data-aos="fade-right"
            data-aos-duration={800}
            data-aos-once="true"
          >
            <div className="content">
              <Heading level="h1">{challengeInfo.title}</Heading>
              <Heading level="h6">{challengeInfo.text}</Heading>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ChallengesExplanation() {
  return (
    <div id="challengeVideos">
      {challengeContent.map((item, index) => (
        <Section key={index}>
          {item.positionVideo === 'right' ? (
            <VideoRight challengeInfo={item} />
          ) : (
            <VideoLeft challengeInfo={item} />
          )}
        </Section>
      ))}
    </div>
  )
}
