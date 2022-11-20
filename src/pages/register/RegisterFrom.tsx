import React from 'react';
import { FormBox } from './register.style';
import { Button, Checkbox, Input, Form } from 'antd';

export const RegisterFrom = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
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
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </FormBox>
  );
};
