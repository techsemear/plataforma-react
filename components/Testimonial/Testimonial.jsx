import Image from 'next/image'
import {PersonaTestimonial} from '../PersonaTestimonial'
import heartShape from '../../assets/image/landing-1/h1-client-heart-shape.png'
import startShape from '../../assets/image/landing-1/h1-client-start-shape.png'

export default function Testimonial({
  personas,
  children,
  dark = false,
  orange = false,
}) {
  return (
    <div
      className='testimonial-area2-l1 position-relative bg-testimonial' 
    >
      <div className={dark ? 'background-dark' : orange ? 'background-orange' : 'background-white'}>
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
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xxl-5 col-xl-6 col-lg-7 col-md-8"
              data-aos="fade-in"
              data-aos-delay={500}
              data-aos-duration={1000}
            >
              <div className="section__heading text-center">
                <div className={ dark ? "testimonial-text-white" : "testimonial-text-dark"}>
                  <h2 >{children}</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row testimonial-area-l1-items justify-content-center">
            {personas.map((persona, index) => (
              <PersonaTestimonial
                subtitle={persona.subtitle}
                text={persona.text}
                name={persona.name}
                profession={persona.profession}
                imageProfile={persona.imageProfile}
                key={index}
                dark={dark}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
