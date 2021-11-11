import React, {Fragment, useState, useEffect} from 'react'
import Image from 'next/image'
import {Button, message, Col, Row, Card, Modal, Popover} from 'antd'
import {DoubleRightOutlined, InfoCircleOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css'

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

export default function MatchingCalculated({}) {
  const [isFirstClicked, setIsFirstClicked] = useState(false)
  const [isSecondClicked, setIsSecondClicked] = useState(false)
  const [isThirdClicked, setIsThirdClicked] = useState(false)

  const firstMentorSelected = () => {
    setIsFirstClicked(true)
  }

  const secondMentorSelected = () => {
    setIsSecondClicked(true)
  }
  const thirdMentorSelected = () => {
    setIsThirdClicked(true)
  }

  return (
    <Fragment>
      <div>
        {isFirstClicked || isSecondClicked || isThirdClicked ? (
          <h4 style={{margin: '10px 0 10px 80px'}}>
            Estamos preparando tudo para a sua mentoria e em breve entraremos em
            contato!
          </h4>
        ) : (
          <h2 style={{margin: '10px 0 10px 80px'}}>
            Esses são os seus três melhores matches!
            <Popover
              className="mx-3"
              content="Conheça-os e escolha um para realizar a mentoria"
              overlayStyle={{
                width: '25vw',
              }}
            >
              <InfoCircleOutlined />
            </Popover>
          </h2>
        )}
        <Row gutter={48} justify="center">
          {isFirstClicked ? (
            <CardProfile
              persona={personas[0]}
              key="primary"
              isMatchClicked={isFirstClicked}
            />
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
                onClick={firstMentorSelected}
                isMatchClicked={isFirstClicked}
              />
              <CardProfile
                persona={personas[1]}
                key="secondary"
                onClick={secondMentorSelected}
                isMatchClicked={isSecondClicked}
              />
              <CardProfile
                persona={personas[2]}
                key="tertiary"
                onClick={thirdMentorSelected}
                isMatchClicked={isThirdClicked}
              />
            </Fragment>
          )}
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
      content: 'Lembre-se: você não poderá voltar atrás na sua decisão',
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

  return (
    <Col span={7}>
      <Card hoverable bordered={true}>
        <Image
          src={props.persona.imageProfile}
          alt="mentor"
          width={widthProfile}
          height={widthProfile}
        />
        <div style={{fontSize: '20px', margin: '20px 0'}}>
          <a href={props.persona.linkedin} target="_blank" rel="noreferrer">
            <Image
              src={linkedinIcon}
              alt="logo"
              objectFit="contain"
              width="24"
              height="24"
            />
          </a>
          {props.persona.name}
        </div>
        <p>{`"${props.persona.description.slice(0, 60)}..."`}</p>
        <Card.Meta title={`Empresa: ${props.persona.company}`} />
        <h6></h6>

        <Button
          type="primary"
          size="large"
          onClick={showModal}
          icon={<DoubleRightOutlined />}
          align="middle"
          style={{marginTop: '20px'}}
        >
          Saiba mais
        </Button>
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
            type="primary"
            key="confirm"
            onClick={showPromiseConfirm}
            disabled={props.isMatchClicked}
          >
            Deu Match!
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
            <h6> Informações Profissionais</h6>
            <a>{`Empresa: ${props.persona.company}`}</a>
            <br />
            <a>{`Cargo: ${props.persona.profession}`}</a>
          </Card.Grid>
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
