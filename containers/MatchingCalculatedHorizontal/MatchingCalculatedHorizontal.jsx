import React, {Fragment, useState, useEffect} from 'react'
import Image from 'next/image'
import {Button, message, Col, Row, Card, Modal, Popover} from 'antd'
import {DoubleRightOutlined, InfoCircleOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css'

import TimelineCheck from './TimelineCheck'

import imageProfile1 from '../../assets/image/landing-1/mentor1.png'
import imageProfile2 from '../../assets/image/landing-1/mentor2.png'
import imageProfile3 from '../../assets/image/landing-1/mentor3.png'
import linkedinIcon from '../../assets/image/landing-1/linkedin-2.png'

const {Meta} = Card
const {confirm} = Modal

const personas = [
  {
    name: ' Camila Cintra',
    age: '33',
    pronoun: 'Ela/Dela',
    description:
      'Há tempos eu vinha sentindo vontade de contribuir com o crescimento de outras pessoas e colocar minha vivência a serviço disso. Conforme vou crescendo, percebo que recebi muito da vida e que às vezes uma palavra, um gesto ou uma dica, pode transformar a vida de alguém, assim como a minha foi também transformada.',
    profession: 'Researcher & Brand Strategist',
    company: 'Float',
    college: 'Universidade de São Paulo',
    course: 'Ciências Sociais',
    imageProfile: imageProfile1,
    linkedin: 'https://www.linkedin.com/in/camila-cintra-0064348a/',
  },
  {
    name: ' Giovanni Luigi',
    age: '28',
    pronoun: 'Ele/Dele',
    description:
      'Eu encontrei muitas histórias parecidas com a minha, o que me fez refletir muito sobre propósito, acho incrível o efeito que os jovens têm sobre a gente. Assim como compartilhamos experiência e conhecimentos, eles fornecem energia e esperança!',
    profession: 'Digital Data Marketing Specialist',
    company: 'Publicis Brasil',
    college: 'Universidade de São Paulo',
    course: 'Publicidade',
    imageProfile: imageProfile2,
    linkedin: 'https://www.linkedin.com/in/giovanni-luigi-mkt/',
  },
  {
    name: ' Lucas Carvalho',
    age: '32',
    pronoun: 'Ele/Dele',
    description:
      'A oportunidade de dividir anseios, dúvidas, perspectivas de carreira e ensinamentos com jovens tão atentos é, sem dúvida, excepcional e um exercício de aprendizado. Tenho um carinho especial pela mentoria que me possibilitou conhecer um jovem inteligente, cheio de sonhos e que tem uma trajetória muito parecida com a que eu tive.',
    profession: 'Advogado Júnior',
    company: 'Demarest Advogados',
    college: 'Universidade de São Paulo',
    course: 'Direito',
    imageProfile: imageProfile3,
    linkedin: 'https://www.linkedin.com/in/lucas-vieira-carvalho-62a8aa18b/',
  },
]

export default function MatchingCalculatedHorizontal({}) {
  const [isFirstClicked, setIsFirstClicked] = useState(false)
  const [isSecondClicked, setIsSecondClicked] = useState(false)
  const [isThirdClicked, setIsThirdClicked] = useState(false)

  const firstYoungSelected = () => {
    setIsFirstClicked(true)
  }

  const secondYoungSelected = () => {
    setIsSecondClicked(true)
  }
  const thirdYoungSelected = () => {
    setIsThirdClicked(true)
  }

  const firstYoungNegated = () => {
    setIsFirstClicked(true)
  }

  const secondYoungNegated = () => {
    setIsSecondClicked(true)
  }
  const thirdYoungNegated = () => {
    setIsThirdClicked(true)
  }



  return (
    <Fragment>
      <div>
          <h2 style={{margin: '10px 0 20px 80px'}}>
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
        <Col 
          span = {4}
          style={{margin: '10px 0 10px 50px'}}
        >
          <TimelineCheck/>
        </Col>
        <Col span = {19}
          justify="center">
          {isFirstClicked ? (
            <Fragment>
            <CardProfile
              persona={personas[1]}
              key="secondary"
              isMatchClicked={isSecondClicked}
            />
            <CardProfile
            persona={personas[2]}
            key="tertiary"
            isMatchClicked={isThirdClicked}
            />
            </Fragment>
          ) : isSecondClicked ? (
            <CardProfile
              persona={personas[1]}
              key="secondary"
              isMatchClicked={isSecondClicked}
            />
          ) : isThirdClicked ? (
            <CardProfile
              persona={personas[2]}
              key="tertiary"
              isMatchClicked={isThirdClicked}
            />
          ) : (
            <Fragment>
              <CardProfile
                persona={personas[0]}
                key="primary"
                onClick={firstYoungSelected}
                isMatchClicked={isFirstClicked}
              />
              <CardProfile
                persona={personas[1]}
                key="secondary"
                onClick={secondYoungSelected}
                isMatchClicked={isSecondClicked}
              />
              <CardProfile
                persona={personas[2]}
                key="tertiary"
                onClick={thirdYoungSelected}
                isMatchClicked={isThirdClicked}
              />
            </Fragment>
          )}
        </Col>
        </Row>
      </div>
    </Fragment>
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

  const handleOk = () => {}

  const showPromiseConfirm = () => {
    confirm({
      title: `Deseja confirmar a sua escolha com ${props.persona.name}?`,
      content: 'Lembre-se: você está confirmando seu interesse em realizar uma mentoria com esse jovem, e garantindo que realizará a mentoria dentro do período de 1 mês',
      onOk() {
        setIsModalVisible(false)
        props.onClick()
        message.success('Escolha realizada com sucesso!')
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 800)
        }).catch(() => console.log('Oops errors!'))
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
        props.onClick()
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
              marginRadius="10"
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
          style={{marginTop: '20px', alignSelf:'end' }}
        >
          Saiba mais
        </Button>
        </Col>
        </Row>
      </Card>
      <Modal
        visible={isModalVisible}
        centered={true}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            key="cancel"
            onClick={handleCancel}
            style={{marginTop: '10px'}}
          >
            Voltar
          </Button>,
           <Button
           key="confirm"
           onClick={showPromiseNegative}
           disabled={props.isMatchClicked}
         >
           Excluir Solicitação
         </Button>,
          <Button
            type="primary"
            key="confirm"
            onClick={showPromiseConfirm}
            disabled={props.isMatchClicked}
          >
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
