'use client';
import { useEffect, useState } from 'react';
import ProductCard from './PromotionCard';
import styles from '../css/PromotionList.module.css';
import ButtonFromIntro from '../css/IntroSlider.module.css';
import { fetchProducts } from '../../lib/productApi';
import { fetchPromotions } from '../../lib/PromoApi'; // ✅ mới
import ProductCardProps from '../interface/PromotionCard';
import CountdownTimer from './CountDown';

export default function ProductListSlider() {
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [page, setPage] = useState(0);
  const ITEMS_PER_PAGE = 4;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Define the type for promotion objects
        type Promotion = {
          parentProduct: string;
          promotionName?: string;
          endDate?: string;
          soldQuantity?: number;
        };

        const [productData, promoData] = await Promise.all([
          fetchProducts(),
          fetchPromotions(),
        ]);

        // ✅ Convert promotion object to Set of variantIds
        const parentProductInPromo = new Set(
          Object.values(promoData as Record<string, Promotion>).map((item) => item.parentProduct)
        );

        // ✅ Lọc sản phẩm có parentProduct trùng với promotion
        const filteredProducts = productData.filter((product: any) =>
          parentProductInPromo.has(product.id)
        );

        // ✅ Gắn thêm thông tin promotion nếu cần
        const enriched = filteredProducts.map((product: any) => {
          const promo = Object.values(promoData as Record<string, Promotion>).find(
            (item) => item.parentProduct === product.id
          );

          return {
            ...product,
            promotionName: promo?.promotionName,
            endDate: promo?.endDate,
            sold: promo?.soldQuantity ?? product.sold,
          };
        });

        setProducts(enriched);
      } catch (err) {
        console.error('Lỗi khi fetch:', err);
      }
    };

    fetchData();
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
      <h2 className={styles.title}>Sản phẩm khuyến mãi</h2>
      {/* Optionally display the promotion name and end date from the first visible product */}
      {visibleProducts[0]?.promotionName && (
        <p className={styles.promoName}>{visibleProducts[0].promotionName}</p>
      )}
      {visibleProducts[0]?.endDate && (
        <CountdownTimer targetDate={visibleProducts[0].endDate} />
      )}
      <div className={styles.grid}>
        {visibleProducts.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            slug={p.slug ?? ''}
            name={p.name}
            price={p.price}
            originalPrice={p.originalPrice}
            image={p.image}
            sold={p.sold}
            discount={p.discount}
          />
        ))}
      </div>
      <div className={styles.controls}>
        <button className={styles.arrow} onClick={prev}>←</button>
        <button className={ButtonFromIntro.button}>Xem thêm</button>
        <button className={styles.arrow} onClick={next}>→</button>
      </div>
    </div>
  );
}
