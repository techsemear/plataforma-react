import React, {Fragment, useState} from 'react'
import {Col, Row, Button, Popover, Modal} from 'antd'
import Image from 'next/image'
import {InfoCircleOutlined} from '@ant-design/icons'

const StepAssessment = (props) => {
  return (
    <Fragment>
      <Row gutter={[32, 16]} justify="center">
        <Col
          span={8}
          offset={1}
          xs={{span: 24, offset: 0}}
          sm={{span: 22, offset: 0}}
          md={{span: 20, offset: 1}}
          lg={{span: 20, offset: 1}}
          xl={{span: 12, offset: 1}}
        >
          <h1>
            {props.content.title}
            <Popover
              className="mx-3"
              content={props.content.neutral}
              title="Nível Neutro"
              placement="right"
              overlayStyle={{
                width: '35vw',
              }}
            >
              <InfoCircleOutlined />
            </Popover>
          </h1>
          <h5>{props.content.subtitle}</h5>
          <div className="mt-5">
            <NumberInput />
          </div>
        </Col>
        <Col
          span={6}
          offset={1}
          xs={{span: 18, offset: 1}}
          sm={{span: 16, offset: 1}}
          md={{span: 12, offset: 1}}
          lg={{span: 6, offset: 1}}
          xl={{span: 8, offset: 1}}
        >
          <Image
            src={props.content.gif}
            alt="gif"
            width={400}
            height={300}
            layout="responsive"
          />
        </Col>
      </Row>
    </Fragment>
  )
}

export default StepAssessment

const assessmentStatus = {
  1: {
    label: 'Nada Satisfeito',
    class: 'rangeStatus--danger',
  },
  2: {
    label: 'Nada Satisfeito',
    class: 'rangeStatus--danger',
  },
  3: {
    label: 'Pouco Satisfeito',
    class: 'rangeStatus--warning',
  },
  4: {
    label: 'Pouco Satisfeito',
    class: 'rangeStatus--warning',
  },
  5: {
    label: 'Minimamente Satisfeito',
    class: 'rangeStatus--attention',
  },
  6: {
    label: 'Minimamente Satisfeito',
    class: 'rangeStatus--attention',
  },
  7: {
    label: 'Satisfeito',
    class: 'rangeStatus--neutral',
  },
  8: {
    label: 'Muito Satisfeito',
    class: 'rangeStatus--success',
  },
  9: {
    label: 'Muito Satisfeito',
    class: 'rangeStatus--success',
  },
  10: {
    label: 'Muito Satisfeito',
    class: 'rangeStatus--success',
  },
}

function NumberInput() {
  const [inputAssessment, setInputAssessment] = useState(7)

  const handleChange = (event) => {
    const value = event.currentTarget.value
    setInputAssessment(value)
  }

  return (
    <Row align="middle" justify="space-around">
      <Col
        span={8}
        offset={1}
        xs={{span: 18, offset: 0}}
        sm={{span: 16, offset: 0}}
        md={{span: 22, offset: 0}}
        lg={{span: 22, offset: 1}}
        xl={{span: 22, offset: 1}}
      >
        {Object.keys(assessmentStatus).map((item) =>
          parseInt(item) <= inputAssessment ? (
            <Button
              key={`btn-${parseInt(item) + 1}`}
              onClick={handleChange}
              value={parseInt(item)}
              shape="circle"
              type="primary"
              className="mx-1 my-1"
            >
              {item}
            </Button>
          ) : (
            <Button
              key={`btn-${parseInt(item) + 1}`}
              onClick={handleChange}
              shape="circle"
              value={parseInt(item)}
              className="mx-1 my-1"
            >
              {item}
            </Button>
          ),
        )}
        <input type="hidden" value={inputAssessment} />
      </Col>
    </Row>
  )
}
