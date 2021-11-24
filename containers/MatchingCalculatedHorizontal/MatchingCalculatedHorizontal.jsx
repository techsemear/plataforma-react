import React, {Fragment, useState} from 'react'
import Image from 'next/image'
import {
  Button,
  message,
  Col,
  Row,
  Card,
  Modal,
  Popover,
  Breadcrumb,
  Steps,
} from 'antd'
import {DoubleRightOutlined, InfoCircleOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css'

import imageProfile1 from '../../assets/image/landing-1/student1.png'
import imageProfile2 from '../../assets/image/landing-1/student2.png'
import imageProfile3 from '../../assets/image/landing-1/student4.jpg'
import linkedinIcon from '../../assets/image/landing-1/linkedin-2.png'

const {Meta} = Card
const {confirm} = Modal
const {Step} = Steps

const daysLimit = 100

const personas = [
  {
    id: '1',
    name: ' Mariana Ferraz',
    age: '22',
    pronoun: 'Ela/Dela',
    description:
      'Na primeira mentoria eu não sabia quem eu era, definir meus sonhos ou para onde eu estava indo. Ter a oportunidade de ser mentorada no primeiro semestre da minha (tão sonhada) faculdade fez total diferença. Hoje, sinto que me conheço mais, sei como e o que estou fazendo para alcançar meus sonhos.',
    college: 'UNESP - Universidade Estadual Paulista',
    course: 'Engenharia de Produção',
    imageProfile: imageProfile2,
    linkedin: 'https://www.linkedin.com/in/mariana-ferraz-991181215/',
    email: 'example@gmail.com',
    whatsapp: '(12) 345678910',
    invitedDate: Date.parse('2021-11-22T14:48:00'),
        isConfirmed: false,
    isRejected: false,
    isExperired: false,
    acceptedDate: Date.parse('2001-01-01T00:00:00'),
    rejectedDate: Date.parse('2001-01-01T00:00:00'),
  },
  {
    id: '2',
    name: ' Jéssica Gonsalves',
    age: '22',
    pronoun: 'Ela/Dela',
    description:
      'Ser mentoranda me permitiu tomar consciência do meu próprio protagonismo e em como consigo pontencializá-lo na minha jornada. Mais do que isso, me permitiu construir em conjunto com a minha mentora, um processo sistêmico de reflexão, concepção e tomada de decisões.',
    college: 'Universidade de São Paulo',
    course: 'Engenharia Elétrica',
    imageProfile: imageProfile3,
    linkedin: 'https://www.linkedin.com/in/gonsalvesjessica/',
    email: 'example@gmail.com',
    whatsapp: '(12) 345678910',
    invitedDate: Date.parse('2021-11-23T14:48:00'),
        isConfirmed: false,
    isRejected: false,
    isExperired: false,
    acceptedDate: Date.parse('2001-01-01T00:00:00'),
    rejectedDate: Date.parse('2001-01-01T00:00:00'),
  },
  {
    id: '3',
    name: ' Pedro Masetti',
    age: '21',
    pronoun: 'Ele/Dele',
    description:
      'A oportunidade de poder me conectar através das mentorias com pessoas já ambientadas no mercado de trabalho vêm trazendo diversos benefícios, e principalmente, auxiliando no meu autoconhecimento',
    linkedin: 'https://www.linkedin.com/in/pedro-masetti-3535321a9/',
    college: 'UNESP - Universidade Estadual Paulista',
    course: 'Engenharia Ambiental',
    imageProfile: imageProfile1,
    email: 'example@gmail.com',
    whatsapp: '(12) 345678910',
    invitedDate: Date.parse('2021-11-22T14:48:00'),
        isConfirmed: false,
    isRejected: false,
    isExperired: false,
    acceptedDate: Date.parse('2001-01-01T00:00:00'),
    rejectedDate: Date.parse('2001-01-01T00:00:00'),
  },
]

export default function MatchingCalculatedHorizontal({}) {
  const personaList = personas.map((item) => ({
    ...item,
    isExperired: setExpiredDate(item.invitedDate),
  }))

  const [getDecisionList, setDecisionList] = useState(
    personaList.filter(function (item) {
      return !item.isExperired
    }),
  )

  const studentConfirmed = (id) => {
    setDecisionList(
      getDecisionList.map((item) => {
        if (item.id === id) {
          item.isConfirmed = true
          item.acceptedDate = new Date()
        }
        return item
      }),
    )
  }

  const studentRejected = (id) => {
    setDecisionList(
      getDecisionList.map((item) => {
        if (item.id === id) {
          item.isRejected = true
          item.rejectedDate = new Date()
        }
        return item
      }),
    )
  }

  const [screen, setScreen] = useState(1)

  const onClickAll = () => {
    setScreen(1)
  }

  const onClickAccepted = () => {
    setScreen(2)
  }

  return (
    <Fragment>
      <Breadcrumb style={{margin: '20px 0 0px 50px'}}>
        <Breadcrumb.Item onClick={onClickAll}>
          <a>Convites</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item onClick={onClickAccepted}>
          <a>Convites Aceitos</a>
        </Breadcrumb.Item>
      </Breadcrumb>

      {screen == 1 ? (
        <div>
          <h2 align="center">
            Acompanhe os seus melhores matches!
            <Popover
              className="mx-3"
              content="Conheça-os e confirme seu interesse em realizar a mentoria"
              overlayStyle={{
                width: '25vw',
              }}
            >
              <InfoCircleOutlined />
            </Popover>
          </h2>
          {getDecisionList
            .filter(function (item) {
              return !item.isConfirmed & !item.isRejected
            })
            .map((item, index) => (
              <CardProfile
                persona={item}
                key={`card-${index}`}
                onClickConfirm={studentConfirmed}
                onClickReject={studentRejected}
              />
            ))}
        </div>
      ) : (
        <div>
          <h2 align="center">
            Acompanhe suas mentorias aceitas!
            <Popover
              className="mx-3"
              content="Entre em contato com os jovens que você aceitou!"
              overlayStyle={{
                width: '25vw',
              }}
            >
              <InfoCircleOutlined />
            </Popover>
          </h2>
          {getDecisionList
            .filter(function (item) {
              return item.isConfirmed
            })
            .map((item, index) => (
              <CardContact
                persona={item}
                key={`card-${index}`}
                onClickConfirm={studentConfirmed}
                onClickReject={studentRejected}
              />
            ))}
        </div>
      )}
    </Fragment>
  )
}

function CardContact(props) {
  const invitedDate = new Date(props.persona.acceptedDate)
  const invitedDateFormated = `${invitedDate.getDate()}-${invitedDate.getMonth()}-${invitedDate.getFullYear()}`

  return (
    <Row>
      <Col span={4} style={{margin: '10px 0 10px 50px'}}>
        <Steps progressDot current={2} direction="vertical">
          <Step
            title={`Convite foi aceito em ${invitedDateFormated}`}
            style={{margin: '20px 0px 80px 0px'}}
          />
        </Steps>
      </Col>
      <Col span={18} justify="center">
        <Card hoverable type="inner" bordered={true}>
          <Row>
            <Col style={{margin: '10px 20px 10px 10px'}} span={4}>
              <Image
                src={props.persona.imageProfile}
                alt="mentor"
                width={200}
                height={200}
              />
            </Col>
            <Col span={18}>
              <div style={{fontSize: '20px', margin: '10px 0'}}>
                <a
                  href={props.persona.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={linkedinIcon}
                    alt="logo"
                    objectFit="contain"
                    width="20"
                    height="20"
                  />
                </a>
                {`${props.persona.name} (${props.persona.pronoun})`}
              </div>
              <Card bordered={false}>
                <Card.Grid style={{width: '100%'}} hoverable={false}>
                  <h6> Informações de Contato</h6>
                  <a> Linkedin: </a>
                  <a href={props.persona.linkedin} target="_blank">
                    {props.persona.linkedin}
                  </a>
                  <br />
                  <a>{`E-mail: ${props.persona.email}`}</a>
                  <br />
                  <a>{`Telefone: ${props.persona.whatsapp}`}</a>
                </Card.Grid>
              </Card>
              <h6></h6>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}

function CardProfile(props) {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const widthProfile = 200

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const showPromiseConfirm = () => {
    confirm({
      title: `Deseja confirmar a sua escolha com ${props.persona.name}?`,
      content:
        'Lembre-se: você está confirmando seu interesse em realizar uma mentoria com esse jovem, e garantindo que realizará a mentoria dentro do período de 1 mês',
      onOk() {
        setIsModalVisible(false)
        props.onClickConfirm(props.persona.id)
        message.success('Escolha realizada com sucesso!')
        return new Promise((resolve) => {
          setTimeout(resolve, 800)
        })
      },
      onCancel() {},
      okText: 'Confirmar',
      cancelText: 'Voltar',
    })
  }

  const showPromiseNegative = () => {
    confirm({
      title: `Deseja confirmar exclusão da solicitação enviada por ${props.persona.name}?`,
      content: 'Lembre-se: A recusa do convite é irreversível',
      onOk() {
        setIsModalVisible(false)
        props.onClickReject(props.persona.id)
        message.success('Exclusão realizada com sucesso!')
        return new Promise((resolve) => {
          setTimeout(resolve, 800)
        })
      },
      onCancel() {},
      okText: 'Confirmar',
      cancelText: 'Voltar',
    })
  }

  const invitedDate = new Date(props.persona.invitedDate)
  const invitedDateFormated = `${invitedDate.getDate()}-${invitedDate.getMonth()}-${invitedDate.getFullYear()}`

  const [diffHours, diffDays] = getInvitedDate(props.persona.invitedDate)
  const hoursMissing = 24 - diffHours
  const daysMissing = daysLimit - diffDays

  return (
    <Row>
      <Col span={4} style={{margin: '10px 0 10px 50px'}}>
        <Steps progressDot current={2} direction="vertical">
          <Step
            title={`Matching Realizado em ${invitedDateFormated}`}
            description={
              daysMissing > 0
                ? `Convite expira em ${daysMissing} dia(s)`
                : `Convite expira em ${hoursMissing} hora(s)`
            }
            style={{margin: '20px 0px 80px 0px'}}
          />
        </Steps>
      </Col>
      <Col span={18} justify="center">
        <Card hoverable type="inner" bordered={true}>
          <Row>
            <Col style={{margin: '10px 20px 10px 10px'}} span={4}>
              <Image
                src={props.persona.imageProfile}
                alt="mentor"
                width={widthProfile}
                height={widthProfile}
              />
            </Col>
            <Col span={18}>
              <div style={{fontSize: '20px', margin: '10px 0'}}>
                <a
                  href={props.persona.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={linkedinIcon}
                    alt="logo"
                    objectFit="contain"
                    width="20"
                    height="20"
                  />
                </a>
                {props.persona.name}
              </div>
              <p>{`"${props.persona.description.slice(0, 60)}..."`}</p>
              <Card.Meta title={`Curso: ${props.persona.course}`} />
              <h6></h6>

              <Button
                type="primary"
                size="small"
                onClick={showModal}
                icon={<DoubleRightOutlined />}
                align="middle"
                style={{marginTop: '20px', alignSelf: 'end'}}
              >
                Saiba mais
              </Button>
            </Col>
          </Row>
        </Card>
        <Modal
          visible={isModalVisible}
          centered={true}
          onCancel={handleCancel}
          footer={[
            <Button
              key="cancel"
              onClick={handleCancel}
              style={{marginTop: '10px'}}
            >
              Voltar
            </Button>,
            <Button key="reject" onClick={showPromiseNegative}>
              Excluir Solicitação
            </Button>,
            <Button type="primary" key="confirm" onClick={showPromiseConfirm}>
              Aceitar Solicitação
            </Button>,
          ]}
        >
          <Image
            src={props.persona.imageProfile}
            alt="mentor"
            width={widthProfile}
            height={widthProfile}
          />
          <div style={{fontSize: '22px', margin: '20px 0'}}>
            <a href={props.persona.linkedin} target="_blank" rel="noreferrer">
              <Image
                src={linkedinIcon}
                alt="logo"
                objectFit="contain"
                width="24"
                height="24"
              />
            </a>
            {`${props.persona.name} (${props.persona.pronoun}), ${props.persona.age}`}
          </div>
          <p>{props.persona.description}</p>
          <Card>
            <Card.Grid style={{width: '100%'}}>
              <h6> Informações Acadêmicas</h6>
              <a>{`Faculdade: ${props.persona.college}`}</a>
              <br />
              <a>{`Curso: ${props.persona.course}`}</a>
            </Card.Grid>
          </Card>
        </Modal>
      </Col>
    </Row>
  )
}

function getInvitedDate(invitedDate) {
  const todayDate = new Date()
  const diffTime = Math.abs(invitedDate - todayDate)
  const diffHours = Math.floor(diffTime / (1000 * 60 * 60)) % 24
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  return [diffHours, diffDays]
}

function setExpiredDate(date, experiredDays = daysLimit) {
  const [diffHours, diffDays] = getInvitedDate(date)
  if (experiredDays - diffDays < 0) return true
  else return false
}
