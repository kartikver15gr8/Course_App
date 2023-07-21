import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import "./login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="container">
      <h2>Login Here!</h2>
      <TextField
        id="outlined-basic"
        label="username"
        variant="outlined"
        type="text"
        style={{ margin: "5px" }}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />

      <TextField
        id="outlined-basic"
        label="password"
        variant="outlined"
        type="password"
        style={{ margin: "5px" }}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <Button
        variant="contained"
        onClick={() => {
          fetch("http://localhost:3000/admin/login", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              console.log(data);
              localStorage.setItem("token", data.token);
            });
        }}
      >
        login
      </Button>
    </div>
  );
}

export default Login;
