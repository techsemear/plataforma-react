import {Presentation} from '../Presentation'
import {InstitutionalVideo} from '../InstitutionalVideo'
import {ContributorsList} from '../ContributorsList'

export default function Institutional() {
  return (
    <div className="presentation" id = "QuemSomos">
        <Presentation />
        <p className ="evasaoText" >Atualmente atingimos 100% de não evasão entre nossos bolsistas !</p>
        <InstitutionalVideo />
        <div className="row">
          <div className="col-lg-12">
          <div className="feature-area-l1"/>
          </div>
        </div>
        <ContributorsList />
    </div>
  )
}
