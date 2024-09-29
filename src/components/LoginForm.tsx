"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; 

const LoginForm = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Để lưu lỗi
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone, password }),
      });
  
      if (!response.ok) {
        throw new Error('Đăng nhập không thành công');
      }
  
      const data = await response.json();
      console.log('Đăng nhập thành công:', data);
      router.push("/employee/profile");
    } catch (err) {
      // Sử dụng instanceof để kiểm tra lỗi
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Đã xảy ra lỗi');
      }
    }
  };
  

  return (
    <form onSubmit={handleLogin} className="auth-form w-full">
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="phone">
          Số điện thoại
        </label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Nhập số điện thoại"
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
