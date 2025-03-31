import { useState } from "react";
import api from "../services/api";
import { useAuth } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/register", form);
      login(res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert("Registration failed.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto space-y-5 bg-[#1e293b] p-8 rounded-2xl shadow-xl"
    >
      <h2 className="text-3xl font-semibold mb-2">Create an account</h2>
      <p className="text-sm text-gray-400">
        Already have an account? <a href="/login" className="underline">Log in</a>
      </p>

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 rounded-lg bg-[#0f172a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 rounded-lg bg-[#0f172a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        value={form.password}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 rounded-lg bg-[#0f172a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <div className="flex items-center text-sm text-gray-400">
        <input type="checkbox" required className="mr-2" />
        I agree to the <a className="underline ml-1" href="#">Terms & Conditions</a>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition"
      >
        Create account
      </button>

      <div className="flex items-center gap-4 mt-6">
        <div className="flex-1 h-px bg-gray-600" />
        <span className="text-xs text-gray-400">or register with</span>
        <div className="flex-1 h-px bg-gray-600" />
      </div>

      <div className="flex gap-4 mt-2">
        <button type="button" className="flex-1 py-2 bg-white text-black rounded-lg flex items-center justify-center gap-2">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="h-5 w-5" alt="" />
          Google
        </button>
        <button type="button" className="flex-1 py-2 bg-white text-black rounded-lg flex items-center justify-center gap-2">
          <img src="https://www.svgrepo.com/show/475656/apple.svg" className="h-5 w-5" alt="" />
          Apple
        </button>
      </div>
    </form>
  );
}
