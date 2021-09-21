import Image from 'next/image'
import {useState, Fragment} from 'react'
import {Heading} from '../Heading'

import {Modal} from './Video'

export default function VideoColumn({contentInfo}) {
  const [isModalOpen, toogleModal] = useState(false)

  const handleClick = (event) => {
    event.preventDefault()
    toogleModal(!isModalOpen)
  }
  return (
    <Fragment>
    
      <div
        className="single-item focus-reset col-lx-4"
        data-aos="fade-up"
        data-aos-duration={800}
        data-aos-once="true"
      >
        <div className="card--testimonial-l-12">
          <div className="testimonial-l-12-image">
            <Image src={contentInfo.coverImage} alt="image" />
          </div>
          <div className="testimonial-l-12-content">
            <div className="d-flex justify-content-between align-items-center">
              <div className="lecturer-identity">
                <Heading level="h6">{contentInfo.title}</Heading>
                <span>{contentInfo.subtitle}</span>
              </div>
              <div className="video-area">
                <a data-fancybox onClick={handleClick} className="focus-reset">
                  <div className="d-inline-block video-icon">
                    <i className="fas fa-play align-center" />
                  </div>
                </a>
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
