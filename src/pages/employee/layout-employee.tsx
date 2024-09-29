import { ReactNode, useEffect, useState } from 'react';
import './employee.css';

interface Employee {
  _id: string;
  phone: string;
  pass: string;
  fullname: string;
  birth: string;
  adress: string;
  office: string;
  status: boolean;
}

interface LayoutEmpProps {
  children: ReactNode;
}

const LayoutEmp = ({ children }: LayoutEmpProps) => {
  const [employee, setEmployee] = useState<Employee | null>(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      const res = await fetch('/api/employee');
      const data = await res.json();
      setEmployee(data.employee);
    };

    fetchEmployee();
  }, []);

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-4">
        <div className="info-container mb-4">
          <div className="info-header">Thông tin cá nhân</div>
          <div className="info-grid text-gray-700">
            <div className="info-item">Họ tên: <strong>{employee.fullname}</strong></div>
            <div className="info-item">Số điện thoại: <strong>{employee.phone}</strong></div>
            <div className="info-item">Sinh ngày: <strong>{employee.birth}</strong></div>
            <div className="info-item">Địa chỉ: <strong>{employee.adress}</strong></div>
            <div className="info-item">Chức vụ: <strong>{employee.office}</strong></div>
            <div className="info-item">Trạng thái: <strong>{employee.status ? 'Đang làm việc' : 'Nghỉ việc'}</strong></div>
          </div>
        </div>

        <main>
          {children}
        </main>
      </div>
    </div>
  );
};

export default LayoutEmp;
