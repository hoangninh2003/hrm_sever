import LayoutAdm from "@/pages/admin/layout-adm";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const EmployeeList = () => {
  const employees = [
    { id: 1, name: "Nguyễn Văn A", phone: "0123456789", dob: "01/01/1990", cccd: "123456789012", position: "Nhân viên" },
    { id: 2, name: "Trần Thị B", phone: "0987654321", dob: "02/02/1985", cccd: "123456789013", position: "Quản lý" },
    { id: 3, name: "Lê Văn C", phone: "0123456780", dob: "03/03/1992", cccd: "123456789014", position: "Nhân viên" },
  ];

  const handleDuyet = (id: number) => {
    console.log(`Duyệt phép cho nhân viên với ID: ${id}`);
  };

  const handleKhongDuyet = (id: number) => {
    console.log(`Nghỉ không phép cho nhân viên với ID: ${id}`);
  };

  return (
    <LayoutAdm>
      <h1 className="text-2xl font-bold mb-4">Danh sách duyệt phép</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-b text-left">Họ tên</th>
            <th className="py-2 px-4 border-b text-left">Số điện thoại</th>
            <th className="py-2 px-4 border-b text-left">Sinh ngày</th>
            <th className="py-2 px-4 border-b text-left">Số CCCD</th>
            <th className="py-2 px-4 border-b text-left">Chức vụ</th>
            <th className="py-2 px-4 border-b text-left">Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td className="py-2 px-4 border-b">{employee.name}</td>
              <td className="py-2 px-4 border-b">{employee.phone}</td>
              <td className="py-2 px-4 border-b">{employee.dob}</td>
              <td className="py-2 px-4 border-b">{employee.cccd}</td>
              <td className="py-2 px-4 border-b">{employee.position}</td>
              <td className="py-2 px-4 border-b text-center flex justify-center space-x-4">
                <FaCheckCircle 
                  className="text-green-600 cursor-pointer text-3xl" 
                  title="Duyệt phép" 
                  onClick={() => handleDuyet(employee.id)} 
                />
                <FaTimesCircle 
                  className="text-red-600 cursor-pointer text-3xl" 
                  title="Nghỉ không phép" 
                  onClick={() => handleKhongDuyet(employee.id)} 
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </LayoutAdm>
  );
};

export default EmployeeList;
