
import "./globals.css";
import Slider from "./components/Slider";
import BannerSlider from "./components/BannerSection";
import HeaderSearch from "./components/HeaderSearch";
import IntroSlider from "./components/IntroSlider";
import Footer from "./components/Footer";
import ClientLayout from "./ClientLayout"; // thêm file này
import { CartProvider } from "./context/CartConText";
import { AuthProvider } from "./context/AuthContext"; 
export const metadata = {
  title: "My Mantine app",
  description: "I have followed setup instructions carefully",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
         <AuthProvider>
        <CartProvider>
          <ClientLayout>{children}</ClientLayout>
        </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
