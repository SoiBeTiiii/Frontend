'use client';
import { useState } from 'react';
import styles from './Register.module.css';
import Link from 'next/link';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register info:', { name, email, password, phone });
  };

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
