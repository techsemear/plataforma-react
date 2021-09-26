import React from "react";

import "../../node_modules/react-step-progress-bar"
import { ProgressBar, Step } from "../../node_modules/react-step-progress-bar"

const StepProgressBar = props => {
  const stepPercentage =
    Math.ceil(100 / (props.numberOfSteps - 1)) * (props.currentStep - 1);
  const listOfSteps = Array.from(Array(props.numberOfSteps).keys());

  return (
    <ProgressBar percent={stepPercentage}>
      {listOfSteps.map((item) => (
        <Step key={item + 1}>
          {({accomplished, index}) => (
            <div
              className={`indexedStep ${accomplished ? 'accomplished' : null}`}
            >
              {index + 1}
            </div>
          )}
        </Step>
      ))}
    </ProgressBar>
  )
};

export default StepProgressBar;
