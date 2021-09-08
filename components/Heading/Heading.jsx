const alignment = {
  start: 'text-start',
  end: 'text-end',
  center: 'text-center',
}

export default function Heading({
  children,
  level = 'h2',
  horizontalPosition = 'start',
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
  }

  return <div className={alignment[horizontalPosition]}>{output}</div>
}
