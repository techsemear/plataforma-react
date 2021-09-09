const alignment = {
  start: 'text-start',
  end: 'text-end',
  center: 'text-center',
}

const colorClasses = {
  default: 'ft-default',
  primary: 'ft-primary',
  secondary: 'ft-secondary',
  tertiary: 'ft-tertiary ',
}

export default function Heading({
  children,
  level = 'h2',
  horizontalPosition = 'start',
  ftColor = 'default',
}) {
  let output = ''

  if (level == 'h1') {
    output = <h1>{children}</h1>
  } else if (level == 'h2') {
    output = <h2>{children}</h2>
  } else if (level == 'h3') {
    output = <h3>{children}</h3>
  } else if (level == 'h4') {
    output = <h4>{children}</h4>
  } else if (level == 'h5') {
    output = <h5>{children}</h5>
  } else if (level == 'h6') {
    output = <h6>{children}</h6>
  } else if (level == 'p') {
    output = <p>{children}</p>
  }

  return (
    <div
      className={[alignment[horizontalPosition], colorClasses[ftColor]].join(
        ' ',
      )}
    >
      {output}
    </div>
  )
}
