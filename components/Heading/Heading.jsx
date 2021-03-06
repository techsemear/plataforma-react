import React from "react"

import styles from './Heading.module.css'

const {
    textStart,
    textEnd,
    textCenter,
    ftDefault,
    ftPrimary,
    ftSecondary,
    ftTertiary,
    ftQuartenary,
    ftQuinary,
    styleDefault,
    ftBold,
    ftItalic,
    underlineBlack,
    underlineGrey,
    underlineOrange, 
    underlineBlue, 
    underlineGreen,
  } = styles
  

const alignment = {
  start: textStart,
  end: textEnd,
  center: textCenter,
}

const colorClasses = {
  default: ftDefault,
  primary: ftPrimary,
  secondary: ftSecondary,
  tertiary: ftTertiary,
  quartenary: ftQuartenary,
  quinary: ftQuinary,
}

const textStyle = {
  default: styleDefault,
  bold: ftBold,
  italic: ftItalic,
}

const textUnderline = {
  default: 'noneUnderline',
  black: underlineBlack,
  grey: underlineGrey,
  orange: underlineOrange, 
  blue: underlineBlue, 
  green: underlineGreen, 
}

export default function Heading({
  children,
  level = 'h2',
  horizontalPosition = 'start',
  ftStyle = 'default', 
  ftColor = 'default',
  underline = 'default',
}) {
  let output = ''
  let childrenCustom = children

  if (underline !== 'default') {
    childrenCustom= <span>{children}</span>
  }

  if (level == 'h1') {
    output = <h1>{childrenCustom}</h1>
  } else if (level == 'h2') {
    output = <h2>{childrenCustom}</h2>
  } else if (level == 'h3') {
    output = <h3>{childrenCustom}</h3>
  } else if (level == 'h4') {
    output = <h4>{childrenCustom}</h4>
  } else if (level == 'h5') {
    output = <h5>{childrenCustom}</h5>
  } else if (level == 'h6') {
    output = <h6>{childrenCustom}</h6>
  }

  return (
    <div
      className={`${alignment[horizontalPosition]} ${textStyle[ftStyle]} ${textUnderline[underline]} ${colorClasses[ftColor]}`}
    >
      {output}
    </div>
  )
}
