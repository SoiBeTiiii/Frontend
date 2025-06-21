// components/ProductListSlider.tsx
'use client';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import styles from '../css/ProductListSlider.module.css';

const products = new Array(12).fill(0).map((_, i) => ({
  name: 'Kem Tẩy Trang Whoo Gongjinhyang Facial Cream Cleanser 210ml ...',
  price: 650000,
  originalPrice: 880000,
  image: 'images/prop.webp',
  sold: 30,
  discount: 57,
  rating: 4.5, // Add a default rating value
}));

const ITEMS_PER_PAGE = 8;

export default function ProductListSlider() {
  const [page, setPage] = useState(0);
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
        {visibleProducts.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
      <div className={styles.controls}>
    <button className={styles.arrow} onClick={prev}>←</button>
    <button className={styles.arrow} onClick={next}>→</button>
  </div>
    </div>
  );
}
