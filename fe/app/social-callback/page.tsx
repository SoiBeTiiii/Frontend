// app/social-callback/page.tsx
'use client';
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SocialCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('token');
    const user = searchParams.get('user');

    if (token) {
      localStorage.setItem('token', token); // hoặc lưu token vào context
      alert('Đăng nhập bằng mạng xã hội thành công!');
      router.push('/');
    } else {
      alert('Đăng nhập thất bại!');
      router.push('/login');
    }
  }, [router, searchParams]);

  return <p>Đang xác minh tài khoản...</p>;
}
