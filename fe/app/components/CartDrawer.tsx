'use client';

import styles from '../css/CartDrawer.module.css';
import { MdClose } from 'react-icons/md';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  return (
    <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`}>
      {/* Nền mờ đen có thể click để đóng */}
      <div className={styles.backdrop} onClick={onClose} />

      <div className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.header}>
          <h3>Giỏ hàng</h3>
          <button onClick={onClose} className={styles.closeBtn}>
            <MdClose size={24} />
          </button>
        </div>

        <div className={styles.content}>
          <div className={styles.item}>
            <img src="/images/prop.webp" alt="Product" />
            <div>
              <p className={styles.name}>
                [DEAL 22/6 - 25/6 GIÁ SỐC] PHẤN MÁ HỒNG DASIQUE...
              </p>
              <div className={styles.qty}>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <div className={styles.price}>235,000₫</div>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.total}>
            <span>TỔNG TIỀN:</span>
            <strong>235,000₫</strong>
          </div>
          <p className={styles.warning}>
            Giỏ hàng của bạn chưa đạt mức tối thiểu để thanh toán.
          </p>
          <button className={styles.checkoutBtn}>THANH TOÁN</button>
          <a className={styles.viewCart} href="/cart">
            Xem giỏ hàng
          </a>
        </div>
      </div>
    </div>
  );
}
