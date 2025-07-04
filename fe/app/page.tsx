import Image from "next/image";
import styles from "./page.module.css";
import PopularCategories from "./components/PopularCategory";
import ProductListSlider from "./components/ProductListSlider";
import ServiceInfo from "./components/ServiceInfo";
import BannerSlider from "./components/BannerSlider";
import SuggestList from "./components/SuggestList";
import BrandSlider from "./components/BrandSlider";
import NewsSection from "./components/NewsSection";
import Sliders from "./components/IntroSlider";
// import { IntroSliders } from './components/IntroSlider';
export default function Home() {
  return (
    <div>
      <Sliders />
      {/* <IntroSliders /> */}

      <PopularCategories /> 

      <ProductListSlider />
      {/* <ProductListSlider /> */}
      <ServiceInfo />
      <BannerSlider />
      <SuggestList />
      <BrandSlider />
      <NewsSection news={[]} />
    </div>
  );
}
