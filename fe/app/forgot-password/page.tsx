'use client';
import { useState } from 'react';
import styles from './ForgotPassword.module.css';

export default function ForgotPasswordPage() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Send OTP to:', email);
    setStep(2);
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Verify OTP:', otp);
    setStep(3);
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('Mật khẩu không khớp!');
      return;
    }
    console.log('New password:', newPassword);
    alert('Đặt lại mật khẩu thành công!');
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.left}>
          <h1>Khôi phục mật khẩu 🔐</h1>
          <p>Chúng tôi sẽ giúp bạn lấy lại quyền truy cập nhanh chóng.</p>
          <img src="/images/reset-password.svg" alt="Reset Password" />
        </div>

        <form className={styles.form}>
          <h2 className={styles.title}>Quên mật khẩu</h2>

          {step <= 2 && (
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={step > 1}
            />
          )}

          {step === 1 && (
            <button onClick={handleEmailSubmit} className={styles.button}>
              Gửi mã OTP
            </button>
          )}

          {step === 2 && (
            <>
              <input
                type="text"
                placeholder="Nhập mã OTP"
                className={styles.input}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              <button onClick={handleOtpSubmit} className={styles.button}>
                Xác minh OTP
              </button>
            </>
          )}

          {step === 3 && (
            <>
              <input
                type="password"
                placeholder="Mật khẩu mới"
                className={styles.input}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
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
              <button onClick={handleResetPassword} className={styles.button}>
                Đặt lại mật khẩu
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
