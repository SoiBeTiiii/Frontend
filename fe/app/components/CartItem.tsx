import styles from '../css/CartItem.module.css';

export default function CartItem() {
  return (
    <div className={styles.item}>
      <img src="/images/prop.webp" alt="product" className={styles.image} />
      <div className={styles.details}>
        <p className={styles.name}>[DEAL 22/6] Phấn Má Hồng Dasique</p>
        <span className={styles.option}>05 Blush Pink</span>
        <div className={styles.quantity}>
          <button>-</button>
          <input type="text" value="1" readOnly />
          <button>+</button>
        </div>
      </div>
      <div className={styles.price}>
        <strong>235,000₫</strong>
        <s>330,000₫</s>
      </div>
    </div>
  );
}
