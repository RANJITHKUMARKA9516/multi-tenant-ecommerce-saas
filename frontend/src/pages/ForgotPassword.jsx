import { useState } from "react";

import { forgotPassword } from "../services/authService";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await forgotPassword(email);

      alert("Reset Email Sent");
    } catch (error) {
      alert("Failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h1 className="text-3xl font-bold mb-6">Forgot Password</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
          Send Reset Link
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
