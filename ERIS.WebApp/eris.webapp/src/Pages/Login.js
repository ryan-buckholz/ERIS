import React from 'react';
import Header from '../components/Header';
import LoginInput from '../components/LoginInput';
import Logo from '../components/Logo';

function Login() {
    return (
      <div className="Login" >
        <Header />
        <Logo />
        <LoginInput />

      </div>
    );
  }

export default Login;