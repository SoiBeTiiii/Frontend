"use client";


import { createContext, useContext, useEffect, useState } from "react";
import { userInfo } from "../../lib/authApi"; // đường dẫn đúng
import { useRouter } from "next/navigation";
interface User {
  name: string;
  email: string;
  role: string;
  phone: string;
}

interface AuthContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: () => {},
  logout: () => {},
});


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Gọi API lấy thông tin người dùng nếu đã đăng nhập
    (async () => {
      try {
        const data = await userInfo();
        setUser(data); // ✅ Lưu thông tin user vào context
      } catch (err) {
        setUser(null); // Nếu chưa đăng nhập hoặc lỗi thì clear user
      }
    })();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);