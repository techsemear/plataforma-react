import React from 'react'
import Image from 'next/image'
import {Fade} from 'react-slideshow-image'

import 'react-slideshow-image/dist/styles.css'

const SlideShow = ({contentInfo = []}) => {
  return (
    <div className="slide-container">
      <Fade>
        {contentInfo.map((item, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <Image
                src={item.image}
                width={item.width ? item.width : 550}
                height={item.height ? item.height : 550}
                alt=""
              />
            </div>
          </div>
        ))}
      </Fade>
    </div>
  )
}
export default SlideShow
