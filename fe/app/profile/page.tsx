'use client';
import { useState } from 'react';
import styles from './Profile.module.css';

export default function ProfilePage() {
  const [form, setForm] = useState({
    firstName: 'Hoài Nam',
    lastName: 'Nam',
    email: 'mainam531@gmail.com',
    phone: '84762417475',
  });

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
          <strong>Hoài Nam Nam</strong>
          <div className={styles.phone}>SĐT tích điểm: {form.phone}</div>
        </div>
        <nav className={styles.menu}>
          <a className={styles.active}>Tài khoản</a>
          <a>Đơn hàng</a>
          <a>Địa chỉ giao nhận</a>
          <a>Ưu đãi của tôi</a>
          <a>Câu hỏi của tôi</a>
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
              <label>Họ *</label>
              <input name="lastName" value={form.lastName} onChange={handleChange} required />
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
