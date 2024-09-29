
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; 

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Tên đăng nhập:", username);
    console.log("Mật khẩu:", password);
    router.push("/employee/profile");
  };

  return (
    <form onSubmit={handleLogin} className="auth-form w-full">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="username">
          Tên đăng nhập
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Nhập tên đăng nhập"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="password">
          Mật khẩu
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Nhập mật khẩu"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Đăng Nhập
      </button>
    </form>
  );
};

export default LoginForm;
