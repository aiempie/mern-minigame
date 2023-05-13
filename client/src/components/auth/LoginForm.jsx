import React from "react";
import "./LoginForm.css";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function LoginForm() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <section className="sign-in">
      <div className="box">
        <div className="title">LOGIN</div>

        <TextField
          id="standard-size-normal"
          label="Username"
          variant="standard"
          color="secondary"
          fullWidth
          sx={{ mt: 3 }}
        />

        <FormControl sx={{ mt: 3 }} variant="standard" fullWidth color="secondary">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <div className="button login">
          <button>
            <span>GO</span> <i className="fa fa-check" />
          </button>
        </div>
        <a href className="pass-forgot">
          Forgot your password?
        </a>
      </div>
      <div className="overbox">
        <div className="material-button alt-2">
          <span className="shape" />
        </div>
        <div className="title">REGISTER</div>
        <div className="input">
          <label htmlFor="regname">Username</label>
          <input type="text" name="regname" id="regname" />
          <span className="spin" />
        </div>
        <div className="input">
          <label htmlFor="regpass">Password</label>
          <input type="password" name="regpass" id="regpass" />
          <span className="spin" />
        </div>
        <div className="input">
          <label htmlFor="reregpass">Repeat Password</label>
          <input type="password" name="reregpass" id="reregpass" />
          <span className="spin" />
        </div>
        <div className="button">
          <button>
            <span>NEXT</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
