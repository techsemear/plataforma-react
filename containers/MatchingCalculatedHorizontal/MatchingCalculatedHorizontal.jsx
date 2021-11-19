import React, {Fragment, useState, useEffect} from 'react'
import Image from 'next/image'
import {Button, message, Col, Row, Card, Modal, Popover, Breadcrumb} from 'antd'
import {DoubleRightOutlined, InfoCircleOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css'

import TimelineCheck from './TimelineCheck'

import imageProfile1 from '../../assets/image/landing-1/student1.png'
import imageProfile2 from '../../assets/image/landing-1/student2.png'
import imageProfile3 from '../../assets/image/landing-1/student4.jpg'

import linkedinIcon from '../../assets/image/landing-1/linkedin-2.png'

const {Meta} = Card
const {confirm} = Modal

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
  },
]

export default function MatchingCalculatedHorizontal({}) {
  const personaList = personas.map((item) => ({
    ...item,
    isConfirmed: false,
    isRejected: false,
  }))

  const [getDecisionList, setDecisionList] = useState(personaList)
  const [getConfirmedList, setConfirmedList] = useState([])

  const studentConfirmed = (id) => {
    setDecisionList(
      getDecisionList.map((item) => {
      if (item.id === id) {
        item.isConfirmed = true
      }
      return item
      })
    )

    setConfirmedList(
      getDecisionList.filter(function (item) {
          return item.isConfirmed === true
        }),
    )
  }

  const studentRejected = (id) => {
    setDecisionList(
      getDecisionList
        .map((item) => {
          if (item.id === id) {
            item.isRejected = true
          }
          return item
        })
    )
  }

 const [screen, setScreen] = useState(1);

 const onClickAll = () => {
   setScreen (1);
 }

 const onClickAccepted = () => {
  setScreen (2);
}

  return (
    <Fragment>
        <Breadcrumb style={{margin: '20px 0 0px 50px'}}>
          <Breadcrumb.Item onClick = {onClickAll}>
            <a>Convites</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item onClick = {onClickAccepted}>
            <a>Convites Aceitos</a>
          </Breadcrumb.Item>
        </Breadcrumb>
      
      {screen == 1 ? (
      <div>
        <h2 align = "center">
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

        <Row>
          <Col span={4} style={{margin: '10px 0 10px 50px'}}>
            <TimelineCheck />
          </Col>
          <Col span={19} justify="center">
            {getDecisionList
              .filter(function (item) {
                return (!item.isConfirmed & !item.isRejected)
              })
              .map((item, index) => (
                <CardProfile
                  persona={item}
                  key={`card-${index}`}
                  onClickConfirm={studentConfirmed}
                  onClickReject={studentRejected}
                />
              ))}
          </Col>
        </Row>
      </div>
      ) : (
        <div>
        <h2 align = "center">
          Acompanhe suas mentorias aceitas!
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

        <Row>
          <Col span={4} style={{margin: '10px 0 10px 50px'}}>
            <TimelineCheck />
          </Col>
          <Col span={19} justify="center">
            {getDecisionList
              .filter(function (item) {
                return (item.isConfirmed)
              })
              .map((item, index) => (
                <CardContact
                  persona={item}
                  key={`card-${index}`}
                  onClickConfirm={studentConfirmed}
                  onClickReject={studentRejected}
                />
              ))}
          </Col>
        </Row>
      </div> 
      )}
    </Fragment>
  )
}


function CardContact (props) {
  return (
    <Col span={20} justify="center">
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
              <a href={props.persona.linkedin} target="_blank" rel="noreferrer">
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
            <p>
              <strong>Linkedin: </strong><a href={props.persona.linkedin}>{props.persona.linkedin}</a>
              <br />
              <strong>Email: </strong>{props.persona.email}
              <br />
              <strong>Telefone: </strong>{props.persona.whatsapp}
            </p>
            <Card.Meta title={`Curso: ${props.persona.course}`} />
            <h6></h6>
          </Col>
        </Row>
      </Card>
    </Col>
  )}

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
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 800)
        }).catch(() => console.log('Oops errors!'))
      },
      onCancel() {},
      okText: 'Confirmar',
      cancelText: 'Voltar',
    })
  }

  return (
    <Col span={20} justify="center">
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
              <a href={props.persona.linkedin} target="_blank" rel="noreferrer">
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
  )
}
