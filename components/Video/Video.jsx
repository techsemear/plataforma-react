import Image from 'next/image'
import {useState, Fragment} from 'react'

import {Heading} from '../Heading'

function Modal({children, onClickOutside = () => {}, youtubeID}) {
  return (
    <div onClick={onClickOutside} className="video-modal">
      <div className="container">
        <div className="video-wrapper">
          <Image
            src={`https://img.youtube.com/vi/${youtubeID}/maxresdefault.jpg`}
            alt=""
            layout="fill"
          />

          <div className="video-loader">
            <div className="spinner-border text-light" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>

          {children}
        </div>
      </div>
    </div>
  )
}

export default function Video({youtubeID, contentText = []}) {
  const [isModalOpen, toogleModal] = useState(false)

  const handleClick = (event) => {
    event.preventDefault()

    toogleModal(!isModalOpen)
  }

  return (
    <Fragment>
      <div className="video-area-l-17">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-7 col-xl-8 col-lg-9 col-md-12">
              <div className="video-content text-center">
                <a onClick={handleClick}>
                  <i
                    className="fas fa-play font-size-7"
                  />
                </a>
                <Heading horizontalPosition="center">{contentText.title}</Heading>
                <p>{contentText.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal onClickOutside={handleClick}>
          <iframe
            src={`https://www.youtube.com/embed/${youtubeID}?autoplay=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Modal>
      )}
    </Fragment>
  )
}

export {Modal}