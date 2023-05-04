import React from "react";
import "./LoginForm.css";
import { useState } from "react";
import logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";

function LoginForm() {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const loginOnSubmit = async (event) => {
    event.preventDefault();
    console.log(loginForm);
  };

  const onChangeLoginForm = (event) => {
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
  };
  return (
    <section className="sign-in">
      <div className="bg-login">
        <div className="form-content">
          <div className="logo-login">
            <img src={logo} alt="" />
          </div>
          <h1 className="title">Đăng nhập</h1>
          <form action="" onSubmit={loginOnSubmit}>
            <div className="input-group input-dark mb-3">
              <span className="input-group-text">
                <i class="bi bi-person"></i>
              </span>
              <input
                type="text"
                className="form-control"
                name="username"
                id="username"
                placeholder="Tài khoản"
                onChange={onChangeLoginForm}
              />
            </div>
            <div className="input-group input-dark mb-3">
              <span className="input-group-text">
                <i class="bi bi-lock"></i>
              </span>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                placeholder="Mật khẩu"
                onChange={onChangeLoginForm}
              />
            </div>
            <button type="submit" className="btn btn-login">
              Đăng nhập ngay
            </button>
            <Link to="/register" className="link-regiser">
              Đăng ký ngay
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
