"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import imageLogin from "../../../public/admin-login.png";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
       let API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
     // let API_BASE_URL = "http://localhost:3000/api/";

      const response = await fetch(`${API_BASE_URL}user/signIn`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName: username, password }),
        credentials: "include", // ✅ important for cookies
      });

      const data = await response.json();

      if (response.ok && data.user) {
        router.push("/admin/secure/pages/dashboard");
      } else {
        if (response.status === 401) {
          setError("Invalid username or password.");
        } else {
          setError(data.error || "Login failed.");
        }
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-full">
      {/* Left side: Login Form */}
      <div className="w-full md:w-1/2 flex justify-center items-center  bg-[#fff7e0]">
        <form
          onSubmit={handleLogin}
          className="bg-[#fffaf0] p-8 rounded shadow-md w-96 space-y-4 border border-1 border-[#ffbe00]"
        >
          <h2 className="text-2xl font-bold text-center text-[#ffbe00] ">
            Admin Login
          </h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-[#ffbe00] px-3 py-2 rounded !bg-[#fff7e0] focus:outline-none focus:ring-2 focus:ring-[#ffbe00] focus:border-[#ffbe00]"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-3 py-2 border-[#ffbe00] rounded bg-[#fff7e0] focus:outline-none focus:ring-2 focus:ring-[#ffbe00] focus:border-[#ffbe00]"
          />
          <button
            type="submit"
            className="w-full bg-[#ffbe00] hover:bg-[#e6a800] cursor-pointer text-black py-2 rounded"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>

      {/* Right side: Image */}
      <div className="hidden md:block md:w-1/2 relative">
        <Image
          src={imageLogin}
          alt="Admin login background"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
