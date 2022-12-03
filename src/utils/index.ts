import { message } from 'antd';

export function isLogin(status) {
  if (status && status === 1001) {
    window.location.href = '/signin';
    window.localStorage.setItem('isLogin', 'false');
    message.error('登录超时');
    return;
  }
}
