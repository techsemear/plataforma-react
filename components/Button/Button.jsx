import React from 'react'
import Link from 'next/link'

import styles from './Button.module.css'

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
  other: 'bgOther',
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

export default function Button(props) {
  const bgButton = KIND[props.bgColor] ? KIND[props.bgColor] : KIND['primary'];
  const sizeButton = SIZE[props.size] ? SIZE[props.size] : SIZE['default'];
  const shapeButton = SHAPE[props.shape] ? SHAPE[props.shape] : SHAPE['default'];
  const classButton = props.class ? props.class : ''
  const scaleButton = props.hoverScale ? styles.btnScale : '';

  return props.href ? (
    <Link href={props.href}>
      <button
        className={`${styles.btn} ${bgButton} ${sizeButton} ${shapeButton} ${scaleButton} ${classButton}`}
        onClick={props.onClick}
        disabled={props.disabled}
        type={props.type}
      >
        {props.children}
      </button>
    </Link>
  ) : (
    <React.Fragment>
      <button
        className={`${styles.btn} ${bgButton} ${sizeButton} ${shapeButton} ${scaleButton} ${classButton}`}
        onClick={props.onClick}
        disabled={props.disabled}
        type={props.type}
      >
        {props.children}
      </button>
    </React.Fragment>
  ) 
}

