import React from 'react';
import Image from "next/image"
import { Fade } from 'react-slideshow-image';


import imageLogin1 from '../../assets/image/loginImage1.png'
import imageLogin2 from '../../assets/image/loginImage2.png'
import imageLogin3 from '../../assets/image/loginImage3.png'


const SlideShow = () => {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <div className="image-container">
            <Image 
              src= {imageLogin1}
              width={550}
              height={550}
            />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <Image 
              src={imageLogin2}
              width={550}
              height={550}
            />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <Image 
              src={imageLogin3}
              width={550}
              height={550}
            />
          </div>
        </div>
      </Fade>
    </div>
  )
}
export default SlideShow;