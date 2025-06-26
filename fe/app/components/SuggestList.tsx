'use client';

import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import styles from '../css/ProductListSlider.module.css';
import { fetchProducts } from '../../lib/productApi';
import ProductCardProps from '../interface/ProductCardProps';

const ITEMS_PER_PAGE = 8;

export default function ProductListSlider() {
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch((err) => {
        console.error('Lỗi khi fetch sản phẩm:', err);
      });
  }, []);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const next = () => setPage((prev) => (prev + 1) % totalPages);
  const prev = () => setPage((prev) => (prev - 1 + totalPages) % totalPages);

  const visibleProducts = products.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {visibleProducts.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
      <div className={styles.controls}>
        <button className={styles.arrow} onClick={prev}>←</button>
        <button className={styles.arrow} onClick={next}>→</button>
      </div>
    </div>
  );
}
