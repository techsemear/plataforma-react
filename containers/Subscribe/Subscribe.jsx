import Image from 'next/image'

import {LeadForm} from '../../components/LeadForm'
import {Heading} from '../../components/Heading'

import blurImage from '../../assets/image/landing-1/h1-cta-blur-shape-2.png'
import rocket from '../../assets/image/landing-1/h1-cta-rocket-image.png'

export default function Subscribe() {
  return (
    <div className="contact-form-area-l1 bg-mirage position-relative" id="subscribe">
      <div className="contact-area-l-image-group">
        <div className="image-2 ">
          <Image className="w-100 spin" src={blurImage} alt="image" />
        </div>
        <div className="image-3 ">
          <Image className="w-100" src={rocket} alt="image" />
        </div>
      </div>

      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section__heading text-center">
              <Heading horizontalPosition="center">Gostou da Nossa proposta ?</Heading >
              <p>
                Estamos trabalhando para trazer para vocês a melhor e mais amada
                plataforma de mentoria do Brasil, se você tem interesse em ser
                um jovem ou mentor, inscreva-se e receba todas as novidades e
                atualizações sobre o funcionamento da nossa plataforma.{' '}
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div
            className="col-xxl-4 col-lg-6 col-md-8 col-sm-10 "
            data-aos="fade-up"
            data-aos-delay={500}
            data-aos-duration={1000}
          >
            <LeadForm />
          </div>
        </div>
      </div>
    </div>
  )
}
