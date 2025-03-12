import React, { useState } from "react";
import { postLogin } from "../services/auth";

const Login: React.FC = () => {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await postLogin(formState);

      console.log(response.accessToken);
      localStorage.setItem("token", response.accessToken);
    } catch (error) {}
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center w-full h-screen gap-1.5"
      >
        <h1>Username</h1>
        <input
          type="text"
          name="username"
          className="border p-3 rounded-sm"
          onChange={handleChange}
        />

        <h1>Password</h1>
        <input
          type="password"
          name="password"
          className="border p-3 rounded-sm"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="bg-blue-200 hover:bg-blue-300 py-5 px-10 rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
