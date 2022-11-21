import React from 'react';
import { UserLayout } from '../../layouts/userLayout';
import { LoginFrom } from './LoginFrom';

export const SignIn = () => {
  return (
    <UserLayout>
      <LoginFrom />
    </UserLayout>
  );
};
