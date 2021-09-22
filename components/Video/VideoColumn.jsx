import Image from 'next/image'
import {useState, Fragment} from 'react'
import {Heading} from '../Heading'

import {Modal} from './Video'

import Cover from '../../assets/image/l6/l6-hero-img.png'

const contentDefault =  {
    title: 'Alimentação',
    subtitle: 'Desafio 1',
    coverImage: Cover,
    youtubeID: 'HR1BaFO0R1I',
  }

export default function VideoColumn({contentInfo = contentDefault}) {
  const [isModalOpen, toogleModal] = useState(false)

  const handleClick = (event) => {
    event.preventDefault()
    toogleModal(!isModalOpen)
  }
  return (
    <Fragment>
      <div className="">
        <div
          className="single-item focus-reset aos-init aos-animate slick-slide slick-cloned"
          data-aos="fade-up"
          data-aos-duration={800}
          data-aos-once="true"
          tabIndex={-1}
          data-slick-index={-3}
          aria-hidden="true"
        >
          <div className="card--testimonial-l-12">
            <div className="testimonial-l-12-image w-100">
              <Image src={contentInfo.coverImage} alt="image" />
            </div>
            <div className="testimonial-l-12-content">
              <div className="d-flex justify-content-between align-items-center">
                <div className="lecturer-identity">
                  <Heading level="h4">{contentInfo.title}</Heading>
                  <Heading level="h6" ftColor="secondary">
                    {contentInfo.subtitle}
                  </Heading>
                </div>
                <div className="video-area">
                  <a
                    onClick={handleClick}
                    data-fancybox
                    className="focus-reset"
                  >
                    <div className="d-inline-block video-icon d-inline-block">
                      <i className="fas fa-play align-center" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal onClickOutside={handleClick}>
          <iframe
            src={`https://www.youtube.com/embed/${contentInfo.youtubeID}?autoplay=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Modal>
      )}
    </Fragment>
  )
}
