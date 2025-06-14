import "./globals.css";
import Slider from "./components/Slider";
import ProductListSlider from "./components/ProductListSlider";

import HeaderSearch from "./components/HeaderSearch";
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
          <Slider />
          {children}
                     <ProductListSlider />
                     <ProductListSlider />

      </body>
    </html>
  );
}
