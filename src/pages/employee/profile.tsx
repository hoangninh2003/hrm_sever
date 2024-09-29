import LayoutEmp from "@/pages/employee/layout-employee";
import Link from "next/link";

const EmployeeProfile = () => {
  return (
    <LayoutEmp>
      <div className="flex gap-4 mb-4">
        <Link href="/employee/request-leave">
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Gửi yêu cầu nghỉ phép
          </button>
        </Link>
        <Link href="/">
          <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
            Đăng xuất
          </button>
        </Link>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Bảng Lương</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b text-left">Tháng</th>
              <th className="py-2 px-4 border-b text-left">Lương Cơ Bản</th>
              <th className="py-2 px-4 border-b text-left">Phụ Cấp</th>
              <th className="py-2 px-4 border-b text-left">Sản lượng</th>
              <th className="py-2 px-4 border-b text-left">Bảo hiểm xã hội</th>
              <th className="py-2 px-4 border-b text-left">Tạm ứng</th>
              <th className="py-2 px-4 border-b text-left">Nghĩ phép</th>
              <th className="py-2 px-4 border-b text-left">Nghĩ không phép</th>
              <th className="py-2 px-4 border-b text-left">Thuế thu nhập</th>
              <th className="py-2 px-4 border-b text-left">Tổng tiền</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Tháng 1/2024</td>
              <td className="py-2 px-4 border-b">10,000,000 VNĐ</td>
              <td className="py-2 px-4 border-b">2,000,000 VNĐ</td>
              <td className="py-2 px-4 border-b">500,000 VNĐ</td>
              <td className="py-2 px-4 border-b">1,500,000 VNĐ</td>
              <td className="py-2 px-4 border-b">1,000,000 VNĐ</td>
              <td className="py-2 px-4 border-b">1 ngày</td>
              <td className="py-2 px-4 border-b">1 ngày</td>
              <td className="py-2 px-4 border-b">1,000,000 VNĐ</td>
              <td className="py-2 px-4 border-b">10,000,000 VNĐ</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Tháng 2/2024</td>
              <td className="py-2 px-4 border-b">10,000,000 VNĐ</td>
              <td className="py-2 px-4 border-b">1,500,000 VNĐ</td>
              <td className="py-2 px-4 border-b">600,000 VNĐ</td>
              <td className="py-2 px-4 border-b">1,500,000 VNĐ</td>
              <td className="py-2 px-4 border-b">800,000 VNĐ</td>
              <td className="py-2 px-4 border-b">2 ngày</td>
              <td className="py-2 px-4 border-b">1 ngày</td>
              <td className="py-2 px-4 border-b">800,000 VNĐ</td>
              <td className="py-2 px-4 border-b">9,900,000 VNĐ</td>
            </tr>
          </tbody>
        </table>
      </div>
    </LayoutEmp>
  );
};

export default EmployeeProfile;
