import Image from 'next/image'

const wavePosition = {
  up: 'M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z',
  down: 'M0.00,49.98 C145.31,125.81 392.49,104.11 500.00,49.98 L500.00,150.00 L0.00,150.00 Z',
  center:'M-1.41,98.19 C148.69,64.63 321.95,35.03 503.10,111.02 L500.84,-0.48 L-0.84,-1.47 Z',
}


export default function Wave({
  height = 150,
  className,
  color = '#11115d',
  bgColor = '#fff',
  direction = 'down',
}) {
  return (
    <div className={className} style={{height: height, overflow: 'hidden', backgroundColor: bgColor}}>
      <svg
        viewBox={`0 0 500 ${height}`}
        preserveAspectRatio="none"
        style={{height: '100%', width: '100%'}}
      >
        <path
          d={wavePosition[direction]}
          style={{stroke: 'none', fill: color, backgroundColor:color }}
        />
      </svg>
    </div>
  )
}
