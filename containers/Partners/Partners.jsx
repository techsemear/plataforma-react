import styles from './Partners.module.css'

import logos from '../../assets/image/apoiadores/index.js'
import {Logo} from '../../components/Logo'
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
        </div>
        <div className="col-xl-11 col-lg-11">
          <div
            className={`${styles.brandAreaItems} d-flex justify-content-center flex-wrap`}
            data-aos="fade-right"
            data-aos-duration={500}
            data-aos-once="true"
          >
            {logos.map((item, index) => (
              <div className={styles.partnersBrand}>
                <Logo
                  width={120}
                  height={60}
                  logoSource={item.image}
                  logoHref={item.link}
                  key={index}
                  hover={true}
                  target={'__blank'}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
