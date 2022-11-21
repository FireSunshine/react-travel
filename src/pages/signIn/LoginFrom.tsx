import React from 'react';
import { FormBox } from './login.style';
import { Button, Checkbox, Input, Form, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const LoginFrom = () => {
  const navigate = useNavigate();
  const onFinish = async (values: any) => {};

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <FormBox name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed} layout="vertical">
      <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          登录
        </Button>
      </Form.Item>
    </FormBox>
  );
};
