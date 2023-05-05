import React, { useState } from "react";
import "./RegisterForm.css";
import logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
function RegisterForm() {
  const [registerForm, setRegisterForm] = useState({
    username: "",
    password: "",
  });

  const registerOnSubmit = async (event) => {
    event.preventDefault();
    console.log(registerForm);
  };

  const onChangeRegisterForm = (event) => {
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <section className="signup">
      <div className="form-content">
        <div className="logo-register">
          <img src={logo} alt="" />
        </div>
        <h1 className="title">Đăng kí</h1>
        <form action="" onSubmit={registerOnSubmit}>
          <div className="input-group input-dark mb-3">
            <span className="input-group-text">
              <i className="bi bi-person"></i>
            </span>
            <input
              type="text"
              className="form-control"
              name="username"
              id="username"
              placeholder="Tài khoản"
              onChange={onChangeRegisterForm}
            />
          </div>
          <div className="input-group input-dark mb-3">
            <span className="input-group-text">
              <i className="bi bi-envelope-at"></i>
            </span>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Nhập email"
              onChange={onChangeRegisterForm}
            />
          </div>
          <div className="input-group input-dark mb-3">
            <span className="input-group-text">
              <i className="bi bi-lock"></i>
            </span>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              placeholder="Mật khẩu"
              onChange={onChangeRegisterForm}
            />
          </div>
          <div className="input-group input-dark mb-3">
            <span className="input-group-text">
              <i className="bi bi-lock"></i>
            </span>
            <input
              type="password"
              className="form-control"
              name="repassword"
              id="repassword"
              placeholder="Nhập lại mật khẩu"
              onChange={onChangeRegisterForm}
            />
          </div>
          <button type="submit" className="btn btn-register">
            Đăng ký ngay
          </button>
          <Link to="/login" className="link-login">
            Đăng nhập
          </Link>
        </form>
      </div>
    </section>
  );
}

export default RegisterForm;
