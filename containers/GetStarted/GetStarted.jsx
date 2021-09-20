import Image from 'next/image'

import {LeadForm} from '../../components/LeadForm'
import {Heading} from '../../components/Heading'
import { Section } from '../../components/Section'

import triangleImage from '../../assets/image/l6/shape-9.png'
import rocket from '../../assets/image/landing-1/h1-cta-rocket-image.png'


export default function GetStarted() {
  return (
      <div className="newsletter-area-l-12 position-relative overflow-hidden">
        <div className="container" data-aos="fade-down" data-aos-duration={800} data-aos-once="true">
        <div className="news-letter-l-12-shape d-md-block">
           <Image src = {triangleImage} alt="" class="w-100 mt-n10"/>
        </div>
          <div className="row justify-content-center">
           <div className="col-xl-6 col-lg-8 col-md-10">
             <div className="text-center">
              <Heading level ="h5" horizontalPosition="center">
                Ao logar, você acessa seu perfil pessoal! Ou você pode acessar agora!
              </Heading>
              <Heading level ="h2" horizontalPosition="center">
                Comece sua jornada aqui com a gente!
              </Heading>
            </div>
            <div className="btn-area d-flex justify-content-center">
              <a href="#" className="btn">Quero Preencher Agora!</a>
            </div>
         </div>
        </div>
      </div>
     </div>
  )
}
