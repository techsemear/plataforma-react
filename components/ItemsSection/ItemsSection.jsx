export default function ItemsSection({children, itemsText}) {
  return (
    <div
    className="offset-xxl-1 col-xxl-4 col-xl-5 col-lg-6 col-md-10"
    data-aos="fade-up"
    data-aos-delay={500}
    data-aos-duration={1000}
  >
    <div className="content-box-2-l1 section__heading">
      <div>
        <h2 className="content-text-h2-a4">
          O que posso descobrir nessa jornada ?
        </h2>
        <h4 className="content-text-h4">
          <span className="features-area-l1-span">
            {children}
          </span>
        </h4>
      </div>
      <ul className="list-unstyled number-content-box-l1">
        {itemsText.map((item) => (
          <li className="d-flex align-items-start">
            <div className="number number--2">
              <span>{item.index}</span>
            </div>
            <div className="content">
              <p>
                {item.text} {' '}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
  )
}
