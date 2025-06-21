"use client";

import { useState } from "react";
import styles from "../css/HeaderSearch.module.css";
import Link from 'next/link';
import {
  MdStore,
  MdEdit,
  MdPerson,
  MdFavorite,
  MdShoppingCart,
  MdSearch
} from "react-icons/md";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Top bar */}
      <div className={styles.topBar}>
        <p>
          FRESHIAN TRANG ĐIỂM THUẦN CHAY CAO CẤP · FREESHIP 15K ĐƠN TỪ 199K ·
          Mua online nhận nhanh tại cửa hàng · Giao nhanh 24H tại Tp. Hồ Chí Minh
        </p>
      </div>

      {/* Logo + Search + Icons */}
      <div className={styles.mainBar}>
        <div className={styles.logo}>EGOMall</div>
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="FREESHIP 0Đ đơn từ 399K"
          />
          <MdSearch
            style={{
              position: "absolute",
              left: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#888",
            }}
          />
        </div>
        <div className={styles.iconList}>
          <div className={styles.iconItem}>
            <MdStore size={20} />
            <p>Cửa hàng</p>
          </div>
          <div className={styles.iconItem}>
            <MdEdit size={20} />
            <p>Blog</p>
          </div>
          <Link href="/login" className={styles.iconLink}>
          <div className={styles.iconItem}>
            
            <MdPerson size={20} />
            <p>Đăng nhập</p>
          </div>
                      </Link>

          <div className={styles.iconItem}>
            <MdFavorite size={20} />
            <p>Đã thích</p>
          </div>
          <div className={styles.iconItem}>
            <MdShoppingCart size={20} />
            <p>Giỏ hàng</p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <nav className={styles.nav}>
        <ul>
          <li> Sản phẩm </li>
          <li className={styles.navItem}>
            Trang điểm ⌄
            <div className={styles.megaMenu}>
              <div className={styles.megaColumn}>
                <h4>TRANG ĐIỂM MẶT</h4>
                <span>Kem Nền</span>
                <span>Kem Lót</span>
                <span>Che Khuyết Điểm</span>
                <span>Phấn Má Hồng</span>
                <span>Phấn Nước Cushion</span>
                <span>Phấn Phủ</span>
                <span>Tạo Khối</span>
                <span>Kem nền BB / CC</span>
              </div>
              <div className={styles.megaColumn}>
                <h4>TRANG ĐIỂM MÔI</h4>
                <span>Son Thỏi</span>
                <span>Son Tint | Son Kem</span>
                <span>Son Bóng</span>
                <span>Son Dưỡng Môi</span>
              </div>
              <div className={styles.megaColumn}>
                <h4>TRANG ĐIỂM MẮT</h4>
                <span>Mascara</span>
                <span>Kẻ Chân Mày</span>
                <span>Phấn Mắt</span>
                <span>Kẻ Viền Mắt</span>
              </div>
            </div>
          </li>
          <li>Dưỡng da</li>
          <li>Chăm sóc cơ thể</li>
        </ul>
      </nav>
    </header>
  );
}
