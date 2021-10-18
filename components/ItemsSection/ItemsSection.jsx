import {OrderedItems} from '../ItemsSection'
import {Heading} from '../Heading'
import {Underline} from '../Underline'

import styles from './ItemsSection.module.css'

export default function ItemsSection({
  children,
  itemsText,
  kindColor = 'default',
  title = '',
}) {
  return (
    <div
      className="offset-xxl-1 col-xxl-4 col-xl-5 col-lg-6 col-md-10"
      data-aos="fade-up"
      data-aos-delay={500}
      data-aos-duration={1000}
    >
      <div>
        <Heading ftColor={kindColor}>{title}</Heading>
        <Underline
          level="h4"
          ftColor={kindColor === 'default' ? 'secondary' : 'quartenary'}
          underline={true}
        >
          <span>{children}</span>
        </Underline>
      </div>
      <OrderedItems itemsTextList={itemsText} kindColor={kindColor} />
    </div>
  )
}
