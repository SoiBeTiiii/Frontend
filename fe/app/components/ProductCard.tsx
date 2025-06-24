// components/ProductCard.tsx
import { FaShoppingCart } from 'react-icons/fa';
import styles from '../css/ProductCard.module.css';
import ProductCardProps from '../interface/ProductCardProps';
import Link from 'next/link';
import { slugify } from "../utils/slug"

export default function ProductCard({
  
  name,
  price,
  originalPrice,
  image,
  sold,
  discount,
}: ProductCardProps) {
   const slug = slugify(name ?? "");

  
  return (
    <Link href={`/products/${slug}`}>
    <div className={styles.card}>
      <span className={styles.discount}>-{discount}%</span>
      <img src={image} alt={name} className={styles.image} />

      <p className={styles.brand}>WHOO</p>
      <h3 className={styles.name}>{name}</h3>

      <p className={styles.price}>
        {(price !== undefined ? price.toLocaleString() : '0')}₫{' '}
        <span className={styles.original}>
          {originalPrice !== undefined ? originalPrice.toLocaleString() : '0'}₫
        </span>
      </p>

      <div className={styles.stars}>☆☆☆☆☆ <span>(0 đánh giá)</span></div>

      <div className={styles.progress}>
        <div className={styles.bar} style={{ width: `${sold}%` }}></div>
      </div>
      <p className={styles.sold}>{sold} sản phẩm đã bán</p>

      <div className={styles.actions}>
        <button className={styles.buy}>MUA NGAY</button>
        <button className={styles.cart}>
          <FaShoppingCart />
        </button>
      </div>
    </div>
    </Link>
  );
  
}
