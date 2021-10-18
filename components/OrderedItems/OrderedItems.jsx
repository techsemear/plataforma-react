import styles from './OrderedItems.module.css'

const boxColorOptions = {
    default: styles.numberDefault,
    primary: styles.numberPrimary,
    secondary: styles.numberSecondary,
}

const textColorOptions = {
  default: styles.textColorDefault,
  primary: styles.textColorPrimary,
  secondary: styles.textColorSecondary,
}

export default function OrderedItems({
  itemsTextList = [],
  boxColor = 'default',
  textColor = 'default',
}) {
  return (
    <ul className={`list-unstyled ${styles.numberContentBox}`}>
      {itemsTextList.map((item, index) => (
        <li key={`item-${index}`} className="d-flex align-items-start">
          <div
            className={`${styles.number} ${boxColorOptions[boxColor]}`}
          >
            <span>{item.index ? item.index : index + 1}</span>
          </div>
          <div
            className={`${styles.contentText} ${textColorOptions[textColor]}`}
          >
            <p> {item.text} </p>
          </div>
        </li>
      ))}
    </ul>
  )
}
