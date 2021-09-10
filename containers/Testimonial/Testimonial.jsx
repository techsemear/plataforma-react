import Image from 'next/image'

import {PersonaTestimonial} from '../../components/PersonaTestimonial'
import {Section} from '../../components/Section'
import {CardPersona} from '../../components/CardPersona'

import heartShape from '../../assets/image/landing-1/h1-client-heart-shape.png'
import startShape from '../../assets/image/landing-1/h1-client-start-shape.png'
import {Heading} from '../../components/Heading'

export default function Testimonial({
  personas,
  children,
  dark = false,
  orange = false,
}) {
  return (
    <div className="testimonial-area2-l1 position-relative bg-testimonial">
      <div
        className={
          dark
            ? 'background-dark'
            : orange
            ? 'background-orange'
            : 'background-white'
        }
      >
        <div className="curve-image-l1"></div>
        <div className="testimonial-area-l-image-group">
          <div className="image-1">
            <Image
              className="w-100 vertical-move"
              src={heartShape}
              alt="image"
            />
          </div>
          <div className="image-2">
            <Image className="w-100 spin" src={startShape} alt="image" />
          </div>
        </div>
        <div className="clients-area-l8">
          <div className="container">
            <div className="row justify-content-center">
              <div
                className="col-xxl-5 col-lg-7 col-md-8"
                data-aos="fade-in"
                data-aos-delay={500}
                data-aos-duration={1000}
              >

                  <Heading horizontalPosition="center" ftColor="primary">
                    {children}
                  </Heading>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <CardPersona personasProfile={personas} />
          </div>
        </div>
      </div>
    </div>
  )
}
