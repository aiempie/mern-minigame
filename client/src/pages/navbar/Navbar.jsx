import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.jpg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-menu">
          <div className="nav-menu-right">
            <button
              class="btn btn-open-menu"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#nav-menu"
              aria-controls="nav-menu"
            >
              <i class="bi bi-list"></i>
            </button>
            <div
              class="offcanvas offcanvas-start menu-content"
              data-bs-scroll="true"
              tabindex="-1"
              id="nav-menu"
              aria-labelledby="nav-menuLabel"
            >
              <div class="offcanvas-header">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <i class="bi bi-x-lg"></i>
                </button>
              </div>
              {/* body nav */}
              <div class="offcanvas-body menu-body">
                <ul className="nav-list">
                  <li className="nav-items">
                    <a href="#">Trang chủ</a>
                  </li>
                  <li className="nav-items">
                    <a href="#">Trang chủ1</a>
                  </li>
                  <li className="nav-items">
                    <a href="#">Trang chủ2</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <a className="login-logup" href="#">
            <i class="bi bi-person-circle"></i>
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
