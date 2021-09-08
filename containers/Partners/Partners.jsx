import logos from '../../assets/image/apoiadores/index.js'
import {Contributor} from '../../components/Contributor'
import {Section} from '../../components/Section'
import {Heading} from '../../components/Heading'

export default function Partners() {
  const title = 'Quem apoia e está junto com a gente:'

  return (
    <Section id="parceiros">
      <div className="row justify-content-center">
        <div className="col-xl-9 col-lg-11">
          <Heading horizontalPosition="center">{title}</Heading>

          <div
            className="brand-area-l-17-items d-flex justify-content-center align-items-center flex-wrap "
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
