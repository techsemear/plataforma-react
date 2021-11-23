import React, {Children, Fragment, useState} from 'react'
import {Button, message, Col, Row, Card, Typography, Upload, Input, Space, Progress, Select, Badge} from 'antd'
import { UploadOutlined, EditOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css'
 
import AvatarImage from './AvatarImage'
import PersonalSite from './PersonalSite'
import EditInfos from './EditInfos'

import AddInfos from './AddInfos'

const { Option } = Select;
const { Title, Text } = Typography;
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
     <div className="page-profile"> 
     <Row align="middle">
          <Col
          xs={{span: 20, offset: 1}}
          sm={{span: 20}}
          md={{span: 20}}
          xl={{span: 15}}
          >
      <div className="first-column-profile">
      <Card>
        <Row>
          <Col span={8}>
          <AvatarImage></AvatarImage>   
          <Upload {...props}>
            <Button type="primary" icon={<UploadOutlined />}>Atualize sua foto</Button>
          </Upload>
          </Col>
          <Col span={15}>
            <Row >
            <Title level={2} >Nome de Usuário</Title>
            <PronounInfo/>
            </Row>
            <Row gutter= {10} align="bottom" justify="start">
            <Title level={4} >Instituição (Ensino ou Trabalho)</Title>
            <EditInfos />
            </Row>
            <Col>
            <Title level={5}>Sobre Você:<br/></Title>
            <Text id='about'> <br/></Text>
            <Title level={5}>Site Pessoal:<br/></Title>
            <Text id='personal_site'> <br/></Text>
            </Col>
           </Col>
        </Row>
      </Card>
      </div>
      <Progress
         strokeColor={{
            '0%': '#108ee9',
            '100%': '#87d068',
         }}
         percent={99.9}
    />
          </Col>
          <Col
            xs={{span: 1, offset: 1}}
            sm={{span: 7}}
            md={{span: 7}}
            xl={{span: 5}}
          >
            <Card style={{marginTop:90}}>
              <Col span={15} >
                <Space direction="vertical">
                  <Button className="button-profile" type="primary">Ver Meu Diagnóstico</Button>
                </Space>
                <Space direction="vertical">
                  <AddInfos/>
                </Space>
                <Space direction="vertical">
                  <Button className="button-profile" type="primary" disabled >Preencher Lista de Presença</Button>  
                </Space>
                <Space direction="vertical">
                  <Button className="button-profile" type="dashed" >Perguntas Frequentes</Button>
                </Space>
                <Space direction="vertical">
                  <Button className="button-profile" type="dashed" >Ajuda</Button>
                </Space>
              </Col>
            </Card>
          </Col>
        </Row>
        <Col span={15} offset={9} style={{marginTop:50}}>
          <Badge count={5}>
          <Space direction="vertical" size="large">
            <Button size ='large' align="center"> 
              Acompanhe Suas Solicitações
            </Button>
          </Space>
          </Badge>
        </Col>
      </div>
  </Fragment>
  )
}



function PronounInfo(){
  return (
    <>
    <Select defaultValue="Ela/Dela" style={{ width: 100, height: 32}} bordered={false}>
      <Option value="Ele/Dele">Ele/Dele</Option>
      <Option value="Ela/Dela">Ela/Dela</Option>
      <Option value="Elu/Delu">Elu/Delu</Option>
    </Select>
  </>
  )
}

