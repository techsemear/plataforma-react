import React from 'react'
import Image from 'next/image'

import {Section} from '../../components/Section'
import {Heading} from '../../components/Heading'
import {VideoColumn} from '../../components/Video'

import Cover from '../../assets/image/l6/l6-hero-img.png'
import Shape7 from '../../assets/image/l6/shape-7.svg'

const challengeContent = [
  {
    title: 'Alimentação',
    subtitle: 'Desafio 1',
    text: 'Create custom landing pages with Shades that convert more visitors than any website—no coding required.Create custom landing pages with Shades that convert more visitors than any website—no coding required.Create custom landing pages with Shades that convert more visitors than any website—no coding required.',
    coverImage: Cover,
    youtubeID: 'HR1BaFO0R1I',
  },
  {
    title: 'Moradia',
    subtitle: 'Desafio 2',
    text: 'Create custom landing pages with Shades that convert more visitors than any website—no coding required.Create custom landing pages with Shades that convert more visitors than any website—no coding required.Create custom landing pages with Shades that convert more visitors than any website—no coding required.',
    coverImage: Cover,
    youtubeID: 'HR1BaFO0R1I',
  },
]

export default function ChallengeVideos() {
  return (
    <div className="testimonial-area-l-12">
      <div className="container position-relative">
        <div className="testimonial-border-area-l-12" />
        <div className="testimonial-area-l12-shape">
          <img src={Shape7} alt="" />
        </div>
        <div className="row">
          <div className="col-xxl-7 col-xl-8 col-lg-9 col-md-12">
            <div className="section-heading-6">
              <h2>Don’t believe me. Listen what’s my students are saying</h2>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-4 col-lg-3 col-md-12">
            <div className="l-12-slider-arrow-1 text-end">
              <i className="prev9  icon icon-tail-left slick-arrow" />
              <i className="next9 icon icon-tail-right slick-arrow slick-active" />
            </div>
          </div>
        </div>
        <div className="row testimonial-items-l-12">
          <div className="col-12">
            <div className="testimonial-slider-l-12 col-12">
              <VideoColumn contentInfo={challengeContent[0]} />
              <VideoColumn contentInfo={challengeContent[1]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
