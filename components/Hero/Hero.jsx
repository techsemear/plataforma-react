import Image from 'next/image'
import {Ratings} from '../Ratings'
import {Button} from '../Button'
import headerImage from '../../assets/image/personagens/header.png'
import chatImage from '../../assets/image/landing-1/chat-icon.svg'
import heartImage from '../../assets/image/landing-1/chat-icon.svg'
import headerBackgroundImage from '../../assets/image/background-header.png'
import {Fragment} from 'react' 
export default function Hero() {
  return (
    <Fragment>
    <div
      className="hero-area-l1  position-relative background-property"
      style={{background: {headerBackgroundImage}}}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div
            className="col-xxl-5 col-xl-6 col-lg-6 col-md-10 order-lg-1 order-1"
            data-aos="fade-right"
            data-aos-delay={500}
            data-aos-duration={1000}
          >
            <div className="content">
              <h2>As conexões que mudarão o seu futuro!</h2>
              <p>
                A plataforma desenvolvida para mentores e jovens universitários
                protagonistas que juntos buscam aprimorar suas habilidades
                profissionais e alcançar seus sonhos. Conecte-se a nova era de
                aprendizado !
              </p>

              <Button>Inscreva-se</Button>
            </div>
          </div>

          <div
            className="offset-xxl-2 col-xxl-5 offset-xl-1 col-xl-5 col-lg-6 col-md-8 order-lg-1 order-0"
            data-aos="fade-left"
            data-aos-delay={700}
            data-aos-duration={1000}
          >
            <div className="hero-image-group-l1">
              <div className="image-1">
                <Image src={headerImage} alt="logo" objectFit="contain" />
              </div>
              <div className="image-2">
                <img
                  className="horizontal-move"
                  src="https://plataformasemear.netlify.app/image/landing-1/chat-icon.svg"
                  alt="image"
                />
              </div>
              <div className="image-3">
                <img
                  className="vertical-move"
                  src="https://plataformasemear.netlify.app/image/landing-1/icon-3d-heart.svg"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{height: 150, overflow: 'hidden'}}><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}><path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{stroke: 'none', fill: '#11115d'}} /></svg></div>
    </Fragment>
  )
}
