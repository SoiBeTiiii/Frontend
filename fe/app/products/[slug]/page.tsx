"use client";
import styles from "./productDetail.module.css";
import ProductCard from "../../components/ProductCard";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchProductBySlug } from "../../../lib/productApi";
import ProductCardProps from "../../interface/ProductCardProps";
import { ProductDetail } from "@/app/interface/ProductDetail";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState<ProductDetail | null>(null);

  useEffect(() => {
    if (slug) {
      fetchProductBySlug(slug as string).then(setProduct);
    }
  }, [slug]);

  if (!product) return <p>Đang tải sản phẩm...</p>;

  return (
    <>
      <section className={styles["product-detail"]}>
        <div className={styles["product-images"]}>
          <img src={product.image} alt={product.name} />
          <div className={styles["thumbnail-list"]}>
            {product.variants.map((v, idx) => (
              <img key={idx} src={v.image} alt={`thumb-${idx}`} />
            ))}
          </div>
        </div>

        <div className={styles["product-info"]}>
          <h1>{product.name}</h1>
          <div className={styles["product-price"]}>
            {product.variants?.[0]?.sale_price.toLocaleString()}₫
            <span className={styles["original-price"]}>
              {product.variants?.[0]?.price.toLocaleString()}₫
            </span>
            <span className={styles["discount"]}>
              {Math.round(
                100 -
                  (product.variants?.[0]?.sale_price * 100) /
                    product.variants?.[0]?.price
              )}
              %
            </span>
          </div>

          <p>Mã SKU: {product.variants?.[0]?.sku}</p>
          <p>Tình trạng: {product.status}</p>
          <div className={styles["variant-select"]}>
            <label htmlFor="quantity">Số lượng:</label>
            <select id="quantity">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>

          <div className={styles["variant-select"]}>
            <button className={styles["btn-buy-now"]}>Mua ngay</button>
            <button className={styles["btn-add-cart"]}>Thêm vào giỏ</button>
          </div>

          <ul className={styles["product-meta"]}>
            <li>Giao hàng 24h nội thành</li>
            <li>Miễn phí đơn từ 199K</li>
            <li>Cam kết chính hãng</li>
          </ul>
        </div>
      </section>

      <section className={styles["related-products"]}>
  <h2>Sản phẩm liên quan</h2>
  <div className={styles["related-grid"]}>
    {product.related.map((rel, idx) => (
      <ProductCard
        key={idx}
        slug={rel.slug}
        name={rel.name}
        image={rel.image}
        price={rel.sale_price}
        originalPrice={rel.price}
        sold={10}
        discount={Math.round(100 - (rel.sale_price * 100) / rel.price)} id={0}      />
    ))}
  </div>
</section>
    </>
  );
}
