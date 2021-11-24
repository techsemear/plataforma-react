import React, {Fragment, useState} from 'react'
import {Steps, Button, message, Col, Row} from 'antd'
import 'antd/dist/antd.css'

import StepWelcome from './StepWelcome'
import StepChannel from './StepChannel'
import StepProfile from './StepProfile'
import StepInfos from './StepInfos'

const {Step} = Steps

export default function AssessmentPageMentor() {
  const [current, setCurrent] = useState(0)
  const [stepInfoCompleted, setStepInfoCompleted] = useState(false)

  const next = () => {
    setCurrent(current + 1)
  }
  const prev = () => {
    setCurrent(current - 1)
  }

  const onChangeStepInfo = (value) => {
    setStepInfoCompleted(value)
  }

  const disableNext = () => {
    if (stepInfoCompleted || current === 0) return false
    else return true
  }

  const steps = [
    {
      title: 'Bem vindo',
      content: <StepWelcome />,
    },
    {
      title: 'Infos Complementares',
      content: <StepInfos onChange={onChangeStepInfo} />,
    },
    {
      title: 'Teste de Canal',
      content: <StepChannel />,
    },
    {
      title: 'Perfil',
      content: <StepProfile />,
    },
  ]

  return (
    <Fragment>
      <Row align="middle" justify="center">
        <Steps
          current={current}
          size="small"
          direction="horizontal"
          style={{width: '60%'}}
        >
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <Col offset={1} xs={{span: 20, offset: 2}} sm={{span: 16, offset: 1}}>
          <div className="steps-content">{steps[current].content}</div>
        </Col>
      </Row>
      <div
        className="steps-action"
        align="right"
        style={{marginRight: '105px'}}
      >
        {current > 0 && (
          <Button style={{margin: '0 8px'}} onClick={() => prev()}>
            Anterior
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Próximo
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success('Processo Completo')}
          >
            Enviar
          </Button>
        )}
      </div>
    </Fragment>
  )
}
