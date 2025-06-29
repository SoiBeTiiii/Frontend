'use client';
import { FaShoppingCart } from "react-icons/fa";
import styles from "../css/PromotionCard.module.css";
import ProductCardProps from "../interface/ProductCardProps";
import Link from "next/link";
import { slugify } from "../utils/slug";
import { useCart } from "../context/CartConText";
import CountdownTimer from "./CountDown"; // 👈 nhớ tạo file này riêng

export default function PromotionCard({
  id,
  name,
  price,
  originalPrice,
  image,
  sold,
  rating,
  type,
  type_skin,
  discount

}: ProductCardProps & { promotionName?: string; }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id,
      name: name ?? "",
      image: image ?? "",
      price: price ?? 0,
      originalPrice: originalPrice ?? 0,
      discount: discount ?? 0,
      quantity: 1,
    });
  };

  const slug = slugify(name ?? "");

  return (
    <Link href={`/products/${slug}`}>
      <div className={styles.card}>
        {/* {discount && <span className={styles.discount}>-{discount}%</span>} */}
        <img src={image} alt={name} className={styles.image} />
        <p className={styles.brand}>WHOO</p>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.price}>
          {(price ?? 0).toLocaleString()}₫{" "}
          <span className={styles.original}>
            {(originalPrice ?? 0).toLocaleString()}₫
          </span>
        </p>

        <div className={styles.stars}>
          ☆☆☆☆☆ <span>(0 đánh giá)</span>
        </div>

        <div className={styles.progress}>
          <div className={styles.bar} style={{ width: `${sold ?? 0}%` }}></div>
        </div>
        <p className={styles.sold}>{sold ?? 0} sản phẩm đã bán</p>

        <div className={styles.actions}>
          <button className={styles.buy}>MUA NGAY</button>
          <button
            className={styles.cart}
            onClick={(e) => {
              e.preventDefault();
              handleAddToCart();
            }}
          >
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </Link>
  );
}
