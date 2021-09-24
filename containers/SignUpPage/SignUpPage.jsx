import React from "react"
import Image from "next/image";
import "../../components/StepProgressBar";
import "react-step-progress-bar/styles.css";


import StepProgressBar from '../../components/StepProgressBar/StepProgressBar'
import MultiStepForm from "../../components/MultiStepForm/MultiStepForm";



export default function SignUpPage(){
  return (
    <main>
        <MultiStepForm/>
    </main>   
  )
}

