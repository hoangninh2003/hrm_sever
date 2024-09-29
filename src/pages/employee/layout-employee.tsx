

import './employee.css';

const LayoutEmp = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-4">
        <div className="info-container mb-4">
          <div className="info-header">Thông tin cá nhân</div>
          <div className="info-grid text-gray-700">
            <div className="info-item">Họ tên: <strong>Nguyễn Văn A</strong></div>
            <div className="info-item">Số điện thoại: <strong>0123456789</strong></div>
            <div className="info-item">Sinh ngày: <strong>01/01/1990</strong></div>
            <div className="info-item">Địa chỉ: <strong>Hà Nội, Việt Nam</strong></div>
            <div className="info-item">Số CCCD: <strong>123456789012</strong></div>
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
