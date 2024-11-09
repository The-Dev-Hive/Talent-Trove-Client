import React from 'react';
import { Metadata } from 'next';
import LoginForm from './logInForm';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Authentication forms built using the components.',
};

const Login = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;
