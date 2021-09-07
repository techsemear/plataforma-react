import logos from '../../assets/image/apoiadores/index.js'
import {Contributor} from '../Contributor'

export default function ContributorsList() {
  const title = 'Quem apoia e está junto com a gente:'

  return (
    <div className="brand-area-l-17">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-9 col-lg-11">
            <div className="content text-center">
              <h1>{title}</h1>

              <br></br>
            </div>
            <div
              className="brand-area-l-17-items d-flex justify-content-center  align-items-center flex-wrap "
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
      </div>
    </div>
  )
}
