import Image from 'next/image'
import mentorImage from '../../assets/image/mentor1.png'

export default function Testimonial() {
  return (
    <div className="content-area-2-l1">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div
            className="offset-xxl-1 col-xxl-4 col-xl-5 col-lg-6 col-md-10"
            data-aos="fade-up"
            data-aos-delay={500}
            data-aos-duration={1000}
          >
            <div className="content-box-2-l1 section__heading">
            <div>
                <h2 className="content-text-h2-a4">O que posso descobrir nessa jornada ?</h2>
                <h4 className="content-text-h4"><span className="features-area-l1-span">Jornada do Mentor</span></h4>
            </div>
              <ul className="list-unstyled number-content-box-l1">
              <li className="d-flex align-items-start">
                  <div className="number number--2">
                    <span>1</span>
                  </div>
                  <div className="content">
                    <p>
                      With lots of unique blocks, you can easily build a page
                      without coding.{' '}
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start">
                  <div className="number number--2">
                    <span>2</span>
                  </div>
                  <div className="content">
                    <p>
                      With lots of unique blocks, you can easily build a page
                      without coding.{' '}
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start">
                  <div className="number number--2">
                    <span>3</span>
                  </div>
                  <div className="content">
                    <p>
                      With lots of unique blocks, you can easily build a page
                      without coding.{' '}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="offset-xxl-1 col-xxl-5 offset-xl-1 col-xl-5 col-lg-6 col-md-10">
            <div
              className="content-2-l1-image-group"
              data-aos="fade-up"
              data-aos-delay={800}
              data-aos-duration={1000}
            >
              <div className="image-1">
                <Image src={ mentorImage } alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
