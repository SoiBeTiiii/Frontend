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
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    if (slug) {
      fetchProductBySlug(slug as string).then(setProduct);
    }
  }, [slug]);

  const handleBuyNow = (product: ProductDetail, quantity: number) => {
    console.log("Mua ngay:", product.name, "Số lượng:", quantity);
  };

  const handleAddToCart = (product: ProductDetail, quantity: number) => {
    console.log("Thêm vào giỏ:", product.name, "Số lượng:", quantity);
  };

  if (!product) return <p>Đang tải sản phẩm...</p>;

  return (
    <>
      <main className={styles["product-container"]}>
        <section className={styles["product-gallery"]}>
          <figure>
            <img src={product.image} className={styles["main-image"]} alt={product.name} />
            <figcaption className={styles["thumbnails"]}>
              {product.variants.map((v, idx) => (
                <img key={idx} src={v.image} alt={`thumb-${idx}`} />
              ))}
            </figcaption>
          </figure>
        </section>

        <section className={styles["product-info"]}>
          <header>
            <div className={styles["brand"]}>WHOO</div>
            <h1 className={styles["product-name"]}>{product.name}</h1>
            <div className={styles["rating"]}>☆☆☆☆☆ <span>(0 đánh giá)</span></div>
            <div className={styles["sku"]}>
              Tình trạng: <span className={styles["in-stock"]}>{product.status}</span> |
              Mã SKU: <span className={styles["sku-value"]}>{product.variants?.[0]?.sku}</span>
            </div>
          </header>

          <div className={styles["price"]}>
            <strong>{product.variants?.[0]?.sale_price.toLocaleString()}₫</strong>
            <span className={styles["old-price"]}>{product.variants?.[0]?.price.toLocaleString()}₫</span>
            <span className={styles["discount"]}>
              -{Math.round(100 - (product.variants?.[0]?.sale_price * 100) / product.variants?.[0]?.price)}%
            </span>
            <div className={styles["save"]}>
              (Tiết kiệm: {(product.variants?.[0]?.price - product.variants?.[0]?.sale_price).toLocaleString()}₫)
            </div>
          </div>

          <div className={styles["quantity"]}>
            <label htmlFor="quantity-input">Số lượng:</label>
            <button aria-label="Giảm số lượng" onClick={() => setQuantity(prev => Math.max(1, prev - 1))}>-</button>
            <input id="quantity-input" type="text" value={quantity} readOnly />
            <button aria-label="Tăng số lượng" onClick={() => setQuantity(prev => prev + 1)}>+</button>
          </div>

          <div className={styles["actions"]}>
            <button className={styles["buy-now"]} onClick={() => handleBuyNow(product, quantity)}>Mua ngay</button>
            <button className={styles["add-cart"]} onClick={() => handleAddToCart(product, quantity)}>Thêm vào giỏ</button>
          </div>

          <div className={styles["payment-methods"]} aria-label="Phương thức thanh toán">
            <img src="https://placehold.co/60x30?text=Visa" alt="Thanh toán bằng Visa" />
            <img src="https://placehold.co/60x30?text=Master" alt="MasterCard" />
            <img src="https://placehold.co/60x30?text=ZaloPay" alt="ZaloPay" />
            <img src="https://placehold.co/60x30?text=Momo" alt="Momo" />
            <img src="https://placehold.co/60x30?text=VNPay" alt="VNPay" />
          </div>

          <ul className={styles["features"]}>
            <li>🚚 Giao hàng toàn quốc</li>
            <li>🎁 Tích điểm tất cả sản phẩm</li>
            <li>💸 Giảm giá trên mỗi đơn hàng</li>
            <li>🔒 Cam kết chính hãng</li>
          </ul>
        </section>
      </main>

      <section className={styles["product-details"]}>
        <h2 className={styles["tab-title"]}>Thông tin sản phẩm</h2>
        <article className={styles["tab-content"]}>
          <h3>{product.name}</h3>
          <p>{product.description || "Đang cập nhật mô tả sản phẩm..."}</p>
          <ul>
            <li>1 tuýp chống nắng 50ml + 25ml</li>
            <li>1 nước hoa hồng dưỡng trắng whoo 20ml</li>
            <li>1 sữa dưỡng trắng whoo 20ml</li>
          </ul>
        </article>
      </section>

      <section className={styles["review-section"]}>
        <h2>Đánh giá</h2>
        <div className={styles["stars"]}>☆☆☆☆☆ <span>(0 đánh giá)</span></div>

        <article className={styles["review-box"]}>
          <div className={styles["avatar"]} aria-hidden="true"></div>
          <div className={styles["review-info"]}>
            <strong>Nguyễn Văn A</strong>
            <div className={styles["comment-line"]} aria-hidden="true"></div>
          </div>
        </article>

        <form className={styles["write-review"]}>
          <label htmlFor="review">Nhập đánh giá của bạn:</label>
          <input type="text" id="review" placeholder="Nhập đánh giá của bạn..." />
          <button type="submit">Viết đánh giá</button>
        </form>
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
              discount={Math.round(100 - (rel.sale_price * 100) / rel.price)}
              id={0}
            />
          ))}
        </div>
      </section>
    </>
  );
}
