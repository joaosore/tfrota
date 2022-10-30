import { UserOutlined } from '@ant-design/icons';

import { Form, Input, Button, Checkbox, Card } from 'antd';


import style from './styles.module.scss';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const FormContato = () => {

  const onFinish = values => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

    return (
      <div className={style.container}>
        <Card style={{ width: 450 }}>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >

            <h2>Entre em contato</h2>

            <Form.Item
              label="Nome"
              name="name"
              rules={[{ required: true, message: 'Por favor, insira seu nome de usuário!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="E-mail"
              name="email"
              rules={[{ required: true, message: 'Por favor, insira seu email!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Telefone"
              name="phone"
              rules={[{ required: true, message: 'Por favor, insira seu telefone!' }]}
            >
              <Input />
            </Form.Item>

            <Button type="primary" htmlType="submit" block>
              Enviar
            </Button>
          </Form>
        </Card>
      </div>
    )
}

export default FormContato;