// app/social-callback/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { userInfo } from "../../lib/authApi";
import { useAuth } from "../context/AuthContext";

export default function SocialCallbackPage() {
  const router = useRouter();
  const { setUser } = useAuth();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await userInfo(); 
        setUser(user);
        router.push("/");
      } catch (err) {
        console.error("Social login failed:", err);
        router.push("/login"); 
      }
    };

    fetchUser();
  }, [router, setUser]);

  return <p style={{ padding: "100px", textAlign: "center" }}>Đang xử lý đăng nhập...</p>;
}
