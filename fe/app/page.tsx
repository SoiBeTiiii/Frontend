import Image from "next/image";
import styles from "./page.module.css";
import PopularCategories from "./components/PopularCategory";
import ProductListSlider from "./components/ProductListSlider";
import ServiceInfo from "./components/ServiceInfo";
import BannerSlider from "./components/BannerSlider";
import SuggestList from "./components/SuggestList";
import BrandSlider from "./components/BrandSlider";
import NewsSection from "./components/NewsSection";
import IntroSlider from "./components/IntroSlider";
import PromotionList from "./components/PromotionList";
import Slider from "./components/Slider"
import Banner from "./components/Banner";
export default function Home() {
  return (
    <div>
      <IntroSlider />

      <PopularCategories /> 
      <PromotionList />
      <Banner />
      {/* <Slider /> */}
      <ProductListSlider />
      {/* <ProductListSlider /> */}
      <ServiceInfo />
      {/* <BannerSlider /> */}
      <SuggestList />
      <BrandSlider />
      <NewsSection />
    </div>
  );
}
