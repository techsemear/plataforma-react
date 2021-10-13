import React from 'react'

const StepProgressBar = ({steps = 1, currentStep = 1}) => {
  const stepsList = Array.from(Array(steps), (_, x) => x)
  const stepBarWidth = 100 / (steps - 1)
  const progressBarWidth = (stepBarWidth * currentStep - stepBarWidth).toFixed(
    0,
  )

  return (
    <div className="step-progress-bar">
      <div
        className="progress-bar-completed"
        style={{width: `${progressBarWidth}%`}}
      />

      {stepsList.map((_, index) => {
        const step = index + 1
        const isCurrent = step === currentStep
        const accomplished = step < currentStep

        return (
          <div
            className="progress-bar-step"
            data-accomplished={accomplished}
            data-current={isCurrent}
            key={`step-${step}`}
          >
            {step}
          </div>
        )
      })}
    </div>
  )
}

export default StepProgressBar
