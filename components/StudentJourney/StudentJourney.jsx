import Image from 'next/image'

import {Button} from '../../components/Button'
import {Heading} from '../../components/Heading'

import journeyImage from '../../assets/image/journeyImage.png'

const title = 'A cada nova DESCOBERTA, uma nova CONQUISTA!';

export default function StudentJourney() {
  return (
    <div className="content-are-l1-1 bg-primary">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-xxl-5 col-xl-6 col-lg-6 col-md-10 order-2 order-lg-1"
            data-aos="fade-up"
            data-aos-delay={500}
            data-aos-duration={1000}
          >
            <div className="content-area-l1-image-group">
              <div className="image-1">
                <Image className="w-100" src={journeyImage} alt="image" />
              </div>
            </div>
          </div>
          <div
            className="offset-xxl-2 col-xxl-5 offset-xl-1 col-xl-5 col-lg-6 col-md-10 order-0 order-lg-1"
            data-aos="fade-up"
            data-aos-delay={800}
            data-aos-duration={1000}
          >
            <div className="content-box-l1-1 section__heading">
              <div>
                <Heading level="h4">{title}</Heading>
                <p>
                  A sua Jornada no ISemear é construída com base em um
                  conjunto de ferramentas e métodos que servem para
                  jovens que sentem na pele as dificuldades de se graduar e {' '}
                  <strong>
                    se tornar protagonista da sua própria carreira.
                  </strong>
                </p>
                <div className="l1-get-start-btn">
                  <Button>Inscreva-se</Button>
                </div>
                <p>
                  Com a rede de contatos do ISemear, contamos com apoio de{' '}
                  <strong>mais de 600 mentores</strong> cadastrados de todas as{' '}
                  <strong>empresas parceiras</strong> e das mais diversas áreas!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
