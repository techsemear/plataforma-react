import {Presentation} from '../Presentation'
import {InstitutionalVideo} from '../InstitutionalVideo'
import {ContributorsList} from '../../components/ContributorsList'

export default function Institutional() {
  return (
    <div className="presentation" id="QuemSomos">
      <Presentation />
      <InstitutionalVideo />
      <div className="row">
        <div className="col-lg-12">
          <div className="feature-area-l1" />
        </div>
      </div>
      <ContributorsList />
    </div>
  )
}
