'use client';
import { useState } from 'react';
import styles from './Login.module.css';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.leftPanel}>
          <h1>Chào mừng trở lại 👋</h1>
          <p>Khám phá các sản phẩm làm đẹp mới nhất từ EGOMall!</p>
          <img src="/images/login-illustration.svg" alt="Welcome" />
        </div>

        <form onSubmit={handleLogin} className={styles.form}>
          <h2>Đăng nhập</h2>

          <input
            type="email"
            placeholder="Email của bạn"
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

          <button type="submit" className={styles.button}>
            Đăng nhập
          </button>

          <div className={styles.socials}>
            <button type="button" className={styles.google}>
              <FaGoogle /> Google
            </button>
            <button type="button" className={styles.facebook}>
              <FaFacebookF /> Facebook
            </button>
          </div>

          <div className={styles.links}>
            <Link href="/forgot-password">Quên mật khẩu?</Link>
            <Link href="/register">Tạo tài khoản</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
