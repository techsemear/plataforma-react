import logos from '../../assets/image/apoiadores/index.js'
import {Contributor} from '../../components/Contributor'
import {Section} from '../../components/Section'
import {Heading} from '../../components/Heading'

export default function Partners() {
  const content = {
    title: 'Quem apoia e está junto com a gente',
    subtitle: 'Conheça as empresas que fazem parte dessa história!',
  }

  return (
    <Section id="parceiros">
      <div className="row justify-content-center">
        <div className="col-xl-9 col-lg-11">
          <Heading horizontalPosition="center">{content.title}</Heading>
          <Heading horizontalPosition="center" level="h5" ftColor="secondary">
            {content.subtitle}
          </Heading>

          <div
            className="brand-area-l-17-items d-flex justify-content-center align-items-center flex-wrap mt-5"
            data-aos="fade-right"
            data-aos-duration={500}
            data-aos-once="true"
          >
            {Object.keys(logos).map((item, index) => (
              <Contributor logo={logos[item]} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
