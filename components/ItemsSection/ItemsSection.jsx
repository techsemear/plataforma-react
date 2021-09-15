import {OrderedItems} from '../OrderedItems'
import {Heading} from '../Heading'
import {Underline} from '../Underline'
export default function ItemsSection({children, itemsText, dark = false}) {
  return (
    <div
      className="offset-xxl-1 col-xxl-4 col-xl-5 col-lg-6 col-md-10"
      data-aos="fade-up"
      data-aos-delay={500}
      data-aos-duration={1000}
    >
      <div className="content-box-2-l1">
        <div>
          <Heading ftColor={dark ? 'primary' : 'default'}>
            O que posso descobrir nessa jornada ?
          </Heading>
          <Underline
            level="h4"
            ftColor={dark ? 'quartenary' : 'secondary'}
            underline={true}
          >
            <span>{children}</span>
          </Underline>
        </div>
        <OrderedItems itemsTextList={itemsText} colorDefault={dark} />
      </div>
    </div>
  )
}
