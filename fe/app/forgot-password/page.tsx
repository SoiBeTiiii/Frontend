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
    // TODO: Gửi yêu cầu gửi OTP tới email
    setStep(2);
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Xác minh OTP:', otp);
    // TODO: Xác minh OTP với backend
    setStep(3);
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('Mật khẩu không khớp!');
      return;
    }
    console.log('Đặt lại mật khẩu:', newPassword);
    // TODO: Gửi yêu cầu đổi mật khẩu
    alert('Đặt lại mật khẩu thành công!');
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2 className={styles.title}>Quên mật khẩu</h2>

        {step === 1 && (
          <>
            <input
              type="email"
              placeholder="Nhập email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button onClick={handleEmailSubmit} className={styles.button}>
              Gửi mã OTP
            </button>
          </>
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
              Xác minh mã OTP
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
  );
}
