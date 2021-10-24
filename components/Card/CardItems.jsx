import React, {Fragment} from 'react'

import {Heading} from '../Heading'

export default function CardItems({contentInfo = [], reverse = true}) {
  return (
    <Fragment>
      <div className="content-l7-2-content-box">
        <div
          className="item d-flex flex-wrap "
          data-aos="fade-up"
          data-aos-delay={500}
          data-aos-duration={1000}
        >
          {reverse === true
            ? contentInfo
                .map((item, index) => (
                  <ContentCard item={item} key={`item-${index}`} />
                ))
                .reverse()
            : contentInfo.map((item, index) => (
                <ContentCard item={item} key={`item-${index}`} />
              ))}
        </div>
      </div>
    </Fragment>
  )
}

function ContentCard({item}) {
  return (
    <div className="feature-box-l2 h-100">
      <div className="d-flex">
        <div
          className={`color-box ${item.color ? item.color : 'bg-secondBlue'}`}
        />
        <div className="content-box">
          <Heading level="h4" ftColor="primary">
            {item.level}
          </Heading>
          <Heading level="h6" ftColor="primary">
            {item.subtitle}
          </Heading>
        </div>
      </div>
    </div>
  )
}
