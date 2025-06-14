import Image from "next/image";
import styles from "./page.module.css";
import pop from "../app/css/Popular.module.css";

export default function Home() {
  return (
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
  );
}
