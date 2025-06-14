"use client";

import { useState } from "react";
import styles from "../css/HeaderSearch.module.css";
import {
  IconHome,
  IconUser,
  IconHeart,
  IconShoppingCart,
  IconNotes,
} from "@tabler/icons-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
     <header className={styles.header}>
      {/* Top bar */}
      <div className={styles.topBar}>
        <p>
          FRESHIAN TRANG ĐIỂM THUẦN CHAY CAO CẤP · FREESHIP 15K ĐƠN TỪ 199K · Mua online nhận nhanh tại cửa hàng · Giao nhanh 24H tại Tp. Hồ Chí Minh
        </p>
      </div>

      {/* Logo + Search + Icons */}
      <div className={styles.mainBar}>
        <div className={styles.logo}>EGOMall</div>
        <div className={styles.searchBox}>
          <input type="text" placeholder="🔍 FREESHIP 0Đ đơn từ 399K" />
        </div>
        <div className={styles.iconList}>
          <div className={styles.iconItem}><span>🏬</span><p>Cửa hàng</p></div>
          <div className={styles.iconItem}><span>📝</span><p>Blog</p></div>
          <div className={styles.iconItem}><span>👤</span><p>Đăng nhập</p></div>
          <div className={styles.iconItem}><span>❤️</span><p>Đã thích</p></div>
          <div className={styles.iconItem}><span>🛒</span><p>Giỏ hàng</p></div>
        </div>
      </div>

      {/* Menu */}
      <nav className={styles.nav}>
        <ul>
          <li>Sản phẩm</li>
          <li>Trang điểm ⌄</li>
          <li>Dưỡng da ⌄</li>
          <li>Chăm sóc cơ thể ⌄</li>
          <li>Thương hiệu ⌄</li>
          <li>Khuyến mãi ⌄</li>
        </ul>
      </nav>
    </header>
  );
}
