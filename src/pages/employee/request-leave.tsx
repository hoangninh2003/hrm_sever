// src/app/employee/request-leave.tsx
import LayoutEmp from "@/pages/employee/layout-employee";
import Link from "next/link";



const RequestLeave = () => {
  return (
    <LayoutEmp>
        <div className="flex gap-4 mb-4">
            <Link href="/employee/profile">
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                Xem bảng lương
            </button>
            </Link>
            <Link href="/">
            <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
                Đăng xuất
            </button>
            </Link>
        </div>
        
      <h1 className="text-2xl font-bold mb-4">Yêu Cầu Nghỉ Phép</h1>
      <form className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Họ tên:</label>
          <input type="text" className="w-full border border-gray-300 p-2" required />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700">Ngày bắt đầu:</label>
          <input type="date" className="w-full border border-gray-300 p-2" required />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Ngày kết thúc:</label>
          <input type="date" className="w-full border border-gray-300 p-2" required />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Lý do xin nghỉ:</label>
          <textarea className="w-full border border-gray-300 p-2" rows={4} required></textarea>
        </div>

        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Gửi Yêu Cầu
        </button>
      </form>
    </LayoutEmp>
  );
};

export default RequestLeave;
