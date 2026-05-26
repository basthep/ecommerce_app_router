"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/loginSlice.ts";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie"

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = () => {

    if(! email || !password){
            alert("Enter email and password")
            return
        }
        const userData={
            email,
            password
        }
        dispatch(login(userData))
        Cookies.set("user",email)
        router.replace("/")
  };

  return (
    <main className="min-h-screen flex justify-center items-center bg-gray-50">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold mb-8">
          Login
        </h1>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full border p-3 rounded-lg mb-3"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full border p-3 rounded-lg"
        />

        <button
          onClick={handleLogin}
          className="w-full mt-5 bg-violet-600 text-white py-3 rounded-lg"
        >
          Login
        </button>

      </div>

    </main>
  );
};

export default LoginPage;