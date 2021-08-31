import {Button} from '../Button'

export default function InstitutionalVideo() {
  const titulo = "Entenda na Prática";
  const subtitulo = "Assista ao nosso manifesto";
  return (
    <div className="video-area-l-17">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-7 col-xl-8 col-lg-9 col-md-12">
            <div className="video-content text-center">
              <a data-fancybox href="https://www.youtube.com/embed/HR1BaFO0R1I"><i className="fas 
              fa-play font-size-7" /></a>
              <h2> {titulo} </h2>
              <p> {subtitulo} </p>
            </div>
          </div>
        </div>
      </div>
    </div>  
  )
}
