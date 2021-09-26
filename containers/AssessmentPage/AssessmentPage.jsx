import React from "react"
import Image from "next/image";
import "../../components/StepProgressBar";
import "react-step-progress-bar/styles.css";

import AssessmentForm from "../../components/AssessmentForm/AssessmentForm";



export default function Assessment(){
  return (
    <main>
        <AssessmentForm/>
    </main>   
  )
}

