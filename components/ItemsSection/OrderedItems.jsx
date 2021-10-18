import styles from './ItemsSection.module.css'

const kindColorOptions = {
  default: {colorBox: styles.numberDefault, colorText: styles.textColorDefault},
  primary: {colorBox: styles.numberPrimary, colorText: styles.textColorPrimary},
}
export default function OrderedItems({
  itemsTextList = [],
  kindColor = 'default',
}) {
  return (
    <ul className={`list-unstyled ${styles.numberContentBox}`}>
      {itemsTextList.map((item, index) => (
        <li key={`item-${index}`} className="d-flex align-items-start">
          <div
            className={`${styles.number} ${kindColorOptions[kindColor].colorBox}`}
          >
            <span>{item.index ? item.index : index + 1}</span>
          </div>

          <div
            className={
                `content ${kindColorOptions[kindColor].colorText}`
            }
          >
            <p> {item.text} </p>
          </div>
        </li>
      ))}
    </ul>
  )
}
