import React, {Fragment, useState} from 'react'
import {Button, message, Col, Row, Card, Typography, Upload, Input, Space } from 'antd'
import { UploadOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css'
 
import AvatarImage from './AvatarImage'
import PersonalSite from './PersonalSite'

const { Title } = Typography;
const {TextArea} = Input;


const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export default function ProfilePage() {
  return (
    <Fragment>
     <div className="first-column-profile"> 
     <Row align="middle">
          <Col
          offset={1}
          xs={{span: 20, offset: 2}}
          sm={{span: 20, offset: 1}}
          md={{span: 10}}
          xl={{span: 15}}
          >
      <Card>
        <Row>
          <Col span={8}>
          <AvatarImage></AvatarImage>   
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Atualize sua foto</Button>
          </Upload>
          </Col>
          <Col span={15}>
            <Title>Nome de Usuário</Title>
            <Title level={4} >Instituição (Ensino ou Trabalho)</Title>
            <TextArea rows={4} showCount maxLength={250} />
            <PersonalSite/>
          </Col>
        </Row>
      </Card>
          </Col>
          <Col
            xs={{span: 1, offset: 1}}
            sm={{span: 7}}
            md={{span: 7}}
            xl={{span: 5}}
          >
            <Card>
              <Col span={15}>
                <Space direction="vertical">
                  <Button className="button-profile" type="primary">Preencher Roda da Trilha</Button>
                </Space>
                <Space direction="vertical">
                  <Button className="button-profile" type="primary">Completar Cadastro</Button>  
                </Space>
                <Space direction="vertical">
                  <Button className="button-profile" type="primary" disabled >Encontrar Mentor(a) Ideal</Button>  
                </Space>
                <Space direction="vertical">
                  <Button className="button-profile" type="primary" disabled >Preencher Lista de Presença</Button>
                </Space>
              </Col>
            </Card>
          </Col>
        </Row>
      </div>
  </Fragment>
  )
}
