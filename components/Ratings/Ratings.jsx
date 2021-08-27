export default function Ratings({description}) {
  return (
    <div className="star-ratings-l12 d-xs-flex align-items-baseline">
      <div className="rating-items">
        <i className="fas fa-star " />
        <i className="fas fa-star " />
        <i className="fas fa-star " />
        <i className="fas fa-star " />
        <i className="fas fa-star star-dif-color" />
      </div>
      {description && <p>{description}</p>}
    </div>
  )
}
