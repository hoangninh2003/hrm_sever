import LoginForm from "@/components/LoginForm";
import Image from "next/image";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start sm:flex-row sm:justify-between">
        {/* Phần bên trái - Giới thiệu */}
        <div className="sm:w-2/3">
          <Image
            className="dark:invert"
            src="/images/hoangninh-logo.png"
            alt="Hoàng Ninh"
            width={100}
            height={38}
            priority
          />
          <h1 className="text-2xl font-bold">Giới thiệu về Hoàng Ninh Company</h1>
          <p className="text-sm text-center sm:text-left">
            Hoàng Ninh là một công ty công nghệ thông tin chuyên cung cấp các giải pháp phần mềm cho doanh nghiệp. Chúng tôi cam kết mang đến những sản phẩm chất lượng cao, đáp ứng nhu cầu quản lý nhân sự, tối ưu hóa quy trình làm việc và nâng cao hiệu suất cho các tổ chức.
          </p>
          <p className="text-sm text-center sm:text-left">
            Với đội ngũ kỹ sư giàu kinh nghiệm và tận tâm, Hoàng Ninh luôn sẵn sàng hỗ trợ và đồng hành cùng khách hàng trong việc chuyển đổi số và phát triển bền vững.
          </p>
        </div>

        <div className="sm:w-1/3 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-4">Đăng Nhập</h1>
          <LoginForm/>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/about"
          target="_blank"
          rel="noopener noreferrer"
        >
          Giới thiệu
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/faq"
          target="_blank"
          rel="noopener noreferrer"
        >
          Câu hỏi thường gặp
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
        >
          Liên hệ
        </a>
      </footer>
    </div>
  );
}
