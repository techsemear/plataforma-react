import Image from 'next/image'

import {Heading} from '../Heading'
const heightLogo = 55
const widthLogo = heightLogo * 2

export default function LogoImage({
  logo,
  height = heightLogo,
  width = widthLogo,
  level,
  children,
  hover = false,
}) {
  return (
    <div
      className={hover ? 'single-brand resize-image' : 'single-brand'}
      data-aos="fade-right"
      data-aos-duration={500}
      data-aos-once="true"
    >
      <Heading level={level}>
        <a
          className="reference"
          href={logo.link}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={logo.image}
            alt="logo"
            objectFit="contain"
            width={width}
            height={height}
          />
        </a>
        {children}
      </Heading>
    </div>
  )
}
