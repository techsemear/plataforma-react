import Image from 'next/image'
import blurImage from '../../assets/image/landing-1/h1-cta-blur-shape-2.png'
import rocket from '../../assets/image/landing-1/h1-cta-rocket-image.png'
import {Button} from '../../components/Button'

export default function SignUp() {
  return (
    <div className="contact-form-area-l1 bg-mirage position-relative">
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
              <h2>Gostou da Nossa proposta ?</h2>
              <p>Inscreva-se para acompanhar nosso lançamento.</p>
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
            <div className="contact-form-l1">
              <form action="#">
                <div className="form-group">
                  <label htmlFor="name">Nome Completo:</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Type your name"
                    id="name"
                    className="form-control "
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Indique seu melhor email:</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    id="email"
                    className="form-control "
                  />
                </div>
                <Button>Inscreva-se</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
