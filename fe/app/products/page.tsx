"use client";
import styles from "./products.module.css";
import ProductCard from "../components/ProductCard";
import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../lib/productApi";
import ProductCardProps from "../interface/ProductCardProps";

export default function ProductsPage() {
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [sort, setSort] = useState<string>("");
  useEffect(() => {
    fetchProducts({ sort })
      .then(setProducts)
      .catch((err) => {
        console.error("Lỗi khi fetch sản phẩm:", err);
      });
  }, [sort]);

  return (
    <>
      <section className={styles["product-page"]}>
        <aside className={styles["filter-sidebar"]}>
          <div className={styles["filter-section"]}>
            <h2 className={styles["filter-title"]}>Thương hiệu</h2>
            <ul className={styles["filter-list"]}>
              <li>
                <label>
                  <input type="checkbox" /> WHOO
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> OHUI
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> SUM37
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> SULWHASOO
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> CNP
                </label>
              </li>
            </ul>
          </div>

          <div className={styles["filter-section"]}>
            <h2 className={styles["filter-title"]}>Mức giá</h2>
            <ul className={styles["filter-list"]}>
              <li>
                <label>
                  <input type="checkbox" /> Dưới 500.000đ
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> 500.000đ - 1.000.000đ
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> 1.000.000đ - 2.000.000đ
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> 2.000.000đ - 5.000.000đ
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Trên 10.000.000đ
                </label>
              </li>
            </ul>
          </div>

          <div className={styles["filter-section"]}>
            <h2 className={styles["filter-title"]}>Loại</h2>
            <ul className={styles["filter-list"]}>
              <li>
                <label>
                  <input type="checkbox" /> Bộ sản phẩm
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Tinh chất
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Trang điểm
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Kem dưỡng
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Sữa rửa mặt
                </label>
              </li>
            </ul>
          </div>

          <div className={styles["filter-section"]}>
            <h2 className={styles["filter-title"]}>Loại da</h2>
            <ul className={styles["filter-list"]}>
              <li>
                <label>
                  <input type="checkbox" /> Da hỗn hợp
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Da dầu
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Da lão hóa
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Da nám/tàn nhang
                </label>
              </li>
            </ul>
          </div>
        </aside>

        <section className={styles["product-list"]}>
          <h2 className={styles["section-title"]}>Tất cả sản phẩm</h2>
          <div className={styles["sort-options"]}>
            <span className={styles["sort-label"]}>Sắp xếp:</span>
            <button
              onClick={() => setSort("a-z")}
              className={`${styles["sort-btn"]} ${sort === "a-z" ? styles.active : ""}`}
            >
              Tên A → Z
            </button>
            <button
              onClick={() => setSort("z-a")}
              className={`${styles["sort-btn"]} ${sort === "z-a" ? styles.active : ""}`}
            >
              Tên Z → A
            </button>
            <button
              onClick={() => setSort("price_asc")}
              className={`${styles["sort-btn"]} ${sort === "price_asc" ? styles.active : ""}`}
            >
              Giá tăng dần
            </button>
            <button
              onClick={() => setSort("price_desc")}
              className={`${styles["sort-btn"]} ${sort === "price_desc" ? styles.active : ""}`}
            >
              Giá giảm dần
            </button>
            <button
              onClick={() => setSort("new")}
              className={`${styles["sort-btn"]} ${sort === "new" ? styles.active : ""}`}
            >
              Hàng mới
            </button>
          </div>

          <div className={styles["product-grid"]}>
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                id={product.id}
                slug={product.slug}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                image={product.image}
                sold={product.sold}
                discount={product.discount}
                rating={product.rating ?? 0}
              />
            ))}
          </div>

          {/* <div className={styles["pagination"]}>
                        <button className={styles["page-btn"]}>«</button>
                        <button className={styles["page-btn active"]}>1</button>
                        <button className={styles["page-btn"]}>2</button>
                        <button className={styles["page-btn"]}>3</button>
                        <button className={styles["page-btn"]}>»</button>
                    </div> */}
        </section>
      </section>
    </>
  );
}
