import {Heading} from '../../components/Heading'
import {Section} from '../../components/Section'

const content = {
  title: 'A Universidade foi o primeiro passo, e agora?',
  subtitle: 'Conectamos jovens a oportunidades reais',
  text: 'O Instituto Semear acredita na potência do aprendizado social e há 10 anos promove pragramas de mentorias personalizadas e de vagas de estágio para jovens universitários de baixa renda.',
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
      <div className="row customer-area-l1 justify-content-center align-items-center ">
        <div className="col-xl-5 col-lg-5 col-md-10">
          <div className="section__heading">
            <Heading level="h2">{content.title}</Heading>

            <p data-aos="fade-up" data-aos-delay={800} data-aos-duration={1000}>
              <b>{content.subtitle}</b>
              <br className="d-none d-sm-block d-md-none d-xl-block" />
              {content.text}
            </p>
          </div>
        </div>
        <div className="col-xl-6 col-lg-7 col-md-10 offset-xl-1">
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
