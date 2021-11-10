import React from 'react';
import { Radio, Input, Space } from 'antd';

class App extends React.Component {
  state = {
    value: 1,
  };

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <Radio.Group onChange={this.onChange} value={value}>
        <Space direction="vertical">
          <Radio value={1}>Não</Radio>
          <Radio value={2}>
            Sim
            {value === 2 ? 
            <Input
                placeholder="Qual ? "
                style={{ width: 200 }} 
            /> : null}
          </Radio>
        </Space>
      </Radio.Group>
    );
  }
}

export default App; 