import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      alert("Login Successful!");
      navigate("/");
    } catch (err) {
      alert("Login Failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br/>
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} /><br/>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
