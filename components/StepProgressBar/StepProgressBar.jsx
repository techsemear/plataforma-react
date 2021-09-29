import React from "react";
import "../../node_modules/react-step-progress-bar";
import { ProgressBar, Step } from "../../node_modules/react-step-progress-bar";

const StepProgressBar = props => {
  var stepPercentage = 25;

  if (props.currentStep === 1) {
    stepPercentage = 25;
  } else if (props.currentStep === 2) {
    stepPercentage = 50;
  } else if (props.currentStep === 3) {
    stepPercentage = 75;
  } else if (props.currentStep === 4) {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }

  return (
    <ProgressBar percent={stepPercentage}>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {index + 1}
          </div>
        )}
      </Step>
    </ProgressBar>
  );
};

export default StepProgressBar;
