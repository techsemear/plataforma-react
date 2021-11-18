import React, {Fragment, useState, useEffect} from 'react'
import Image from 'next/image'
import {Col, Row, Select} from 'antd'
import 'antd/dist/antd.css'

import AreasList from '././AreasList'
import CoursesList from '././CoursesList'
import UniversitiesList from '././UniversitiesList'

import plataformaLogo from '../../assets/image/logo-semear.png'

const {Option} = Select

const StepInfos = (props) => {
  const [college, setCollege] = useState('')
  const [course, setCourse] = useState('')
  const [area, setArea] = useState('')
  const [subarea, setSubarea] = useState([])

  const onChangeCollege = (value) => {
    setCollege(value)
  }
  const onChangeCourse = (value) => {
    setCourse(value)
  }
  const onChangeArea = (value) => {
    setArea(value)
  }
  const onChangeSubarea = (value) => {
    setSubarea(value)
  }

  useEffect(() => {
    props.onChange(!(!college || !course || !area || subarea.length === 0))
  })
  
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
            onChange={onChangeCollege}
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
            onChange={onChangeCourse}
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
            onChange={onChangeArea}
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
            onChange={onChangeSubarea}
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
    </Fragment>
  )
}

export default StepInfos

const macroArea = [
  {area: 'Ciências Agrárias'},
  {area: 'Ciências Biológicas'},
  {area: 'Ciências Exatas e da Terra'},
  {area: 'Ciências Humanas'},
  {area: 'Ciências Sociais Aplicadas'},
  {area: 'Comunicação'},
  {area: 'Consultoria'},
  {area: 'Direito'},
  {area: 'Educação'},
  {area: 'Empreendedorismo'},
  {area: 'Engenharia e Tecnologia'},
  {area: 'Finanças'},
  {area: 'Gestão'},
  {area: 'Linguística, Letras e Artes'},
  {area: 'Marketing'},
  {area: 'Saúde'},
  {area: 'Vendas'},
  {area: 'Não encontrei minha área'},
]
