import Image from "next/image";
import styles from "./page.module.css";
import pop from "../app/css/Popular.module.css";
import ProductListSlider from "./components/ProductListSlider";
import ServiceInfo from './components/ServiceInfo';
import BannerSlider from './components/BannerSlider';
import SuggestList from './components/SuggestList';
import BrandSlider from './components/BrandSlider';
import NewsSection from './components/NewsSection';
import IntroSlider from "./components/IntroSlider";
export default function Home() {
  return (
    
    <div>
                  <IntroSlider />

   
   <div className={pop.container}>
      <div className={pop.title}>
        <h2>Danh mục sản phẩm</h2>
      </div>

      <div className={pop.list}>
        <div className={pop.item}>
          <img src="../images/flash.png" alt="" />
          <p>Trang điểm</p>
        </div>
        <div className={pop.item}>
          <img src="../images/flash.png" alt="" />
          <p>Trang điểm</p>
        </div>
        <div className={pop.item}>
          <img src="../images/flash.png" alt="" />
          <p>Trang điểm</p>
        </div>
        <div className={pop.item}>
          <img src="../images/flash.png" alt="" />
          <p>Trang điểm</p>
        </div>
        <div className={pop.item}>
          <img src="../images/flash.png" alt="" />
          <p>Trang điểm</p>
        </div>
        <div className={pop.item}>
          <img src="../images/flash.png" alt="" />
          <p>Trang điểm</p>
        </div>
        <div className={pop.item}>
          <img src="../images/flash.png" alt="" />
          <p>Trang điểm</p>
        </div>
        <div className={pop.item}>
          <img src="../images/flash.png" alt="" />
          <p>Trang điểm</p>
        </div>
        <div className={pop.item}>
          <img src="../images/flash.png" alt="" />
          <p>Trang điểm</p>
        </div>
      </div>
     

    </div>

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
