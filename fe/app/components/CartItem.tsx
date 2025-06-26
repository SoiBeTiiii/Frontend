'use client';
import styles from '../css/CartItem.module.css';
import { CartProduct } from '../context/CartConText';
import { useCart } from '../context/CartConText';
import { MdDelete } from 'react-icons/md';

export default function CartItem({ product }: { product: CartProduct }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className={styles.item}>
      <img src={product.image} alt={product.name} className={styles.image} />

      <div className={styles.details}>
        <p className={styles.name}>{product.name}</p>
        <span className={styles.option}>Số lượng:</span>
        <div className={styles.quantity}>
          <button
            onClick={() => decreaseQuantity(product.id)}
            className={styles.btn}
          >
            -
          </button>
          <input type="text" value={product.quantity} readOnly />
          <button
            onClick={() => increaseQuantity(product.id)}
            className={styles.btn}
          >
            +
          </button>
        </div>
      </div>

      <div className={styles.price}>
        <strong>{product.price.toLocaleString()}₫</strong>
        <s>{product.originalPrice.toLocaleString()}₫</s>
      </div>

      <button
        className={styles.removeBtn}
        onClick={() => removeFromCart(product.id)}
        title="Xóa sản phẩm"
      >
        <MdDelete size={20} />
      </button>
    </div>
  );
}
