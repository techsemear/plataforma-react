import React, {useState} from 'react'
import Image from 'next/image'
import {Col, Row, Modal, Button} from 'antd'
import {DoubleRightOutlined} from '@ant-design/icons'

import welcomeImage from '../../assets/image/personagens/footer.png'

const StepWelcome = () => {

  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  return (
    <Row gutter={[32, 16]} align="middle" justify="space-around">
      <Col span={12} offset={2} xs={20} sm={20} md={12} lg={12} xl={12}>
        <h1>Você chegou!!!</h1>
        <h5>Falta pouco para encontrarmos um mentor que combina com você...</h5>
        <p>
          Agora você passará pela fase que chamamos de
          <strong> Roda da Trilha</strong>, em que aqui te ajudaremos a mapear
          os seus principais desafios!
          <br />
          Depois, nossa <strong>Calculadora de Matches</strong>
          encontrará o mentor mais qualificado para trabalhar em soluções junto
          com você.
        </p>
        <Button
          type="primary"
          onClick={showModal}
          icon={<DoubleRightOutlined />}
          align="middle"
        >
          Saiba mais sobre a Calculadora de Matches
        </Button>
        <Modal
          title="Como funciona nossa Calculadora de Matches?"
          visible={isModalVisible}
          onOk={handleOk}
          footer={[
            <Button type="primary" key="confirm" onClick={handleOk}>
              OK
            </Button>,
          ]}
        >
          <p>
            Queremos ser o maior e mais amada programa de mentoria social do
            Brasil e para isso... Queremos ser o maior e mais amada programa de
            mentoria social do Brasil e para isso...
          </p>
        </Modal>
      </Col>
      <Col span={8} xs={18} sm={14} md={8} lg={8} xl={7}>
        <Image src={welcomeImage} alt="gif" layout="responsive" />
      </Col>
    </Row>
  )
}

export default StepWelcome
