// components/ProductCard.tsx
import styles from '../css/ProductCard.module.css';
import ProductCardProps from '../interface'


export default function ProductCard({
  name,
  price,
  originalPrice,
  image,
  sold,
  discount,
}: ProductCardProps) {
  return (
    <div className={styles.card}>
      <span className={styles.discount}>-{discount}%</span>
      <img src={image} alt={name} className={styles.image} />
      <p className={styles.brand}>WHOO</p>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.price}>
        {price.toLocaleString()}₫{" "}
        <span className={styles.original}>{originalPrice.toLocaleString()}₫</span>
      </p>
      <div className={styles.stars}>⭐⭐⭐⭐⭐ (0 đánh giá)</div>
      <div className={styles.progress}>
        <div className={styles.bar} style={{ width: `${sold}%` }} />
      </div>
      <p className={styles.sold}>{sold} sản phẩm đã bán</p>
      <div className={styles.actions}>
        <button className={styles.buy}>MUA NGAY</button>
        <button className={styles.cart}>🛒</button>
      </div>
    </div>
  );
}
