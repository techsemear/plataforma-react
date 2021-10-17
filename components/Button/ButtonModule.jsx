import React from 'react'
import Link from 'next/link'

import styles from './ButtonModule.module.css'

const {
  bgPrimary,
  bgSecond,
  bgDefault,
  bgMinimal,
  sizeSmall,
  sizeDefault,
  sizeCompact,
  sizeLarge,
  shapeDefault,
  shapeRectangular,
  shapeCircle,
  shapeSquare,
} = styles

const KIND = {
  primary: bgPrimary,
  secondary: bgSecond,
  tertiary: bgDefault,
  minimal: bgMinimal,
}

const SIZE = {
  small: sizeSmall,
  default: sizeDefault,
  compact: sizeCompact,
  large: sizeLarge,
}

const SHAPE = {
  default: shapeDefault,
  rectangular: shapeRectangular,
  circle: shapeCircle,
  square: shapeSquare,
}

export default function ButtonModule(props) {
  const kindButton = KIND[props.kind] ? KIND[props.kind] : KIND['primary']
  const sizeButton = SIZE[props.size] ? SIZE[props.size] : SIZE['default']
  const shapeButton = SHAPE[props.shape] ? SHAPE[props.shape] : SHAPE['default']

  return (
    <Link href={props.href ? props.href : '/'}>
      <button
        disabled={props.disabled}
        sele
        className={`${styles.btn} ${kindButton} ${sizeButton} ${shapeButton} ${
          props.hoverScale && styles.btnScale
        }`}
      >
        {props.children}
      </button>
    </Link>
  )
}
