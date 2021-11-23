import { Input, Select, Space, Cascader } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const { Option } = Select;

const selectBefore = (
    <Select defaultValue="http://" className="select-before">
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </Select>
  );
  
export default function PersonalSite (){
    return(
      <Input 
      addonBefore={selectBefore}  
      placeholder="Escreva seu site pessoal"
      />      
)
};