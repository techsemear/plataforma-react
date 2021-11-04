import React, {Fragment, useState} from 'react'
import {Col, Row, Button, Popover, Rate} from 'antd'
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
          <h2>
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
          </h2>
          <h5>{props.content.subtitle}</h5>
          <div className="mt-5">
            <NumberRate />
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

function ButtonRate(props) {
  return props.index <= props.inputAssessment ? (
    <Button
      key={`btn-${props.index + 1}`}
      shape="circle"
      onClick={props.handleChange}
      value={props.index}
      type="primary"
    >
      {props.index}
    </Button>
  ) : (
    <Button
      key={`btn-${props.index + 1}`}
      shape="circle"
      onClick={props.handleChange}
      value={props.index}
    >
      {props.index}
    </Button>
  )
}

function NumberRate() {
  const [inputAssessment, setInputAssessment] = useState(7)

  const handleChange = (event) => {
    const value = event.currentTarget.value
    setInputAssessment(value)
  }
  return (
    <Rate
      defaultValue={7}
      count={10}
      character={({index}) => (
        <ButtonRate
          index={index + 1}
          inputAssessment={inputAssessment}
          handleChange={handleChange}
        />
      )}
    />
  )
}
