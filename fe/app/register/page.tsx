"use client";
import { useState } from "react";
import styles from "./Register.module.css";
import Link from "next/link";
import { register } from "../../lib/authApi";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");

  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Mật khẩu xác nhận không khớp!");
      return;
    }

    try {
      const res = (await register({
        name,
        email,
        password,
        phone,
        confirmPassword,
      })) as { success: boolean; message?: string };

      if (res.success) {
        alert("Đăng ký thành công! Vui lòng kiểm tra email để xác nhận OTP");
        localStorage.setItem("verify_email", email); // 🔧 luôn lưu email
        router.push("/verify-otp");
      } else {
        if (res.message?.includes("OTP đã được gửi")) {
          alert(res.message);
          localStorage.setItem("verify_email", email); // ✅ vẫn lưu nếu OTP đã được gửi
          router.push("/verify-otp");
        } else {
          alert("Đăng ký thất bại: " + res.message);
        }
      }
    } catch (err) {
      alert("Đã có lỗi xảy ra khi đăng ký");
      console.error(err);
    }
  };

  // ✅ return phải nằm ngoài handleRegister, tức ngoài try/catch
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.leftPanel}>
          <h1>Tạo tài khoản mới ✨</h1>
          <p>Gia nhập cộng đồng yêu làm đẹp và nhận ưu đãi độc quyền!</p>
          <img src="/images/register-illustration.svg" alt="Register" />
        </div>

        <form onSubmit={handleRegister} className={styles.form}>
          <h2>Đăng ký</h2>

          <input
            type="text"
            placeholder="Họ và tên"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Xác nhận mật khẩu"
            className={styles.input}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Số điện thoại"
            className={styles.input}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <button type="submit" className={styles.button}>
            Tạo tài khoản
          </button>

          <p className={styles.link}>
            Đã có tài khoản? <Link href="/login">Đăng nhập</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
