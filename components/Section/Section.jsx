import {Fragment} from 'react'

import styles from './Section.module.css'

import {Wave} from '../Wave'

const backgroundClasses = {
  default: 'bg-default',
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  dark: 'bg-dark',
}

export default function Section({
  bgColor = 'default',
  children,
  wave = false,
  waveDirection = 'down',
  id,
  fullWidth = false,
}) {
  return (
    <Fragment>
      {wave && waveDirection === 'up' && (
        <Wave direction="up" className={backgroundClasses[bgColor]} />
      )}

      <section
        id={id}
        className={`${styles.sectionContent} ${
          backgroundClasses[bgColor]
        }`}
      >
        <div className={!fullWidth ? 'container' : ''}>{children}</div>
      </section>

      {wave && waveDirection === 'down' && (
        <Wave direction="down" className={backgroundClasses[bgColor]} />
      )}
    </Fragment>
  )
}
