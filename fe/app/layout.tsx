import "./globals.css";
import Slider from "./components/Slider";
import BannerSlider from "./components/BannerSlider";
import HeaderSearch from "./components/HeaderSearch";
import IntroSlider from "./components/IntroSlider";
import Footer from "./components/Footer";
import ClientLayout from "./ClientLayout"; // thêm file này
import { CartProvider } from "./context/CartConText";
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
        <CartProvider>
          <ClientLayout>{children}</ClientLayout>
        </CartProvider>
      </body>
    </html>
  );
}
