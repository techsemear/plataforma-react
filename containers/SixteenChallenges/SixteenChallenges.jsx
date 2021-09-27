import React from 'react'
import {Fragment} from 'react'
import Image from 'next/image'

import {Heading} from '../../components/Heading'
import {Section} from '../../components/Section'
import { Wave } from '../../components/Wave'

const basicChallenges={
  title:[
    "Moradia",
    "Descanso",
    "Pertencimento",
    "Atividade Física",
    "Alimentação",
    "Gestão de Rotina"

  ],
  color:"bg-secondBlue",
}

const belongingChallenges={
  title:[
    "Expedição de Carreira",
    "Sonhar Grande",
    "Autoliderança",
    "Capital Cultural",
    "Autoestima"
  ],
  color:"bg-mint",
}

const employabilityChallenges={
  title:[
    "Expectativa X Realidade",
    "Fit Carreira X Fit Time",
    "Lidar com Feedbacks",
    "Adaptação ao Mercado",
    "Imediatismo"
  ],
  color:"bg-grey1",
}

export default function SixteenChallenges() {
  return (
    <Fragment>
      <Wave
      className="wave sixteenChallenges"
      direction="up"
      bgColor="#fff"
    />
    <Section bgColor="default">
      <div className="row justify-content-lg-between justify-content-center align-items-center text-center text-lg-start">
            <Heading level ="h3" ftColor="default">Os 16 Desafios</Heading>
            <Heading level ="h5" ftColor="secondary">Get the most exciting jobs from all around the world and grow your career fast with others.</Heading>
      </div>
      <div className="row feature-16-items justify-content-center">
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay={500} data-aos-duration={1000}>
          <div className="feature-box-16 h-100">
            <div className="d-flex">
              <div className="color-box-16 bg-grey1" />
              <div className="content-box-16">
                <Heading level ="h6" ftColor="default">{basicChallenges.title[0]}</Heading>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay={500} data-aos-duration={1000}>
          <div className="feature-box-16 h-100">
            <div className="d-flex">
            <div className="color-box-16 bg-grey1" />
              <div className="content-box-16">
                <Heading level ="h6" ftColor="default">{basicChallenges.title[1]}</Heading>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay={500} data-aos-duration={1000}>
          <div className="feature-box-16 h-100">
            <div className="d-flex">
            <div className="color-box-16 bg-grey1" />
              <div className="content-box-16">
                <Heading level ="h6" ftColor="default">{basicChallenges.title[2]}</Heading>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay={500} data-aos-duration={1000}>
          <div className="feature-box-16 h-100">
            <div className="d-flex">
            <div className="color-box-16 bg-grey1" />
              <div className="content-box-16">
                <Heading level ="h6" ftColor="default">{basicChallenges.title[3]}</Heading>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay={500} data-aos-duration={1000}>
          <div className="feature-box-16 h-100">
            <div className="d-flex">
            <div className="color-box-16 bg-grey1" />
              <div className="content-box-16">
                <Heading level ="h6" ftColor="default">{basicChallenges.title[4]}</Heading>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay={500} data-aos-duration={1000}>
          <div className="feature-box-16 h-100">
            <div className="d-flex">
            <div className="color-box-16 bg-grey1" />
              <div className="content-box-16">
                <Heading level ="h6" ftColor="default">{basicChallenges.title[5]}</Heading>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay={500} data-aos-duration={1000}>
          <div className="feature-box-16 h-100">
            <div className="d-flex">
            <div className="color-box-16 bg-grey1" />
              <div className="content-box-16">
                <Heading level ="h6" ftColor="default">{belongingChallenges.title[0]}</Heading>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay={500} data-aos-duration={1000}>
          <div className="feature-box-16 h-100">
            <div className="d-flex">
            <div className="color-box-16 bg-secondBlue" />
              <div className="content-box-16">
                  <Heading level ="h6" ftColor="default">{belongingChallenges.title[1]}</Heading>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay={500} data-aos-duration={1000}>
          <div className="feature-box-16 h-100">
            <div className="d-flex">
            <div className="color-box-16 bg-secondBlue" />
              <div className="content-box-16">
                <Heading level ="h6" ftColor="default">{belongingChallenges.title[2]}</Heading>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay={500} data-aos-duration={1000}>
          <div className="feature-box-16 h-100">
            <div className="d-flex">
            <div className="color-box-16 bg-secondBlue" />
              <div className="content-box-16">
                <Heading level ="h6" ftColor="default">{belongingChallenges.title[3]}</Heading>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay={500} data-aos-duration={1000}>
          <div className="feature-box-16 h-100">
            <div className="d-flex">
            <div className="color-box-16 bg-secondBlue" />
              <div className="content-box-16">
                <Heading level ="h6" ftColor="default">{belongingChallenges.title[4]}</Heading>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay={500} data-aos-duration={1000}>
          <div className="feature-box-16 h-100">
            <div className="d-flex">
            <div className="color-box-16 bg-mint" />
              <div className="content-box-16">
                <Heading level ="h6" ftColor="default">{employabilityChallenges.title[0]}</Heading>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay={500} data-aos-duration={1000}>
          <div className="feature-box-16 h-100">
            <div className="d-flex">
            <div className="color-box-16 bg-mint" />
              <div className="content-box-16">
                <Heading level ="h6" ftColor="default">{employabilityChallenges.title[1]}</Heading>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay={500} data-aos-duration={1000}>
          <div className="feature-box-16 h-100">
            <div className="d-flex">
            <div className="color-box-16 bg-mint" />
              <div className="content-box-16">
                <Heading level ="h6" ftColor="default">{employabilityChallenges.title[2]}</Heading>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay={500} data-aos-duration={1000}>
          <div className="feature-box-16 h-100">
            <div className="d-flex">
            <div className="color-box-16 bg-mint" />
              <div className="content-box-16">
                <Heading level ="h6" ftColor="default">{employabilityChallenges.title[3]}</Heading>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay={500} data-aos-duration={1000}>
          <div className="feature-box-16 h-100">
            <div className="d-flex">
            <div className="color-box-16 bg-mint" />
              <div className="content-box-16">
                <Heading level ="h6" ftColor="default">{employabilityChallenges.title[4]}</Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Section>
      </Fragment>
)
}
