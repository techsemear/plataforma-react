import {Ratings} from '../Ratings'
import {Button} from '../Button'


export default function Hero() {
  return (
    <div className="hero-area-l-12 position-relative z-index-1 overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-xl-6 col-lg-7 col-md-8 col-sm-12 order-lg-1 order-1"
            data-aos="fade-right"
            data-aos-duration={800}
            data-aos-once="true"
          >
            <div className="content">
              <h1>Learn User Centered Design</h1>
              <p>
                Create custom landing pages with Shades that convert more
                visitors than any website—no coding required.
              </p>
              <Button />              
              <Ratings />
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-5 col-md-8 order-lg-1 order-0"
            data-aos="fade-left"
            data-aos-duration={800}
            data-aos-once="true"
          >
            <div className="hero-video-l12 position-relative text-center">
              <img src="image/l6/l6-hero-img.png" alt="" className="w-100" />
              <a
                data-fancybox
                href="https://www.youtube.com/watch?v=9yc1lfFZX-I"
              >
                <div className="d-inline-block video-icon d-inline-block">
                  <i className="fas fa-play align-center" />
                </div>
              </a>
              <div className="video-area-shape-l-12">
                <img src="image/l6/shape-2.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-shape-l12-1 d-none d-sm-block">
        <img src="./image/l6/shape-1.png" alt="" />
      </div>
      <div className="hero-shape-l12-2 d-none d-sm-block">
        <img src="./image/l6/shape-3.png" alt="" />
      </div>
    </div>
  )
}
