import React from 'react'
import Image from 'next/image'

import {Section} from '../../components/Section'
import {Heading} from '../../components/Heading'
import {VideoColumn} from '../../components/Video'

import Cover from '../../assets/image/l6/l6-hero-img.png'
import Shape7 from '../../assets/image/l6/shape-7.svg'

const challengeContent = [
  {
    title: 'Alimentação',
    subtitle: 'Desafio 1',
    text: 'Create custom landing pages with Shades that convert more visitors than any website—no coding required.Create custom landing pages with Shades that convert more visitors than any website—no coding required.Create custom landing pages with Shades that convert more visitors than any website—no coding required.',
    coverImage: Cover,
    youtubeID: 'HR1BaFO0R1I',
  },
  {
    title: 'Moradia',
    subtitle: 'Desafio 2',
    text: 'Create custom landing pages with Shades that convert more visitors than any website—no coding required.Create custom landing pages with Shades that convert more visitors than any website—no coding required.Create custom landing pages with Shades that convert more visitors than any website—no coding required.',
    coverImage: Cover,
    youtubeID: 'HR1BaFO0R1I',
  },
]

export default function ChallengeVideos() {
  return (
    <div className="testimonial-area-l-12">
    <div className="container position-relative">
      <div className="testimonial-border-area-l-12" />
      <div className="testimonial-area-l12-shape">
        <img src="image/l6/shape-7.svg" alt="" className="w-100" />
      </div>
      <div className="row">
        <div className="col-xxl-7 col-xl-8 col-lg-9 col-md-12">
          <div className="section-heading-6">
            <h2>Don’t believe me. Listen what’s my students are saying</h2>
          </div>
        </div>
        <div className="col-xxl-5 col-xl-4 col-lg-3 col-md-12">
          <div className="l-12-slider-arrow-1 text-end">
            <i className="prev9 icon icon-tail-left slick-arrow" style={{}} />
            <i className="next9 icon icon-tail-right slick-active slick-arrow" style={{}} />
          </div>
        </div>
      </div>
      <div className="row testimonial-items-l-12">
        <div className="col-12">
          <div className="testimonial-slider-l-12 slick-initialized slick-slider">
            <div className="slick-list draggable"><div className="slick-track" style={{opacity: 1, width: 4862, transform: 'translate3d(-1768px, 0px, 0px)'}}><div className="single-item focus-reset aos-init aos-animate slick-slide slick-cloned" data-aos="fade-up" data-aos-duration={800} data-aos-once="true" style={{width: 412}} tabIndex={-1} data-slick-index={-3} id aria-hidden="true">
                  <div className="card--testimonial-l-12">
                    <div className="testimonial-l-12-image">
                      <img className="w-100" src="image/l6/blog-img-2.png" alt="image" />
                    </div>
                    <div className="testimonial-l-12-content">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="lecturer-identity">
                          <h6>Annie Reyes</h6>
                          <span>Designer</span>
                        </div>
                        <div className="video-area">
                          <a data-fancybox href="https://www.youtube.com/watch?v=9yc1lfFZX-I" className="focus-reset" tabIndex={-1}>
                            <div className="d-inline-block video-icon d-inline-block">
                              <i className="fas fa-play align-center" />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div><div className="single-item focus-reset aos-init aos-animate slick-slide slick-cloned" data-aos="fade-up" data-aos-duration={800} data-aos-once="true" style={{width: 412}} tabIndex={-1} data-slick-index={-2} id aria-hidden="true">
                  <div className="card--testimonial-l-12">
                    <div className="testimonial-l-12-image">
                      <img className="w-100" src="image/l6/blog-img-3.png" alt="image" />
                    </div>
                    <div className="testimonial-l-12-content">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="lecturer-identity">
                          <h6>Annie Reyes</h6>
                          <span>Designer</span>
                        </div>
                        <div className="video-area">
                          <a data-fancybox href="https://www.youtube.com/watch?v=9yc1lfFZX-I" className="focus-reset" tabIndex={-1}>
                            <div className="d-inline-block video-icon d-inline-block">
                              <i className="fas fa-play align-center" />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div><div className="single-item focus-reset aos-init aos-animate slick-slide slick-cloned" data-aos="fade-up" data-aos-duration={800} data-aos-once="true" style={{width: 412}} tabIndex={-1} data-slick-index={-1} id aria-hidden="true">
                  <div className="card--testimonial-l-12">
                    <div className="testimonial-l-12-image">
                      <img className="w-100" src="image/l6/blog-img-2.png" alt="image" />
                    </div>
                    <div className="testimonial-l-12-content">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="lecturer-identity">
                          <h6>Annie Reyes</h6>
                          <span>Designer</span>
                        </div>
                        <div className="video-area">
                          <a data-fancybox href="https://www.youtube.com/watch?v=9yc1lfFZX-I" className="focus-reset" tabIndex={-1}>
                            <div className="d-inline-block video-icon d-inline-block">
                              <i className="fas fa-play align-center" />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div><div className="single-item focus-reset aos-init aos-animate slick-slide" data-aos="fade-up" data-aos-duration={800} data-aos-once="true" style={{width: 412}} tabIndex={-1} data-slick-index={0} aria-hidden="true">
                  <div className="card--testimonial-l-12">
                    <div className="testimonial-l-12-image">
                      <img className="w-100" src="image/l6/blog-img-1.png" alt="image" />
                    </div>
                    <div className="testimonial-l-12-content">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="lecturer-identity">
                          <h6>Annie Reyes</h6>
                          <span>Designer</span>
                        </div>
                        <div className="video-area">
                          <a data-fancybox href="https://www.youtube.com/watch?v=9yc1lfFZX-I" className="focus-reset" tabIndex={-1}>
                            <div className="d-inline-block video-icon d-inline-block">
                              <i className="fas fa-play align-center" />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div><div className="single-item focus-reset aos-init aos-animate slick-slide slick-current slick-active" data-aos="fade-up" data-aos-duration={800} data-aos-once="true" style={{width: 412}} tabIndex={0} data-slick-index={1} aria-hidden="false">
                  <div className="card--testimonial-l-12">
                    <div className="testimonial-l-12-image">
                      <img className="w-100" src="image/l6/blog-img-2.png" alt="image" />
                    </div>
                    <div className="testimonial-l-12-content">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="lecturer-identity">
                          <h6>Annie Reyes</h6>
                          <span>Designer</span>
                        </div>
                        <div className="video-area">
                          <a data-fancybox href="https://www.youtube.com/watch?v=9yc1lfFZX-I" className="focus-reset" tabIndex={0}>
                            <div className="d-inline-block video-icon d-inline-block">
                              <i className="fas fa-play align-center" />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div><div className="single-item focus-reset aos-init aos-animate slick-slide slick-active" data-aos="fade-up" data-aos-duration={800} data-aos-once="true" style={{width: 412}} tabIndex={0} data-slick-index={2} aria-hidden="false">
                  <div className="card--testimonial-l-12">
                    <div className="testimonial-l-12-image">
                      <img className="w-100" src="image/l6/blog-img-3.png" alt="image" />
                    </div>
                    <div className="testimonial-l-12-content">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="lecturer-identity">
                          <h6>Annie Reyes</h6>
                          <span>Designer</span>
                        </div>
                        <div className="video-area">
                          <a data-fancybox href="https://www.youtube.com/watch?v=9yc1lfFZX-I" className="focus-reset" tabIndex={0}>
                            <div className="d-inline-block video-icon d-inline-block">
                              <i className="fas fa-play align-center" />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div><div className="single-item focus-reset aos-init aos-animate slick-slide slick-active" data-aos="fade-up" data-aos-duration={800} data-aos-once="true" style={{width: 412}} tabIndex={0} data-slick-index={3} aria-hidden="false">
                  <div className="card--testimonial-l-12">
                    <div className="testimonial-l-12-image">
                      <img className="w-100" src="image/l6/blog-img-2.png" alt="image" />
                    </div>
                    <div className="testimonial-l-12-content">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="lecturer-identity">
                          <h6>Annie Reyes</h6>
                          <span>Designer</span>
                        </div>
                        <div className="video-area">
                          <a data-fancybox href="https://www.youtube.com/watch?v=9yc1lfFZX-I" className="focus-reset" tabIndex={0}>
                            <div className="d-inline-block video-icon d-inline-block">
                              <i className="fas fa-play align-center" />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div><div className="single-item focus-reset aos-init aos-animate slick-slide slick-cloned" data-aos="fade-up" data-aos-duration={800} data-aos-once="true" style={{width: 412}} tabIndex={-1} data-slick-index={4} id aria-hidden="true">
                  <div className="card--testimonial-l-12">
                    <div className="testimonial-l-12-image">
                      <img className="w-100" src="image/l6/blog-img-1.png" alt="image" />
                    </div>
                    <div className="testimonial-l-12-content">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="lecturer-identity">
                          <h6>Annie Reyes</h6>
                          <span>Designer</span>
                        </div>
                        <div className="video-area">
                          <a data-fancybox href="https://www.youtube.com/watch?v=9yc1lfFZX-I" className="focus-reset" tabIndex={-1}>
                            <div className="d-inline-block video-icon d-inline-block">
                              <i className="fas fa-play align-center" />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div><div className="single-item focus-reset aos-init aos-animate slick-slide slick-cloned" data-aos="fade-up" data-aos-duration={800} data-aos-once="true" style={{width: 412}} tabIndex={-1} data-slick-index={5} id aria-hidden="true">
                  <div className="card--testimonial-l-12">
                    <div className="testimonial-l-12-image">
                      <img className="w-100" src="image/l6/blog-img-2.png" alt="image" />
                    </div>
                    <div className="testimonial-l-12-content">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="lecturer-identity">
                          <h6>Annie Reyes</h6>
                          <span>Designer</span>
                        </div>
                        <div className="video-area">
                          <a data-fancybox href="https://www.youtube.com/watch?v=9yc1lfFZX-I" className="focus-reset" tabIndex={-1}>
                            <div className="d-inline-block video-icon d-inline-block">
                              <i className="fas fa-play align-center" />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div><div className="single-item focus-reset aos-init aos-animate slick-slide slick-cloned" data-aos="fade-up" data-aos-duration={800} data-aos-once="true" style={{width: 412}} tabIndex={-1} data-slick-index={6} id aria-hidden="true">
                  <div className="card--testimonial-l-12">
                    <div className="testimonial-l-12-image">
                      <img className="w-100" src="image/l6/blog-img-3.png" alt="image" />
                    </div>
                    <div className="testimonial-l-12-content">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="lecturer-identity">
                          <h6>Annie Reyes</h6>
                          <span>Designer</span>
                        </div>
                        <div className="video-area">
                          <a data-fancybox href="https://www.youtube.com/watch?v=9yc1lfFZX-I" className="focus-reset" tabIndex={-1}>
                            <div className="d-inline-block video-icon d-inline-block">
                              <i className="fas fa-play align-center" />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div><div className="single-item focus-reset aos-init aos-animate slick-slide slick-cloned" data-aos="fade-up" data-aos-duration={800} data-aos-once="true" style={{width: 412}} tabIndex={-1} data-slick-index={7} id aria-hidden="true">
                  <div className="card--testimonial-l-12">
                    <div className="testimonial-l-12-image">
                      <img className="w-100" src="image/l6/blog-img-2.png" alt="image" />
                    </div>
                    <div className="testimonial-l-12-content">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="lecturer-identity">
                          <h6>Annie Reyes</h6>
                          <span>Designer</span>
                        </div>
                        <div className="video-area">
                          <a data-fancybox href="https://www.youtube.com/watch?v=9yc1lfFZX-I" className="focus-reset" tabIndex={-1}>
                            <div className="d-inline-block video-icon d-inline-block">
                              <i className="fas fa-play align-center" />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div></div></div></div>
        </div>
      </div>
    </div>
  </div>  
  )
}
