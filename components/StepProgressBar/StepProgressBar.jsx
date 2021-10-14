import React from 'react'

import styles from './StepProgressBar.module.css'

const {stepProgressBar, progressBarCompleted, progressBarStep} = styles

const StepProgressBar = ({steps = 1, currentStep = 1}) => {
  const stepsList = Array.from(Array(steps), (_, x) => x)
  const stepBarWidth = 100 / (steps - 1)
  const progressBarWidth = (stepBarWidth * currentStep - stepBarWidth).toFixed(
    0,
  )

  return (
    <div className={stepProgressBar}>
      <div
        className={progressBarCompleted}
        style={{width: `${progressBarWidth}%`}}
      />

      {stepsList.map((_, index) => {
        const step = index + 1
        const isCurrent = step === currentStep
        const accomplished = step < currentStep

        return (
          <div
            className={progressBarStep}
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
