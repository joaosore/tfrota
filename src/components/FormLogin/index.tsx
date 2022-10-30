import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export const FormLogin = () => {
    return <div className="example-input">
    <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
    <Input placeholder="default size" prefix={<UserOutlined />} />
    <Input size="small" placeholder="small size" prefix={<UserOutlined />} />
    <Input.Password size="large" placeholder="large Password" />
  </div>
}