import React, { useState } from "react";
import logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [forgotPasswordForm, setForgotPasswordForm] = useState({
    username: "",
    password: "",
  });

  const forgotPasswordOnSubmit = async (event) => {
    event.preventDefault();
    console.log(forgotPasswordForm);
  };

  const onChangeForgotPasswordForm = (event) => {
    setForgotPasswordForm({
      ...forgotPasswordForm,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="forgot-password">
      <div className="form-content">
        <div className="logo-forgot-password">
          <img src={logo} alt="" />
        </div>
        <h1 className="title">Quên mật khẩu</h1>
        <form action="" onSubmit={forgotPasswordOnSubmit}>
          <div className="input-group input-dark mb-3">
            <span className="input-group-text">
              <i class="bi bi-envelope-at"></i>
            </span>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Nhập email"
              onChange={onChangeForgotPasswordForm}
            />
          </div>
          <div className="input-group input-dark mb-3">
            <span className="input-group-text">
              <i class="bi bi-asterisk"></i>
            </span>
            <input
              type="text"
              className="form-control"
              name="codeNumber"
              id="codeNumber"
              placeholder="Nhập code 5 chữ số"
              onChange={onChangeForgotPasswordForm}
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
              placeholder="Mật khẩu mới"
              onChange={onChangeForgotPasswordForm}
            />
          </div>
          <div className="input-group input-dark mb-3">
            <span className="input-group-text">
              <i class="bi bi-lock"></i>
            </span>
            <input
              type="password"
              className="form-control"
              name="repassword"
              id="repassword"
              placeholder="Nhập lại mật khẩu"
              onChange={onChangeForgotPasswordForm}
            />
          </div>
          <button type="submit" className="btn btn-forgotPassword">
            Nhập
          </button>
          <Link to="/login" className="link-login">
            Đăng nhập
          </Link>
        </form>
      </div>
    </div>
  );
}
