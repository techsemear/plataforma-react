
import React, { useState } from 'react';
import { Modal, Button, Select, Form, Checkbox } from 'antd';

const { Option } = Select;

const plainOptions = ['Sim', 'Não'];

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}

export default function AddInfos () {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal} className="button-profile">
        Conclua seu Cadastro
      </Button>
      <Modal title="Conclua seu Cadastro 📋" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            layout="vertical"
        >
            <Form.Item
                label="Gênero"
                name="gender"
                rules={[{ required: true, message: 'Por favor, preencha o campo acima' }]}
            >
                <Select
                    showSearch
                    style={{ width: 450 }}
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="Etnia"
                name="ethnicity"
                rules={[{ required: true, message: 'Por favor, preencha o campo acima' }]}
            >
                <Select
                    showSearch
                    style={{ width: 450 }}
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="Sexualidade"
                name="sexuality"
                rules={[{ required: true, message: 'Por favor, preencha o campo acima' }]}
            >
                <Select
                    showSearch
                    style={{ width: 450 }}
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="Deficiência"
                name="deficiency"
                rules={[{ required: true, message: 'Por favor, preencha o campo acima' }]}
            >
                 <Checkbox.Group options={plainOptions}  onChange={onChange} />
            </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

