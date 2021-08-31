import {Presentation} from '../Presentation'
import {InstitutionalVideo} from '../InstitutionalVideo'
import {ContributorsList} from '../ContributorsList'

export default function Institutional() {
  return (
    <div className="presentation">
        <Presentation />
        <InstitutionalVideo />
        <div className="row">
          <div className="col-lg-12">
            <div className="feature-border-l1" />
          </div>
        </div>
        <ContributorsList />
    </div>
  )
}
