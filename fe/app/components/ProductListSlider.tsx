'use client';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import styles from '../css/ProductListSlider.module.css';
import ButtonFromIntro from '../css/IntroSlider.module.css';
import { fetchProducts } from '../../lib/productApi';
import ProductCardProps from '../interface/ProductCardProps';

export default function ProductListSlider() {
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [page, setPage] = useState(0);
  const ITEMS_PER_PAGE = 4;

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        const productsWithId = data.map((item, index) => ({
          ...item,
          id: item.id ?? index, 
        }));
        setProducts(productsWithId);
      })
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
    <>
    <div className={styles.wrapper}>  
      <h2 className={styles.title}>Sản phẩm nổi bật</h2>
      <div className={styles.grid}>
        {visibleProducts.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            slug={p.slug}
            name={p.name}
            price={p.price}
            originalPrice={p.originalPrice}
            image={p.image}
            sold={p.sold}
            discount={p.discount}
            rating={p.rating}
            type={p.type}
            type_skin={p.type_skin}
          />
        ))}
      </div>
      <div className={styles.controls}>
        <button className={styles.arrow} onClick={prev}>←</button>
        <button className={ButtonFromIntro.button}>Xem Thêm</button>
        <button className={styles.arrow} onClick={next}>→</button>
      </div>
    </div>
    </>
  );
}
