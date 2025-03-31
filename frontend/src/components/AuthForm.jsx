import { useState } from "react";
import api from "../services/api";
import { useAuth } from "../context/Authcontext";
import { useNavigate } from "react-router-dom";

export default function AuthForm({ type }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = type === "login" ? "/auth/login" : "/auth/register";
    const payload = type === "login" ? { email, password } : { username, email, password };
    try {
      const res = await api.post(endpoint, payload);
      login(res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert("Error: " + err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-semibold text-center">{type === "login" ? "Login" : "Register"}</h2>
      {type === "register" && (
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />
      )}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="w-full bg-black text-white py-2 rounded">
        {type === "login" ? "Login" : "Register"}
      </button>
    </form>
  );
}
