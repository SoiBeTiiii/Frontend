// app/login/page.tsx
'use client';
import { useState } from 'react';
import styles from './Login.module.css';
import { useRouter } from 'next/navigation';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const loginWithGoogle = () => {
    alert('Đăng nhập bằng Google (chưa tích hợp)');
  };

  const loginWithFacebook = () => {
    alert('Đăng nhập bằng Facebook (chưa tích hợp)');
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleLogin} className={styles.form}>
        <h2 className={styles.title}>Đăng nhập</h2>

     

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

        <button type="submit" className={styles.button}>Đăng nhập</button>
   <div className={styles.socials}>
          <button type="button" className={styles.google} onClick={loginWithGoogle}>
            <FaGoogle /> Đăng nhập bằng Google
          </button>
          <button type="button" className={styles.facebook} onClick={loginWithFacebook}>
            <FaFacebookF /> Đăng nhập bằng Facebook
          </button>
        </div>
        <div className={styles.links}>
  <Link href="/forgot-password">Quên mật khẩu?</Link>
  <Link href="/register">Đăng ký</Link>
</div>

        
      </form>
    </div>
  );
}
