import {Fragment} from 'react'

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
        className={`content-area-2-l1 ${backgroundClasses[bgColor]}`}
      >
        <div className={!fullWidth ? 'container' : ''}>{children}</div>
      </section>

      {wave && waveDirection === 'down' && (
        <Wave direction="down" className={backgroundClasses[bgColor]} />
      )}
    </Fragment>
  )
}
