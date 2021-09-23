import React from 'react';
import Image from "next/image"
import { Fade } from 'react-slideshow-image';


import imageLogin1 from '../../assets/image/loginImage1.png'
import imageLogin2 from '../../assets/image/loginImage2.png'
import imageLogin3 from '../../assets/image/loginImage3.png'

const fadeImages = {
  image1: '../../assets/image/loginImage1.png',
  image2: '../../assets/image/loginImage2.png',
  image3: '../../assets/image/loginImage3.png',
}

const SlideShow = () => {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <div className="image-container">
            <Image src= {imageLogin1} />
          </div>
          <h2>First Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <Image src={imageLogin2} />
          </div>
          <h2>Second Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <Image src={imageLogin3} />
          </div>
          <h2>Third Slide</h2>
        </div>
      </Fade>
    </div>
  )
}
export default SlideShow;