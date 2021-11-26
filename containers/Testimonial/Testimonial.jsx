import Image from 'next/image'

import {Card} from '../../components/Card'
import {Logo} from '../../components/Logo'
import {Heading} from '../../components/Heading'

import heartShape from '../../assets/image/landing-1/h1-client-heart-shape.png'
import starShape from '../../assets/image/landing-1/h1-client-start-shape.png'
import linkedinImage from '../../assets/image/landing-1/linkedin-2.png'

export default function Testimonial({personas, children}) {
  return (
    <div className="testimonial-area2-l1 position-relative bg-testimonial">
      <div className="curve-image-l1"></div>
      <div className="testimonial-area-l-image-group">
        <div className="image-1">
          <Image className="w-100 vertical-move" src={heartShape} alt="image" />
        </div>
        <div className="image-2">
          <Image className="w-100 spin" src={starShape} alt="image" />
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
              {children}
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <CardPersona personasProfile={personas} />
        </div>
      </div>
    </div>
  )
}

function CardPersona({personasProfile}) {
  const height = 24

  personasProfile.map((persona) => {
    persona.image = linkedinImage
    persona.link = persona.linkedin
  })

  return (
    <div className="row justify-content-center clients-l8-items">
      {personasProfile.map((persona, index) => (
        <div
          className="col-lg-4 col-md-6 col-sm-10 cardTestimonial"
          data-aos="fade-right"
          data-aos-delay={500}
          data-aos-duration={1000}
          key={index}
        >
          <Card heightCard="large" widthCard="large">
            <div className="client-l8-card">
              <div className="image">
                <Image src={persona.imageProfile} alt="image" />
              </div>
              <div className="content mt-2 cardText">
                <p>{persona.text}</p>
              </div>
              <div className="identity">
                <Logo
                  logoSource={persona.image}
                  logoHref={persona.link}
                  width={height}
                  height={height}
                  level="h6"
                >
                  <strong className="namePersona">{persona.name}</strong>
                </Logo>
                <small>{persona.profession}</small>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  )
}
