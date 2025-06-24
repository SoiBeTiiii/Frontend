'use client';

import styles from '../css/WishlistDrawer.module.css';
import { MdClose } from 'react-icons/md';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WishlistDrawer({ isOpen, onClose }: WishlistDrawerProps) {
  return (
    <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`}>
      {/* Nền mờ có thể click */}
      <div className={styles.backdrop} onClick={onClose} />

      {/* Drawer trượt mượt */}
      <div className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.header}>
          <h3>Đã thích</h3>
          <button onClick={onClose} className={styles.closeBtn}>
            <MdClose size={24} />
          </button>
        </div>
        <div className={styles.content}>
          <div className={styles.item}>
            <img src="/images/prop.webp" alt="Wishlist Product" />
            <div>
              <p className={styles.name}>Son Tint Dưỡng Ẩm Mịn Môi</p>
              <div className={styles.price}>199,000₫</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
