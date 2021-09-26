import Image from 'next/image'
import {useState, Fragment} from 'react'

import {Modal} from './Video'

import Cover from '../../assets/image/l6/l6-hero-img.png'

export default function VideoSide({contentInfo = []}) {
  const [isModalOpen, toogleModal] = useState(false)

  const handleClick = (event) => {
    event.preventDefault()
    toogleModal(!isModalOpen)
  }

  return (
    <Fragment>
      <div
        className="col-xl-6 col-lg-5 col-md-8 order-lg-1 order-0"
        data-aos="fade-left"
        data-aos-duration={800}
        data-aos-once="true"
      >
        <div className="hero-video-l12 position-relative">
          <Image src={contentInfo.coverImage ? contentInfo.coverImage : Cover} alt="image-cover" />
          <a onClick={handleClick}>
            <div className="d-inline-block video-icon">
              <i className="fas fa-play font-size-7" />
            </div>
          </a>
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
