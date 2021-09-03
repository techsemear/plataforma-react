import Image from 'next/image'
import mentorImage from '../../assets/image/mentor1.png'

export default function MentorTestimonial() {
  return (
  <div className="testimonial-area2-l1 position-relative bg-testimonial">
      <div className="curve-image-l1">   
      </div>
      <div className="testimonial-area2-l-image-group">
        <div className="image-1">
          <img className="w-100 vertical-move" src="image/landing-1/h1-client-heart-shape.png" alt="image" />
        </div>
        <div className="image-2">
          <img className="w-100 spin" src="image/landing-1/h1-client-start-shape.png" alt="image" />
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-8" data-aos="fade-in" data-aos-delay={500} data-aos-duration={1000}>
            <div className="section__heading text-center">
              <h2 className="testimonial-mentores">Mentores da Rede Semear</h2>
            </div>
          </div>
        </div>
        <div className="row testimonial-area2-l1-items  justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-11 col-xs-12" data-aos="fade-right" data-aos-delay={500} data-aos-duration={1000}>
            <div className="content h-100 text-center">
              <img src="image/landing-1/team-image.png" alt="image" />
              <p>“<span>Lorem ipsum dolor sit amet,</span> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
              <h5>Mentor A </h5>
              <small>Trabalha em A </small>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-11 col-xs-12" data-aos="fade-up" data-aos-delay={800} data-aos-duration={1000}>
            <div className="content h-100 text-center">
              <img src="image/landing-1/team-image-2.png" alt="image" />
              <p>“<span>Lorem ipsum dolor sit amet,</span> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
              <h5>Mentor B </h5>
              <small>Trabalha em B </small>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-11 col-xs-12" data-aos="fade-left" data-aos-delay={1000} data-aos-duration={1000}>
            <div className="content h-100 text-center">
              <img src="image/landing-1/team-image-3.png" alt="image" />
              <p>“<span>Lorem ipsum dolor sit amet,</span> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
              <h5>Mentor C </h5>
              <small>Trabalha em C </small>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}
