import React from "react";
import RegisterForm from "../../components/auth/RegisterForm";
import LoginForm from "../../components/auth/LoginForm";

function Login(prop) {
  const body = prop.isRegister ? <RegisterForm /> : <LoginForm />;
  return <div className="">{body}</div>;
}

export default Login;
