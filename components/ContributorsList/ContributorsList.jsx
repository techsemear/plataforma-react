
import logos from '../../assets/image/apoiadores/index.js';
import {Contributor} from '../Contributor'

export default function ContributorsList() {
  const titulo = "Quem apoia e está junto com a gente:";
  const h  = 40;
  const w  = 2*h;

  return (
    <div className="brand-area-l-17">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-9 col-lg-11 col-md-12">
            <div className="content text-center">
              <h1>{titulo}</h1><br></br>
            </div>
            <div className="brand-area-l-17-items d-flex justify-content-center  align-items-center flex-wrap "  data-aos="fade-right" data-aos-duration={500} data-aos-once="true">
              <Contributor logo = {logos.logo1}  />
              <Contributor logo = {logos.logo2}  />
              <Contributor logo = {logos.logo3}  />
              <Contributor logo = {logos.logo4}  />
              <Contributor logo = {logos.logo5}  />
              <Contributor logo = {logos.logo6}  />
              <Contributor logo = {logos.logo7}  />
              <Contributor logo = {logos.logo8}  />
              <Contributor logo = {logos.logo9}  />
              <Contributor logo = {logos.logo10}  />
              <Contributor logo = {logos.logo11}  />
              <Contributor logo = {logos.logo12}  />
              <Contributor logo = {logos.logo13}  />
              <Contributor logo = {logos.logo14}  />
              <Contributor logo = {logos.logo15}  />
              <Contributor logo = {logos.logo16}  />
              <Contributor logo = {logos.logo17}  />
              <Contributor logo = {logos.logo18}  />
              <Contributor logo = {logos.logo19}  />
              <Contributor logo = {logos.logo20}  />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
