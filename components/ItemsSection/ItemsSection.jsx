import {OrderedItems} from '../OrderedItems'

export default function ItemsSection({children, itemsText, dark = false}) {
  return (
    <div
      className="offset-xxl-1 col-xxl-4 col-xl-5 col-lg-6 col-md-10"
      data-aos="fade-up"
      data-aos-delay={500}
      data-aos-duration={1000}
    >
      <div className="content-box-2-l1 section__heading">
        <div>
          <div className={dark ? 'text-color-white' : 'text-color-dark'}>
            <h2 className="content-text-h2-a4">
              O que posso descobrir nessa jornada ?
            </h2>

            <h4 className="content-text-h4">
              <span>{children}</span>
            </h4>
          </div>
        </div>

        <OrderedItems itemsTextList={itemsText} dark={dark} />
      </div>
    </div>
  )
}
