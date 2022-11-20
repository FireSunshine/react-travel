import React from 'react';
import { RegisterFrom } from './RegisterFrom';
import { UserLayout } from '../../layouts/userLayout';

export const Register = (props) => {
  console.log(props);

  return (
    <UserLayout>
      <RegisterFrom />
    </UserLayout>
  );
};
