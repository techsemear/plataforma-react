export default function OrderedItems({
  itemsTextList = [],
  colorDefault = false,
}) {
  return (
    <ul className="list-unstyled number-content-box-l1">
      {itemsTextList.map((item, index) => (
        <li key={`item-${index}`} className="d-flex align-items-start">
          <div
            className={colorDefault ? 'number number--3' : 'number number--2'}
          >
            <span>{item.index ? item.index : index + 1}</span>
          </div>

          <div
            className={
              colorDefault
                ? 'content text-color-white'
                : 'content text-color-dark'
            }
          >
            <p>{item.text} </p>
          </div>
        </li>
      ))}
    </ul>
  )
}
