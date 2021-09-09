import {Heading} from '../../components/Heading'
import {Section} from '../../components/Section'
import {Underline} from '../../components/Underline'


const content = {
  title: 'A Universidade foi o primeiro passo, e agora?',
  subtitle: 'Conectamos jovens a oportunidades reais',
  textPart1: ' tem como objetivo diminuir a evasão universitária e fornecer aos jovens de baixa renda as condições para que se desenvolvam durante a graduação. Desde então, selecionamos, desenvolvemos e conectamos estudantes universitários de alto potencial que queiram atuar como agentes multiplicadores por um Brasil melhor e mais justo.',
  textPart2: 'Alcançamos esse objetivo por meio de Networking, oferecendo uma ampla rede de contato e da Mentoria Social, onde eles trocam experiências com profissionais renomados nas áreas que atuam.',
  textPart3: 'Por acreditarmos na potência do aprendizado social através do nosso programa de mentorias, queremos convidar você a ',
  textPart4: 'imergir nessa jornada que mudará o seu futuro!',
  textPart5: 'O ',
  readMore: 'Instituto Semear',
  titleCard1: '1400',
  textCard1: 'Jovens Impactados pelos projetos do ISemear',
  titleCard2: '+15000',
  textCard2: 'Jovens Impactados por nossos canais digitais',
  textEvasion:
    'Atualmente atingimos 100% de não evasão entre nossos bolsistas !',
}

export default function Presentation() {
  return (
    <Section id="missao">
      <div className="row customer-area-l1  align-items-center offset-xl- ">
        <div className="col-xl-6 col-lg-5 col-md-10 ">
          <div className="section__heading">
            <Heading level="h2">{content.title}</Heading>

            <p data-aos="fade-up" data-aos-delay={800} data-aos-duration={1000}>
              <b>
                <Underline level="h5">{content.subtitle}</Underline>
              </b>
              <br className="d-none d-sm-block d-md-none d-xl-block mt-4" />
              {content.textPart5}
              <a href="https://www.isemear.org.br" target="_blank">
                {content.readMore}
              </a>
              {content.textPart1}
              <br className="d-none d-sm-block d-md-none d-xl-blo mt-2" />
              <br className="d-none d-sm-block d-md-none d-xl-blo mt-2" />
              {content.textPart2}
              <br className="d-none d-sm-block d-md-none d-xl-blo mt-2" />
              {content.textPart3}
              <strong>{content.textPart4}</strong>
            </p>
          </div>
        </div>
        <div className="col-xl-5 col-lg-6 offset-xl-1">
          <div className="row user-rating-box-area">
            <div
              className="col-sm-6 col-xs-8"
              data-aos="fade-left"
              data-aos-delay={500}
              data-aos-duration={1000}
            >
              <div className="h-100 rate-box bg-primary">
                <h3>{content.titleCard1}</h3>
                <p> {content.textCard1} </p>
              </div>
            </div>
            <div
              className="col-sm-6 col-xs-8"
              data-aos="fade-left"
              data-aos-delay={800}
              data-aos-duration={1000}
            >
              <div className="h-100 rate-box rate-box-2 bg-cloudburst">
                <h3>{content.titleCard2}</h3>
                <p> {content.textCard2} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
