"use client";

import { useEffect, useState } from "react";
import styles from "../css/HeaderSearch.module.css";
import Link from "next/link";
import CartDrawer from "./CartDrawer";
import WishlistDrawer from "./WishlistDrawer";
import { useCart } from "../context/CartConText";
import MobileMenu from "./MobileMenu";
import VoucherNotifier from "../components/VoucherNotifier";

import {
  MdMenu,
  MdStore,
  MdEdit,
  MdPerson,
  MdFavorite,
  MdShoppingCart,
  MdSearch,
} from "react-icons/md";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart } = useCart();
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 100) {
        setIsVisible(false); // scroll xuống
      } else {
        setIsVisible(true); // scroll lên
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <>
     <VoucherNotifier />
      <header
        className={`${styles.header} ${isVisible ? styles.show : styles.hide}`}
      >
       

        <div className={styles.topBar}>
          <p>
            FRESHIAN TRANG ĐIỂM THUẦN CHAY CAO CẤP · FREESHIP 15K ĐƠN TỪ 199K ·
            Mua online nhận nhanh tại cửa hàng · Giao nhanh 24H tại Tp. Hồ Chí
            Minh
          </p>
        </div>

        <div className={styles.mainBar}>
          <div
            className={styles.menuIcon}
            onClick={() => setMobileMenuOpen(true)}
          >
            <MdMenu size={24} />
          </div>

          <div className={styles.logo}>EGOMall</div>

          <div className={styles.searchBox}>
            <input type="text" placeholder="FREESHIP 0Đ đơn từ 399K" />
            <MdSearch className={styles.searchIcon} />
          </div>

          <div className={styles.iconList}>
            <div className={styles.iconItem}>
              <MdStore size={20} />
              <span>Cửa hàng</span>
            </div>
            <Link href="/blog" className={styles.iconLink}>
              <div className={styles.iconItem}>
                <MdEdit size={20} />
                <span>Blog</span>
              </div>
            </Link>
            <Link href="/login" className={styles.iconLink}>
              <div className={styles.iconItem}>
                <MdPerson size={20} />
                <span>Đăng nhập</span>
              </div>
            </Link>
            <div
              className={styles.iconItem}
              onClick={() => setWishlistOpen(true)}
            >
              <MdFavorite size={20} />
              <span>Đã thích</span>
            </div>
            <div className={styles.iconItem} onClick={() => setCartOpen(true)}>
              <div className={styles.cartWrapper}>
                <MdShoppingCart size={20} />
                {totalQuantity > 0 && (
                  <span className={styles.cartBadge}>{totalQuantity}</span>
                )}
              </div>
              <span>Giỏ hàng</span>
            </div>
          </div>
          <div className={styles.mobileRight}>
            <div
              className={styles.iconItem}
              onClick={() => setWishlistOpen(true)}
            >
              <MdFavorite size={20} />
            </div>
            <div className={styles.iconItem} onClick={() => setCartOpen(true)}>
              <div className={styles.cartWrapper}>
                <MdShoppingCart size={20} />
                {totalQuantity > 0 && (
                  <span className={styles.cartBadge}>{totalQuantity}</span>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Search Box */}
        <div className={styles.mobileSearchBox}>
          <input type="text" placeholder="FREESHIP 0Đ đơn từ 399K" />
          <MdSearch className={styles.searchIcon} />
        </div>

        <nav className={styles.nav}>
          <ul>
            <Link href="/">
              <li>Trang chủ</li>
            </Link>
            <Link href="/products">
              <li>Sản phẩm</li>
            </Link>
            <li className={styles.navItem}>
              Trang điểm ⌄
              <div className={styles.megaMenu}>
                <div className={styles.megaColumn}>
                  <h4>TRANG ĐIỂM MẶT</h4>
                  <span>Kem Nền</span>
                  <span>Kem Lót</span>
                  <span>Kem Lót</span>
                  <span>Kem Lót</span>
                  <span>Kem Lót</span>
                </div>
                <div className={styles.megaColumn}>
                  <h4>TRANG ĐIỂM MÔI</h4>
                  <span>Son Thỏi</span>
                  <span>Son Thỏi</span>
                  <span>Son Thỏi</span>
                  <span>Son Thỏi</span>
                  <span>Son Thỏi</span>
                </div>
                <div className={styles.megaColumn}>
                  <h4>TRANG ĐIỂM MẮT</h4>
                  <span>Mascara</span>
                </div>
              </div>
            </li>
            <li>Dưỡng da</li>
            <li>Chăm sóc cơ thể</li>
          </ul>
        </nav>
      </header>
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <WishlistDrawer
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
      />
      {mobileMenuOpen && (
        <MobileMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
