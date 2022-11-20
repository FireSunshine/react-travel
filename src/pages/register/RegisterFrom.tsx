import React from 'react';
import { FormBox } from './register.style';
import { Button, Checkbox, Input, Form, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const RegisterFrom = () => {
  const navigate = useNavigate();
  const onFinish = async (values: any) => {
    try {
      await axios.post('http://127.0.0.1:7001/api/user/register', {
        username: values.username,
        password: values.password
      });
      navigate('/signin');
    } catch (error: any) {
      message.error(error.response.data.message);
    }
  };

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

      <Form.Item
        label="Confirm Password"
        name="confirm"
        hasFeedback
        rules={[
          { required: true, message: 'Please input your confirm password!' },
          ({ getFieldValue }) => ({
            validator(_, vaule) {
              if (!vaule || getFieldValue('password') === vaule) {
                return Promise.resolve();
              } else {
                return Promise.reject('密码确认不一致');
              }
            }
          })
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
      </Form.Item>
    </FormBox>
  );
};
