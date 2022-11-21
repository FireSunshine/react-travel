import React, { useEffect } from 'react';
import { FormBox } from './login.style';
import { Button, Checkbox, Input, Form } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSelector } from '../../redux/hooks';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/user/userSlice';

export const LoginFrom = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.userSlice.loading);
  const error = useSelector((state) => state.userSlice.error);
  const token = useSelector((state) => state.userSlice.token);

  useEffect(() => {
    if (token !== null) {
      navigate('/');
    }
  }, [token]);

  const onFinish = async (values: any) => {
    dispatch(
      signIn({
        username: values.username,
        password: values.password
      })
    );
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

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block loading={loading}>
          登录
        </Button>
      </Form.Item>
    </FormBox>
  );
};
