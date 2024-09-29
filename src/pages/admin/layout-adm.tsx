import Link from "next/link";
import { UsersIcon, DocumentIcon } from '@heroicons/react/24/outline'; // Cập nhật đường dẫn
import './admin.css';

const LayoutAdmin = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>
        <nav className="mt-6">
          <ul>
            <li className="flex items-center p-4 hover:bg-gray-700">
              <UsersIcon className="h-6 w-6 mr-2" aria-hidden="true" />
              <Link href="/admin/index">Quản lý Nhân viên</Link>
            </li>
            <li className="flex items-center p-4 hover:bg-gray-700">
              <DocumentIcon className="h-6 w-6 mr-2" aria-hidden="true" />
              <Link href="/admin/leaves">Quản lý Nghỉ phép</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Trang quản trị</h2>
          <Link href="/">
            <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
              Đăng xuất
            </button>
          </Link>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default LayoutAdmin;
