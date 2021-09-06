import Image from 'next/image'
import {Testimonial} from '../Testimonial'
import {ItemsSection} from '../ItemsSection'
import studentImage from '../../assets/image/footer.png'
import globeImage from '../../assets/image/landing-1/h1-content-2-globe.png'
import journeyImage from '../../assets/image/journeyImage.png'
import {Button} from '../Button'


export default function StudentJourney (){
  return (
    <div className="content-are-l1-1 bg-primary">
      <div className="curve-image-l1">
        <img src="./image/landing-1/white-shape-top.svg" alt="image" className="w-100" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-10 order-2 order-lg-1" data-aos="fade-up" data-aos-delay={500} data-aos-duration={1000}>
            <div className="content-area-l1-image-group">
              <div className="image-1">
                <Image className="w-100" src= {journeyImage} alt="image" />
              </div>
              <div className="image-2">
                <img className="swing" src="image/landing-1/bell-image.svg" alt="image" />
              </div>
              <div className="image-3 d-none d-sm-block">
                <img src="image/landing-1/plant-image.svg" alt="image" />
              </div>
            </div>
          </div>
          <div className="offset-xxl-2 col-xxl-5 offset-xl-1 col-xl-6 col-lg-6 col-md-10 order-0 order-lg-1" data-aos="fade-up" data-aos-delay={800} data-aos-duration={1000}>
            <div className="content-box-l1-1 section__heading">
              <div className="cap-image d-none d-sm-block">
                <img className="vertical-move" src="image/landing-1/h1-content2-card-tupi.png" alt="image" />
              </div>
              <div>
                <h2>A cada nova DESCOBERTA, uma nova CONQUISTA!</h2>
                <p>A sua Jornada no Instituto Semear é construída com base em um conjunto de ferramentas e métodos comprovados que servem para jovens que sentem na pele as dificuldades de se graduar e de <strong>se tornar protagonista da sua própria carreira profissional.</strong>
                </p>
                <div className="l1-get-start-btn">
                  <Button>Inscreva-se</Button>
                </div>
                <p>Com a rede de contatos do ISemear, contamos com apoio de <strong>mais de 600 mentores</strong> cadastrados de todas as <strong>empresas parceiras</strong> e das mais diversas áreas!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
