import React, {Fragment, useState} from 'react'
import {
  Button,
  message,
  Col,
  Row,
  Checkbox,
  Input,
  Rate,
  Radio,
  Space,
} from 'antd'
import {
  EditOutlined,
  FrownOutlined,
  MehOutlined,
  SmileOutlined,
} from '@ant-design/icons'
import 'antd/dist/antd.css'

const CheckboxGroup = Checkbox.Group
const {TextArea} = Input


export default function Feedback({}) {
  const [current, setCurrent] = useState(0)
      const [checked, setBoxChecked] = useState([])
      const [editClicked, setEditClicked] = useState(false)
      const options = ['Sim', 'Não']

  const next = () => {
    setCurrent(current + 1)
  }

  const prev = () => {
    setCurrent(current - 1)
  }

  const onChange = (value) => {}

  const IntroductionStep = ({mentorName = 'Nome Mentor'}) => {
    const options = ['Sim', 'Não']

    const onChange = (value) => {
      setBoxChecked(value)
    }
    return (
      <Fragment>
        <h1 align="center" className="my-5">
          Lista de Presença
        </h1>
        <h6 align="center" className="my-5">
          Esta página é a garantia da qualidade da sua sessão de mentoria!
        </h6>
        <h3 align="center" className="my-5">
          Sua sessão de mentoria com {mentorName} aconteceu?
        </h3>
        <Row align="middle" justify="center">
          <Col>
            <CheckboxGroup
              style={{transform: 'scale(2)'}}
              options={options}
              onChange={onChange}
              value={checked.toString()}
              disabled={checked.length > 0 ? true : false}
            />
          </Col>
          <Col offset={2}>
            <Button
              onClick={() => {
                setEditClicked(true)
                setBoxChecked([])
              }}
              disabled={checked.length > 0 ? false : true}
            >
              Editar <EditOutlined />
            </Button>
          </Col>
        </Row>
      </Fragment>
    )
  }

  const MentoringHappened = () => {
    const customIcons = {
      1: <FrownOutlined />,
      2: <FrownOutlined />,
      3: <MehOutlined />,
      4: <SmileOutlined />,
      5: <SmileOutlined />,
    }
    return (
      <Fragment>
        <Col span={20} offset={2}>
          <h2> Feedback </h2>
          <h5> Pergunta 1 </h5>
          <TextArea rows={4} />
          <h5 style={{margin: '20px 0'}}> Como foi a mentoria para você? </h5>
          <Row justify="center">
            <Rate
              align="center"
              style={{transform: 'scale(2)'}}
              defaultValue={3}
              character={({index}) => customIcons[index + 1]}
            />
          </Row>
        </Col>
      </Fragment>
    )
  }

  const MentoringDidntHappened = () => {
    const [value, setValue] = useState(0)

    const onChange = (event) => {
      setValue(event.target.value)
    }

    return (
      <Fragment>
        <Col span={20} offset={2}>
          <h1 style={{marginBottom: '20px'}}>
            Sentimos muito <FrownOutlined />
          </h1>
          <h5 style={{marginTop: '40px'}}>
            {' '}
            Porque a mentoria não aconteceu?{' '}
          </h5>
          <Radio.Group value={value} onChange={onChange}>
            <Space direction="vertical">
              <Radio value={1}>
                Não pude realizar a mentoria devido a falta de disponibilidade
              </Radio>
              <Radio value={2}>
                Tive problemas para me comunicar com o mentor
              </Radio>
              <Radio value={3}>
                {' '}
                Marquei o encontro e o mentor não apareceu
              </Radio>

              <Radio value={4}>
                {' '}
                Entrei em contato e o mentor não respondeu
              </Radio>
              <Radio value={5}>
                Outro
                {value === 5 ? (
                  <Input style={{width: 300, marginLeft: 10}} />
                ) : null}
              </Radio>
            </Space>
          </Radio.Group>
          <h5 style={{marginTop: '40px'}}>
            Deseja contar um pouco mais sobre a sua experiência?
          </h5>
          <TextArea rows={4} />
        </Col>
      </Fragment>
    )
  }

  const steps = [
    {
      title: 'Bem vindo',
      content: <IntroductionStep />,
    },
    {
      title: 'Infos Complementares',
      content: <MentoringHappened />,
    },
    {
      title: 'Infos Complementares',
      content: <MentoringDidntHappened />,
    },
  ]

  console.log(options[0] === checked.toString())

  return (
    <Fragment>
      <div className="steps-content">
        {(checked.toString() === options[0]) | (current === 0)
          ? steps[current].content
          : steps[current + 1].content}
      </div>
      <div className="steps-action">
        {current < steps.length - 2 && (
          <Button
            style={{float: 'right', marginTop: '50px', marginRight: '200px'}}
            type="primary"
            onClick={() => next()}
            onChange={onChange}
            disabled={checked.length > 0 ? false : true}
          >
            Próximo
          </Button>
        )}
        {current === steps.length - 2 && (
          <Button
            style={{float: 'right', marginTop: '50px', marginRight: '200px'}}
            type="primary"
            onClick={() => message.success('Processing complete!')}
          >
            Enviar
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{float: 'right', marginTop: '50px', marginRight: '8px'}}
            onClick={() => prev()}
          >
            Anterior
          </Button>
        )}
      </div>
    </Fragment>
  )
}
