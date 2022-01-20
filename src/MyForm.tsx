import {Form, Input, Button, Checkbox} from 'antd';
import React, {FC} from 'react';

const inputsOffset = 2;

type FormData = {
  remember?: boolean;
  username?: string;
  password?: string;
}

export const MyForm: FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <Form<FormData>
      name="basic"
      labelCol={{span: inputsOffset}}
      wrapperCol={{span: 8}}
      initialValues={{remember: true}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{required: true, message: 'Please input your username!'}]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{required: true, message: 'Please input your password!'}]}
      >
        <Input.Password/>
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: inputsOffset}}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{offset: inputsOffset}}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
