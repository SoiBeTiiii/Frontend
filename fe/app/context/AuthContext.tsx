// "use client";

// import { createContext, useContext, useState, useEffect } from "react";

// interface AuthContextType {
//   userName: string | null;
//   userPhone: string | null;
//   setUserName: (name: string | null) => void;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType>({
//   userName: null,
//   setUserName: () => {},
//   logout: () => {},
// });

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [userName, setUserName] = useState<string | null>(null);

//   useEffect(() => {
//     const storedName = localStorage.getItem("userName");
//     if (storedName) setUserName(storedName);
//   }, []);

//   const logout = () => {
//     localStorage.removeItem("userName");
//     setUserName(null);
//   };

//   return (
//     <AuthContext.Provider value={{ userName, setUserName, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
