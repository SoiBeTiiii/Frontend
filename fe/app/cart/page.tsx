"use client";

import styles from "./Cart.module.css";
import CartItem from "../components/CartItem";
import ProductCardSmall from "../components/ProductCardSmall";
import { useState } from "react";
import { useCart } from "../context/CartConText";
const recommendedProducts = [
  {
    id: 1,
    image: "/images/prop.webp",
    name: "Khăn Ướt Vệ Sinh Cho Nữ BEFOU",
    price: 29000,
    originalPrice: 45000,
    discountPercent: 36,
  },
  {
    id: 2,
    image: "/images/prop.webp",
    name: "Cọ Trang Điểm Tán Kem Nền",
    price: 39000,
    originalPrice: 49000,
    discountPercent: 20,
  },
  {
    id: 3,
    image: "/images/prop.webp",
    name: "Cọ Tán Son Môi Jary",
    price: 15000,
    originalPrice: 25000,
    discountPercent: 40,
  },
  {
    id: 4,
    image: "/images/prop.webp",
    name: "Mascara Dài Mi Browit",
    price: 99000,
    originalPrice: 195000,
    discountPercent: 49,
  },
];

export default function CartPage() {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  const [note, setNote] = useState("");
  const [invoice, setInvoice] = useState(false);
  const { cart } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const originalTotal = cart.reduce((sum, item) => sum + item.originalPrice * item.quantity, 0);
  const discount = originalTotal - subtotal;
  const total = subtotal;

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.banner}>
          <div>
            Đơn hàng 99k Son <strong>Được Khắc Son Miễn Phí</strong>
          </div>
          <div>
            Đơn hàng Trên 99k <strong>Freeship Nội Thành</strong>
          </div>
          <div>
            <strong>Hỗ trợ đổi trả trong 7 ngày</strong>
          </div>
        </div>

        <h2>Giỏ hàng:</h2>
        <hr className={styles.divider} />

        {cart.length === 0 ? (
          <p>Giỏ hàng của bạn đang trống.</p>
        ) : (
          cart.map((item) => <CartItem key={item.id} product={item} />)
        )}

        <h3 className={styles.recommendTitle}>Bạn có cần thêm?</h3>
        <div className={styles.recommend}>
          {recommendedProducts.map((p) => (
            <ProductCardSmall key={p.id} product={p} />
          ))}
        </div>
      </div>

      <div className={styles.right}>
        <h3>Thông tin đơn hàng</h3>
        <div className={styles.summary}>
          <div>
            <span>Tạm tính:</span>
            <strong>{subtotal.toLocaleString()}₫</strong>
          </div>
          <div>
            <span>Giá giảm:</span>
            <strong className={styles.discount}>{discount.toLocaleString()}₫</strong>
          </div>
          <div>
            <span>Tổng cộng:</span>
            <strong className={styles.total}>{total.toLocaleString()}₫</strong>
          </div>
        </div>

        <div className={styles.noteBox}>
          <label>Ghi chú đơn hàng</label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Ghi chú"
          />
        </div>

        <label className={styles.checkbox}>
          <input
            type="checkbox"
            checked={invoice}
            onChange={(e) => setInvoice(e.target.checked)}
          />
          Thông tin xuất hoá đơn
        </label>

        <button className={styles.checkout}>THANH TOÁN NGAY</button>
        <div className={styles.back}>↩ Tiếp tục mua hàng</div>
      </div>
    </div>
  );
}
