import "./globals.css";
import Slider from "./components/Slider";
import BannerSlider from "./components/BannerSlider";
import HeaderSearch from "./components/HeaderSearch";
import IntroSlider from "./components/IntroSlider";
import Footer from "./components/Footer";
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
    <html lang="en" >
      <head>
      </head>
      <body>
          <HeaderSearch /> 
          <IntroSlider />
          {/* Uncomment the line below to use the BannerSlider component */}
          {/* <BannerSlider /> */}
          {/* Uncomment the line below to use the Slider component */}
          {/* <Slider /> */}
          {children}
          <Footer />
      </body>
    </html>
  );
}
