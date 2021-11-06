import { Input, Select, Space, Cascader } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const { Option } = Select;

const selectBefore = (
    <Select defaultValue="http://" className="select-before">
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </Select>
  );
  const selectAfter = (
    <Select defaultValue=".com" className="select-after">
      <Option value=".com">.com</Option>
      <Option value=".jp">.com.br</Option>
      <Option value=".cn">.net</Option>
      <Option value=".org">.org</Option>
    </Select>
  );
  
export default function PersonalSite (){
    return(
      <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />      
)
};