import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { setUser } from "../store/authSlice";

import { loginUser } from "../services/authService";

function Login() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(formData);

      dispatch(setUser(data.user));

      navigate("/");
    } catch (error) {
      console.log(error);

      alert(error?.response?.data?.message || error.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h1 className="text-3xl font-bold mb-6">Login</h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
          onChange={handleChange}
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
          Login
        </button>

        <div className="mt-4 flex justify-between">
          <Link to="/register" className="text-blue-600">
            Register
          </Link>

          <Link to="/forgot-password" className="text-blue-600">
            Forgot Password
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
