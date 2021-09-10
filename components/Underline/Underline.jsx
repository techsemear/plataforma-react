import {Heading} from '../../components/Heading'

const colorClasses = {
  default: 'cl-default',
  primary: 'cl-primary',
  secondary: 'cl-secondary',
}

export default function Underline({
  children,
  level = 'h2',
  horizontalPosition = 'start',
  color = 'default',
}) {
  return (
    <div className={colorClasses[color]}>
      <Heading level={level} horizontalPosition={horizontalPosition}>
        <span>{children}</span>
      </Heading>
    </div>
  )
}
