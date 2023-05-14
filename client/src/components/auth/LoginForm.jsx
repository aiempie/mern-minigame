import React, { useState } from "react";
import "./LoginForm.css";
import {
  Fab,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import LoadingButton from "@mui/lab/LoadingButton";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const loginOnsubmit = (e) => {
    e.preventDefault();
    console.log("hihi");
    setIsLoading(true);
  };

  return (
    <section className="sign-in">
      <div className="box">
        <div className="title">LOGIN</div>
        <form method="post" onSubmit={loginOnsubmit}>
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
            <Button variant="outlined">
              <span>GO</span>
            </Button>
            <LoadingButton variant="outlined" loading={isLoading}>
              GO
            </LoadingButton>
          </div>
        </form>

        <a href className="pass-forgot">
          Forgot your password?
        </a>
      </div>
      <div className="overbox">
        <div className="material-button alt-2">
          <Fab color="default" aria-label="edit" href="/register">
            <EditIcon />
          </Fab>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
