import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await api.post("/auth/register", { name, email, password });
      alert("Registration Successful!");
      navigate("/login");
    } catch (err) {
      alert("Registration Failed");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} /><br/>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br/>
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} /><br/>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
