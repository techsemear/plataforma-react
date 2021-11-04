import React, {Fragment} from 'react'
import Image from 'next/image'
import {Col, Row, Select, Typography, Input} from 'antd'
import 'antd/dist/antd.css'

import AreasList from '././AreasList'
import CoursesList from '././CoursesList'
import UniversitiesList from '././UniversitiesList'

import plataformaLogo from '../../assets/image/logo-semear.png'

const {Option} = Select

function onChange(value) {
  console.log(`selected ${value}`)
}

function onBlur() {
  console.log('blur')
}

function onFocus() {
  console.log('focus')
}

function onSearch(val) {
  console.log('search:', val)
}

const StepInfos = () => {
  return (
    <Fragment>
      <div align="center">
        <Image src={plataformaLogo} width={90} height={90} />
      </div>
      <h4 align="center">Infos Acadêmicas e Profissionais 📋</h4>
      <Row gutter={[24, 12]} align="middle" justify="center">
        <Col span={22} xl={11}>
          <label> Faculdade </label>
          <Select
            showSearch
            placeholder="Qual sua instituição de ensino?"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            style={{width: '100%'}}
            filterOption={(input, option) =>
              option.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {UniversitiesList.map((item, index) => (
              <Option value={item.faculdade} key={index}>
                {item.faculdade}
              </Option>
            ))}
          </Select>
        </Col>
        <Col span={22} xl={11}>
          <label> Curso </label>
          <Select
            showSearch
            placeholder="Qual seu curso?"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            style={{width: '100%'}}
            filterOption={(input, option) =>
              option.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {CoursesList.map((item, index) => (
              <Option value={item.curso} key={index}>
                {item.curso}
              </Option>
            ))}
          </Select>
        </Col>
      </Row>
      <Row gutter={[24, 12]} justify="center">
        <Col span={22} xl={11}>
          <label> Área de Interesse </label>
          <Select
            showSearch
            placeholder="Qual sua principal área de interesse?"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            style={{width: '100%'}}
            filterOption={(input, option) =>
              option.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {macroArea.map((item, index) => (
              <Option value={item.area} key={index}>
                {item.area}
              </Option>
            ))}
          </Select>
        </Col>
        <Col span={22} xl={11}>
          <label> Subárea de Interesse </label>
          <Select
            showSearch
            placeholder="Quais são as suas subáreas de interesse?"
            optionFilterProp="children"
            mode="multiple"
            style={{width: '100%'}}
            maxTagCount="responsive"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            style={{width: '100%'}}
            filterOption={(input, option) =>
              option.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {AreasList.map((item, index) => (
              <Option value={item.label} key={index}>
                {item.label}
              </Option>
            ))}
          </Select>
        </Col>
      </Row>
      <Row align="middle" justify="center">
        <Col span={16} xl={11}>
          <label> Site Pessoal </label>
          <Input
            addonBefore="http://"
            placeholder="meusite.com"
            style={{width: '100%'}}
          />
        </Col>
      </Row>
    </Fragment>
  )
}

export default StepInfos

const macroArea = [
  {area: 'Administração '},
  {area: 'Artes: Visuais ou Digitais '},
  {area: 'Comunicação'},
  {area: 'Consultoria'},
  {area: 'Direito'},
  {area: 'Educação'},
  {area: 'Empreendedorismo'},
  {area: 'Engenharia '},
  {area: 'Finanças'},
  {area: 'Gestão '},
  {area: 'Marketing'},
  {area: 'Química'},
  {area: 'Saúde'},
  {area: 'Tecnologia'},
  {area: 'Vendas'},
  {area: 'Não encontrei minha área'},
]
