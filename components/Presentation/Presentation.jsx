export default function Presentation() {
  const title = 'A Universidade foi o primeiro passo, e agora?'
  const subtitle = 'Conectamos jovens a oportunidades reais'
  const text =
    'O Instituto Semear acredita na potência do aprendizado social e há 10 anos promove pragramas de mentorias personalizadas e de vagas de estágio para jovens universitários de baixa renda.'
  const titleCard1 = '1400'
  const textCard1 = 'Jovens Impactados pelos projetos do ISemear'
  const titleCard2 = '+15000'
  const textCard2 = 'Jovens Impactados por nossos canais digitais'

  return (
    <div className="feature-area-l1">
      <div className="container">
        <div className="row customer-area-l1 justify-content-center align-items-center ">
          <div className="col-xl-5 col-lg-5 col-md-10">
            <div className="section__heading">
              <h2
                data-aos="fade-up"
                data-aos-delay={500}
                data-aos-duration={1000}
              >
                {title}
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay={800}
                data-aos-duration={1000}
              >
                <b>{subtitle}</b>
                <br className="d-none d-sm-block d-md-none d-xl-block" />
                {text}
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
                  <h3>{titleCard1}</h3>
                  <p> {textCard1} </p>
                </div>
              </div>
              <div
                className="col-sm-6 col-xs-8"
                data-aos="fade-left"
                data-aos-delay={800}
                data-aos-duration={1000}
              >
                <div className="h-100 rate-box rate-box-2 bg-cloudburst">
                  <h3>{titleCard2}</h3>
                  <p> {textCard2} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
