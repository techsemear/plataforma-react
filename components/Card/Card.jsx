import React from 'react'

import styles from './Card.module.css'

const {
    bgPrimary,
    bgSecond,
    bgDefault,
    bgMinimal,
    bgTransparent,
    widthDefault,
    widthSmall,
    widthCompact,
    widthLarge,
    heightDefault,
    heightSmall,
    heightCompact,
    heightLarge,
    shapeDefault,
    shapeRectangular,
    shapeSquare,
    borderDefault,
    borderGrey,
    borderBlue,
    borderWhite,
  } = styles
  
  const KIND = {
    primary: bgPrimary,
    secondary: bgSecond,
    tertiary: bgDefault,
    minimal: bgMinimal,
    none: bgTransparent,
    other: 'bgOther',
  }
  
  const WIDTH = {
    default: widthDefault,
    small: widthSmall,
    compact: widthCompact,
    large: widthLarge,
    other: 'widthOther',
  }
  
  const HEIGHT = {
    default: heightDefault,
    small: heightSmall,
    compact: heightCompact,
    large: heightLarge,
    other: 'heightOther',
  }

  const SHAPE = {
    default: shapeDefault,
    rectangular: shapeRectangular,
    square: shapeSquare,
  }

  const BORDER = {
    default: borderDefault,
    grey: borderGrey,
    blue: borderBlue,
    white: borderWhite,
  }

  export default function Card (props) {
    const bgCard = KIND[props.bgColor] ? KIND[props.bgColor] : KIND['primary'];
    const widthCard = WIDTH[props.width] ? WIDTH[props.width] : WIDTH['small'];
    const heightCard = HEIGHT[props.height] ? HEIGHT[props.height] : HEIGHT['compact'];
    const borderCard = BORDER[props.border] ? BORDER[props.border] : BORDER['default'];
    const shapeCard = SHAPE[props.shape] ? SHAPE[props.shape] : SHAPE['default'];
    const classCard = props.class ? props.class : ''
  

  return (
    <div className={`${styles.div} ${bgCard} ${widthCard} ${heightCard} ${shapeCard} ${classCard} ${borderCard}`}>   
        {props.children}
    </div>
)
}