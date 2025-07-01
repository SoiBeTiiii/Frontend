'use client';

import { useEffect, useState } from 'react';
import styles from './Profile.module.css';
import { userInfo } from '../../lib/authApi'; // nhớ import đúng path

export default function ProfilePage() {
  const [form, setForm] = useState({
    firstName: '',
    email: '',
    phone: '',
  });

  const [fullName, setFullName] = useState(''); // cho sidebar

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await userInfo();
        setForm({
          firstName: user.name || '',
          email: user.email || '',
          phone: user.phone || '',
        });
        setFullName(user.name || '');
      } catch (error) {
        console.error("Lỗi lấy thông tin người dùng:", error);
      }
    };

    fetchUser();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Thông tin cập nhật:', form);
    // TODO: gọi API cập nhật thông tin người dùng
  };

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.card}>
          <div className={styles.avatar}>👤</div>
          <strong>{fullName}</strong>
        </div>
        <nav className={styles.menu}>
          <a className={styles.active}>Tài khoản</a>
          <a>Đơn hàng</a>
          <a>Địa chỉ giao nhận</a>
          <a>Ưu đãi của tôi</a>
          <a>Đổi mật khẩu</a>
        </nav>
      </aside>

      <main className={styles.main}>
        <h2 className={styles.title}>Tài khoản</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.grid}>
            <div>
              <label>Tên *</label>
              <input name="firstName" value={form.firstName} onChange={handleChange} required />
            </div>
            <div>
              <label>Email *</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} required />
            </div>
            <div>
              <label>Số điện thoại *</label>
              <input name="phone" value={form.phone} onChange={handleChange} required />
            </div>
          </div>
          <button type="submit" className={styles.saveButton}>Lưu</button>
        </form>
      </main>
    </div>
  );
}
