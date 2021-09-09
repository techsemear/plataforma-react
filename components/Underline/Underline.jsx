import {Heading} from '../../components/Heading'

export default function Underline({children, level = 'h2'}) {
  return (
    <div className="content-text-h4">
      <Heading level={level}>
        <span>{children}</span>
      </Heading>
    </div>
  )
}
