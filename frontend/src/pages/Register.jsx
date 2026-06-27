import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { registerUser } from "../services/authService";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
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
      await registerUser(formData);

      alert("Registration Successful");

      navigate("/login");
    } catch (error) {
      console.log(error);

      alert(
        error?.response?.data?.message ||
          error.message ||
          "Registration Failed",
      );
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h1 className="text-3xl font-bold mb-6">Register</h1>

        <input
          name="name"
          placeholder="Name"
          className="w-full border p-3 rounded mb-4"
          onChange={handleChange}
        />

        <input
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

        <select
          name="role"
          className="w-full border p-3 rounded mb-4"
          onChange={handleChange}
        >
          <option value="customer">Customer</option>

          <option value="vendor">Vendor</option>
        </select>

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
